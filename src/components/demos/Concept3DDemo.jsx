import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FaCube, FaEye, FaTerminal, FaSync } from "react-icons/fa";

const PRESETS = [
  { name: "Cyberpunk Drone Chassis", geo: "torus", vertices: "1,240", latency: "1.2s", accuracy: "99.1%" },
  { name: "Neural Spatial Node", geo: "octahedron", vertices: "2,048", latency: "0.8s", accuracy: "98.4%" },
  { name: "Solar Concentrator Dish", geo: "cylinder", vertices: "3,120", latency: "1.6s", accuracy: "99.6%" }
];

const Concept3DDemo = () => {
  const mountRef = useRef(null);
  const [activePreset, setActivePreset] = useState(PRESETS[0]);
  const [wireframe, setWireframe] = useState(true);
  const [prompt, setPrompt] = useState(PRESETS[0].name);
  const [generating, setGenerating] = useState(false);
  const meshRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambient);
    const point = new THREE.PointLight(0xffffff, 2, 50);
    point.position.set(5, 5, 5);
    scene.add(point);

    // Initial Geometry
    const getGeometry = (type) => {
      if (type === "torus") return new THREE.TorusKnotGeometry(1, 0.35, 100, 16);
      if (type === "octahedron") return new THREE.IcosahedronGeometry(1.4, 2);
      return new THREE.CylinderGeometry(1.2, 1.2, 2, 32);
    };

    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.8
    });

    const mesh = new THREE.Mesh(getGeometry(activePreset.geo), material);
    scene.add(mesh);
    meshRef.current = mesh;

    let reqId;
    const animate = () => {
      reqId = requestAnimationFrame(animate);
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.008;
        meshRef.current.rotation.y += 0.012;
      }
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!currentMount) return;
      const w = currentMount.clientWidth;
      const h = currentMount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener("resize", handleResize);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [activePreset]);

  const handleGenerate = (p) => {
    setGenerating(true);
    setTimeout(() => {
      setActivePreset(p);
      setPrompt(p.name);
      setGenerating(false);
    }, 600);
  };

  const toggleWireframe = () => {
    if (meshRef.current) {
      meshRef.current.material.wireframe = !wireframe;
      setWireframe(!wireframe);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-full text-white">
      {/* 3D Canvas Area */}
      <div className="flex-1 bg-black/60 rounded-2xl border border-white/10 relative overflow-hidden flex flex-col justify-between min-h-[340px]">
        <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white border border-white/20">
            THREE.JS LIVE VIEWPORT
          </span>
          <span className="text-[10px] font-mono text-zinc-400">
            ROTATION: 60 FPS
          </span>
        </div>

        <div className="absolute top-3 right-3 z-10">
          <button
            onClick={toggleWireframe}
            className="px-2.5 py-1 rounded bg-white/10 hover:bg-white hover:text-black font-mono text-[11px] font-bold transition-colors border border-white/15">
            {wireframe ? "SOLID MODE" : "WIREFRAME"}
          </button>
        </div>

        <div ref={mountRef} className="w-full h-full flex-1" />

        <div className="p-3 bg-black/80 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
          <span>VERTICES: {activePreset.vertices}</span>
          <span>LATENCY: {activePreset.latency}</span>
          <span>PRECISION: {activePreset.accuracy}</span>
        </div>
      </div>

      {/* Control Console */}
      <div className="w-full lg:w-80 flex flex-col justify-between space-y-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
            CONCEPT3D GENERATIVE PIPELINE
          </span>
          <h4 className="text-[18px] font-bold font-poppins text-white mb-3">
            Prompt to Spatial Mesh
          </h4>

          {/* Prompt Selector */}
          <div className="space-y-2 mb-4">
            <label className="text-[11px] font-mono text-zinc-400">SELECT PRESET PROMPT:</label>
            {PRESETS.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleGenerate(p)}
                disabled={generating}
                className={`w-full text-left p-3 rounded-xl border font-mono text-[12px] transition-all flex items-center justify-between ${
                  activePreset.name === p.name
                    ? "bg-white text-black font-bold border-white"
                    : "bg-white/[0.03] text-zinc-300 hover:text-white border-white/10 hover:border-white/30"
                }`}>
                <span>{p.name}</span>
                <FaCube className="w-3 h-3" />
              </button>
            ))}
          </div>
        </div>

        {/* Telemetry Output */}
        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 font-mono text-[11px] space-y-1 text-zinc-400">
          <div className="flex justify-between text-white font-bold">
            <span>PIPELINE STATUS:</span>
            <span>{generating ? "PROCESSING LATENT..." : "READY"}</span>
          </div>
          <div>MODEL: PyTorch 3D Latent Transformer</div>
          <div>COORDINATES: Normalized Spatial Grid</div>
        </div>
      </div>
    </div>
  );
};

export default Concept3DDemo;
