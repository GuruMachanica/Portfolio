/**
 * TechBalls - one WebGL canvas for an entire group using scissor/viewport.
 */
import React, { useEffect, useRef, useMemo } from "react";
import * as THREE from "three";

const BALL_COLOR = "#3d3d3d";

function buildScene(iconUrl) {
  const scene = new THREE.Scene();
  scene.add(new THREE.AmbientLight(0xffffff, 0.5));
  const dir = new THREE.DirectionalLight(0xffffff, 1.2);
  dir.position.set(5, 5, 5);
  scene.add(dir);

  const geo = new THREE.IcosahedronGeometry(1.5, 2);
  const mat = new THREE.MeshStandardMaterial({
    color: BALL_COLOR, flatShading: true,
    polygonOffset: true, polygonOffsetFactor: -5,
  });
  const mesh = new THREE.Mesh(geo, mat);
  scene.add(mesh);

  const spriteMat = new THREE.SpriteMaterial({ transparent: true, depthTest: false });
  const sprite = new THREE.Sprite(spriteMat);
  sprite.scale.set(1.8, 1.8, 1);
  scene.add(sprite);

  new THREE.TextureLoader().load(iconUrl, (tex) => {
    tex.colorSpace = THREE.SRGBColorSpace;
    spriteMat.map = tex;
    spriteMat.needsUpdate = true;
  });

  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  camera.position.set(0, 0, 4.5);
  return { scene, mesh, sprite, camera };
}

export default function TechBalls({ items }) {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const placeholderRefs = useRef([]);
  const scenesRef = useRef([]);
  const rafRef = useRef(null);

  const itemUrls = useMemo(() => items.map((it) => it.icon), []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
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

      if (canvas.width !== Math.round(W * renderer.getPixelRatio()) ||
          canvas.height !== Math.round(H * renderer.getPixelRatio())) {
        renderer.setSize(W, H);
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

        const fy = Math.sin(t * 2.5 + i * 1.3) * 0.18;
        s.mesh.position.y = fy;
        s.mesh.rotation.y = t * 0.8 + i * 0.5;
        s.mesh.rotation.x = Math.sin(t * 0.5 + i) * 0.25;
        s.sprite.position.y = fy;
        s.camera.aspect = w / h;
        s.camera.updateProjectionMatrix();

        renderer.setScissor(left, bottom, w, h);
        renderer.setViewport(left, bottom, w, h);
        renderer.setScissorTest(true);
        renderer.render(s.scene, s.camera);
      });
      renderer.setScissorTest(false);
    }

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      scenesRef.current.forEach(({ scene }) => {
        scene.traverse((o) => {
          o.geometry?.dispose();
          if (o.material) { o.material.map?.dispose(); o.material.dispose(); }
        });
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative" style={{ minHeight: "96px" }}>
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none"
        style={{ width: "100%", height: "100%" }} />
      <div className="flex flex-wrap justify-center md:justify-start gap-4 py-2">
        {items.map((technology, i) => (
          <div key={technology.name}
            ref={(el) => { placeholderRefs.current[i] = el; }}
            className="relative group w-20 h-20 shrink-0">
            <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-8
              whitespace-nowrap rounded-md bg-black/85 px-2 py-1 text-[12px] text-white
              opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
              {technology.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
