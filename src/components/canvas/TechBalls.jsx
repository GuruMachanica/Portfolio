/**
 * TechBalls - High-performance WebGL 3D faceted tech spheres with titanium chrome lighting,
 * dynamic cursor parallax, floating hover tooltips, and click inspection.
 */
import React, { useEffect, useRef, useMemo } from "react";
import * as THREE from "three";

const TITANIUM_COLOR = "#1c1c1f";

function buildScene(iconUrl) {
  const scene = new THREE.Scene();

  // Studio 3-Point Lighting
  const ambient = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambient);

  const keyLight = new THREE.DirectionalLight(0xffffff, 1.8);
  keyLight.position.set(5, 6, 5);
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0x61dafb, 1.3);
  rimLight.position.set(-5, -5, -4);
  scene.add(rimLight);

  const topFill = new THREE.DirectionalLight(0xffffff, 1.0);
  topFill.position.set(0, 5, -2);
  scene.add(topFill);

  // Faceted 3D Titanium Icosahedron Polyhedron
  const geo = new THREE.IcosahedronGeometry(1.45, 1);
  const mat = new THREE.MeshStandardMaterial({
    color: TITANIUM_COLOR,
    flatShading: true,
    roughness: 0.25,
    metalness: 0.85,
    polygonOffset: true,
    polygonOffsetFactor: -4,
  });
  const mesh = new THREE.Mesh(geo, mat);
  scene.add(mesh);

  // Wireframe outline accent for technical precision
  const wireGeo = new THREE.WireframeGeometry(geo);
  const wireMat = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.12,
  });
  const wireMesh = new THREE.LineSegments(wireGeo, wireMat);
  mesh.add(wireMesh);

  // High-Resolution Decal Sprite for Tech Brand Icon
  const spriteMat = new THREE.SpriteMaterial({
    transparent: true,
    depthTest: false,
  });
  const sprite = new THREE.Sprite(spriteMat);
  sprite.scale.set(1.65, 1.65, 1);
  scene.add(sprite);

  new THREE.TextureLoader().load(iconUrl, (tex) => {
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    spriteMat.map = tex;
    spriteMat.needsUpdate = true;
  });

  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  camera.position.set(0, 0, 4.6);
  return { scene, mesh, sprite, camera };
}

export default function TechBalls({ items, onSelectTech }) {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const placeholderRefs = useRef([]);
  const scenesRef = useRef([]);
  const rafRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  const itemUrls = useMemo(() => items.map((it) => it.icon), [items]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mousePos.current = {
        x: (e.clientX / innerWidth) * 2 - 1,
        y: -(e.clientY / innerHeight) * 2 + 1,
      };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.autoClear = false;

    scenesRef.current = itemUrls.map(buildScene);

    let t = 0, last = performance.now();

    function animate(now) {
      rafRef.current = requestAnimationFrame(animate);
      t += Math.min((now - last) / 1000, 0.05);
      last = now;

      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const wrapRect = wrapper.getBoundingClientRect();
      const W = wrapRect.width, H = wrapRect.height;

      if (W <= 0 || H <= 0) return;

      const pixelRatio = renderer.getPixelRatio();
      if (
        canvas.width !== Math.round(W * pixelRatio) ||
        canvas.height !== Math.round(H * pixelRatio)
      ) {
        renderer.setSize(W, H, false);
      }

      renderer.clear();

      placeholderRefs.current.forEach((el, i) => {
        if (!el) return;
        const s = scenesRef.current[i];
        if (!s) return;
        const r = el.getBoundingClientRect();
        const left = r.left - wrapRect.left;
        const bottom = wrapRect.bottom - r.bottom;
        const w = r.width, h = r.height;
        if (w <= 0 || h <= 0) return;

        // Smooth Floating Oscillation
        const fy = Math.sin(t * 2.2 + i * 1.4) * 0.16;
        s.mesh.position.y = fy;
        s.sprite.position.y = fy;

        // Parallax cursor tracking with smooth damping
        const targetRotY = t * 0.6 + i * 0.4 + mousePos.current.x * 0.75;
        const targetRotX = Math.sin(t * 0.4 + i) * 0.2 - mousePos.current.y * 0.45;

        s.mesh.rotation.y += (targetRotY - s.mesh.rotation.y) * 0.08;
        s.mesh.rotation.x += (targetRotX - s.mesh.rotation.x) * 0.08;

        s.camera.aspect = w / h;
        s.camera.updateProjectionMatrix();

        renderer.setScissor(left, bottom, w, h);
        renderer.setViewport(left, bottom, w, h);
        renderer.setScissorTest(true);
        renderer.render(s.scene, s.camera);
      });
    }

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      renderer.dispose();
    };
  }, [itemUrls]);

  return (
    <div ref={wrapperRef} className="relative w-full py-4">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none w-full h-full"
      />
      <div className="flex flex-wrap items-center justify-around gap-2 sm:gap-4">
        {items.map((item, idx) => (
          <div
            key={item.name}
            ref={(el) => (placeholderRefs.current[idx] = el)}
            onClick={() => onSelectTech && onSelectTech(item.name)}
            className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center relative group cursor-pointer"
            title={`Click to inspect ${item.name}`}
          >
            {/* Floating Cyber Tooltip Tag on Hover */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-top-4 transition-all duration-200 pointer-events-none z-30 whitespace-nowrap">
              <span className="px-2.5 py-1 rounded-md bg-[#090909]/95 text-white border border-white/30 text-[11px] font-mono font-bold tracking-wider uppercase shadow-2xl backdrop-blur-md">
                {item.name}
              </span>
              <div className="w-1.5 h-1.5 bg-[#090909] border-r border-b border-white/30 transform rotate-45 mx-auto -mt-0.5" />
            </div>

            {/* Subtle luminous ambient ground glow */}
            <div className="absolute inset-2 rounded-full bg-white/[0.03] group-hover:bg-white/[0.08] blur-md transition-all pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
}
