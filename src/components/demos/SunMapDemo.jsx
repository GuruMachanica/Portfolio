import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FaSun, FaBolt, FaChartLine } from "react-icons/fa";

const SunMapDemo = () => {
  const mountRef = useRef(null);
  const [elevation, setElevation] = useState(45);
  const [azimuth, setAzimuth] = useState(135);
  const lightRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(6, 6, 8);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    currentMount.appendChild(renderer.domElement);

    // Ground Plane
    const groundGeo = new THREE.PlaneGeometry(12, 12);
    const groundMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.8 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Buildings
    const bGeo1 = new THREE.BoxGeometry(2, 3, 2);
    const bMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3, metalness: 0.2 });
    const b1 = new THREE.Mesh(bGeo1, bMat);
    b1.position.set(-1, 1.5, -1);
    b1.castShadow = true;
    b1.receiveShadow = true;
    scene.add(b1);

    const bGeo2 = new THREE.BoxGeometry(1.5, 2, 1.5);
    const b2 = new THREE.Mesh(bGeo2, bMat);
    b2.position.set(1.5, 1, 1);
    b2.castShadow = true;
    b2.receiveShadow = true;
    scene.add(b2);

    // Sun Light
    const sunLight = new THREE.DirectionalLight(0xffffff, 2.5);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    scene.add(sunLight);
    lightRef.current = sunLight;

    const ambient = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambient);

    let reqId;
    const animate = () => {
      reqId = requestAnimationFrame(animate);
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
  }, []);

  useEffect(() => {
    if (lightRef.current) {
      const radElev = (elevation * Math.PI) / 180;
      const radAzim = (azimuth * Math.PI) / 180;
      const r = 10;
      const x = r * Math.cos(radElev) * Math.sin(radAzim);
      const y = r * Math.sin(radElev);
      const z = r * Math.cos(radElev) * Math.cos(radAzim);
      lightRef.current.position.set(x, y, z);
    }
  }, [elevation, azimuth]);

  // Projected solar output metrics
  const estimatedKwh = Math.round((Math.sin((elevation * Math.PI) / 180) * 850) + 120);
  const revenueForecast = "$" + Math.round(estimatedKwh * 0.14);

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-full text-white">
      {/* 3D Simulation Viewport */}
      <div className="flex-1 bg-black/60 rounded-2xl border border-white/10 relative overflow-hidden flex flex-col justify-between min-h-[340px]">
        <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white border border-white/20">
            SPATIAL SOLAR RAY-TRACING
          </span>
          <span className="text-[10px] font-mono text-zinc-400">
            ELEVATION: {elevation}° • AZIMUTH: {azimuth}°
          </span>
        </div>

        <div ref={mountRef} className="w-full h-full flex-1" />

        <div className="p-3 bg-black/80 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
          <span>IRRADIATION: {estimatedKwh} kWh/m²</span>
          <span>ESTIMATED VALUE: {revenueForecast}/mo</span>
          <span>SHADOW OCCLUSION: 14%</span>
        </div>
      </div>

      {/* Control Console */}
      <div className="w-full lg:w-80 flex flex-col justify-between space-y-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
            SOLAR TRAJECTORY CONTROLS
          </span>
          <h4 className="text-[18px] font-bold font-poppins text-white mb-3">
            Real-Time Sun Simulation
          </h4>

          {/* Sliders */}
          <div className="space-y-4 mb-4">
            <div>
              <div className="flex justify-between text-[11px] font-mono mb-1">
                <span className="text-zinc-400">SUN ELEVATION ANGLE</span>
                <span className="text-white font-bold">{elevation}°</span>
              </div>
              <input
                type="range"
                min="10"
                max="85"
                value={elevation}
                onChange={(e) => setElevation(Number(e.target.value))}
                className="w-full accent-white cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-[11px] font-mono mb-1">
                <span className="text-zinc-400">SUN AZIMUTH (ROTATION)</span>
                <span className="text-white font-bold">{azimuth}°</span>
              </div>
              <input
                type="range"
                min="0"
                max="360"
                value={azimuth}
                onChange={(e) => setAzimuth(Number(e.target.value))}
                className="w-full accent-white cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Analytics Card */}
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 font-mono text-[11px] space-y-2 text-zinc-400">
          <span className="text-[10px] font-bold uppercase text-white block">
            PREDICTIVE SPATIAL METRICS:
          </span>
          <div className="flex justify-between">
            <span>Peak Solar Window:</span>
            <span className="text-white font-bold">11:30 AM - 3:45 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Model Convergence:</span>
            <span className="text-white font-bold">99.2% Accuracy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunMapDemo;
