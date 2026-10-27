import { useEffect, useRef } from "react";
import * as THREE from "three";

const HOLE_RADIUS = 1;
const DISK_INNER = 1.34;
const DISK_OUTER = 4.4;

const COLOR_RAMP = /* glsl */ `
  vec3 diskColor(float temp) {
    vec3 cold = vec3(0.52, 0.09, 0.02);
    vec3 warm = vec3(1.00, 0.44, 0.08);
    vec3 hot = vec3(1.00, 0.93, 0.80);
    vec3 color = mix(cold, warm, smoothstep(0.0, 0.55, temp));
    return mix(color, hot, smoothstep(0.52, 1.0, temp));
  }
`;

const DISK_VERT = /* glsl */ `
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uSize;

  attribute float aRadius;
  attribute float aAngle;
  attribute float aSpeed;
  attribute float aTemp;
  attribute float aSpread;

  varying float vTemp;
  varying float vAlpha;
  varying float vBeam;

  void main() {
    float angle = aAngle + uTime * aSpeed;
    float thickness = 0.045 + aRadius * 0.022;

    vec3 position = vec3(
      cos(angle) * aRadius,
      (aSpread - 0.5) * thickness,
      sin(angle) * aRadius
    );

    vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewPosition;
    gl_PointSize = uSize * uPixelRatio * (0.45 + aTemp * 0.85) * (10.0 / max(-viewPosition.z, 0.001));

    // Relativistic beaming: the limb rotating toward the camera reads brighter and bluer than the receding one.
    float beam = mix(0.42, 1.28, smoothstep(-1.0, 1.0, cos(angle)));

    vTemp = aTemp;
    vBeam = beam;
    vAlpha = beam * (0.28 + 0.72 * aTemp);
  }
`;

const DISK_FRAG = /* glsl */ `
  uniform float uExposure;

  varying float vTemp;
  varying float vAlpha;
  varying float vBeam;

  ${COLOR_RAMP}

  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    float core = smoothstep(0.5, 0.0, dist);
    float halo = smoothstep(0.5, 0.14, dist);

    vec3 color = diskColor(vTemp);
    color = mix(color, vec3(0.70, 0.80, 1.00), 0.22 * smoothstep(0.75, 1.28, vBeam));

    float intensity = (core * 0.85 + halo * 0.35) * vAlpha;
    if (intensity < 0.003) discard;

    // Filmic rolloff instead of a hard additive clip, so the inner disk glows white without banding to flat 1.0.
    vec3 mapped = vec3(1.0) - exp(-color * intensity * uExposure);
    gl_FragColor = vec4(mapped, intensity);
  }
`;

const LENS_VERT = /* glsl */ `
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uSize;

  attribute float aRadius;
  attribute float aAngle;
  attribute float aTemp;
  attribute float aWeight;

  varying float vTemp;
  varying float vAlpha;

  void main() {
    float drift = uTime * (0.06 + aTemp * 0.12);
    float angle = aAngle + drift;
    float breathe = 1.0 + sin(uTime * 0.7 + aAngle * 3.0) * 0.012;

    vec3 position = vec3(
      cos(angle) * aRadius * breathe,
      sin(angle) * aRadius * breathe,
      0.02
    );

    vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewPosition;
    gl_PointSize = uSize * uPixelRatio * (0.5 + aTemp * 0.7) * (10.0 / max(-viewPosition.z, 0.001));

    vTemp = aTemp;
    vAlpha = aWeight;
  }
`;

const LENS_FRAG = /* glsl */ `
  uniform float uExposure;

  varying float vTemp;
  varying float vAlpha;

  ${COLOR_RAMP}

  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    float core = smoothstep(0.5, 0.0, dist);
    float intensity = core * vAlpha;
    if (intensity < 0.003) discard;

    vec3 mapped = vec3(1.0) - exp(-diskColor(vTemp) * intensity * uExposure);
    gl_FragColor = vec4(mapped, intensity);
  }
`;

const createGlowTexture = () => {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, "rgba(255, 190, 110, 0.85)");
  gradient.addColorStop(0.28, "rgba(255, 120, 30, 0.32)");
  gradient.addColorStop(0.65, "rgba(150, 45, 5, 0.10)");
  gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
};

const buildDisk = (count) => {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const radii = new Float32Array(count);
  const angles = new Float32Array(count);
  const speeds = new Float32Array(count);
  const temps = new Float32Array(count);
  const spreads = new Float32Array(count);

  for (let i = 0; i < count; i += 1) {
    // Biasing the radius distribution inward keeps the hottest, fastest annulus dense enough to read as a ring.
    const radius = DISK_INNER + (DISK_OUTER - DISK_INNER) * Math.pow(Math.random(), 1.75);
    const span = (DISK_OUTER - DISK_INNER) || 1;
    const normalized = (radius - DISK_INNER) / span;

    radii[i] = radius;
    angles[i] = Math.random() * Math.PI * 2;
    speeds[i] = 1.35 / Math.pow(radius, 1.5);
    temps[i] = Math.pow(1 - normalized, 0.85);
    spreads[i] = Math.random();
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("aRadius", new THREE.BufferAttribute(radii, 1));
  geometry.setAttribute("aAngle", new THREE.BufferAttribute(angles, 1));
  geometry.setAttribute("aSpeed", new THREE.BufferAttribute(speeds, 1));
  geometry.setAttribute("aTemp", new THREE.BufferAttribute(temps, 1));
  geometry.setAttribute("aSpread", new THREE.BufferAttribute(spreads, 1));

  return geometry;
};

const buildLensed = (count) => {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const radii = new Float32Array(count);
  const angles = new Float32Array(count);
  const temps = new Float32Array(count);
  const weights = new Float32Array(count);

  for (let i = 0; i < count; i += 1) {
    const angle = Math.random() * Math.PI * 2;
    // Lensed light from the far side of the disk arrives above and below the silhouette, never at the limbs.
    const vertical = Math.abs(Math.sin(angle));

    radii[i] = HOLE_RADIUS * (1.08 + Math.pow(Math.random(), 1.5) * 0.62);
    angles[i] = angle;
    temps[i] = 0.5 + Math.random() * 0.5;
    weights[i] = Math.pow(vertical, 2.4) * (0.3 + Math.random() * 0.7);
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("aRadius", new THREE.BufferAttribute(radii, 1));
  geometry.setAttribute("aAngle", new THREE.BufferAttribute(angles, 1));
  geometry.setAttribute("aTemp", new THREE.BufferAttribute(temps, 1));
  geometry.setAttribute("aWeight", new THREE.BufferAttribute(weights, 1));

  return geometry;
};

const buildStars = (count) => {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i += 1) {
    const radius = 26 + Math.random() * 34;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.cos(phi) * 0.55;
    positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta) - 12;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  return geometry;
};

const BlackHole = ({
  className = "",
  focusX = 0.72,
  focusY = 0.5,
  scale = 0.62,
  spin = 1,
  quality = "auto",
}) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(hover: none)").matches;
    const smallViewport = window.innerWidth < 768;
    const lowTier =
      quality === "low" ||
      (quality === "auto" &&
        (smallViewport ||
          (navigator.hardwareConcurrency || 8) <= 4 ||
          (navigator.deviceMemory || 8) <= 4));

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: "high-performance" });
    } catch (error) {
      console.warn("WebGL unavailable, skipping black hole", error);
      return undefined;
    }

    // Additive particles are fill-rate bound, so 1.5 DPR is visually indistinguishable from 2 at half the fragments.
    const pixelRatio = Math.min(window.devicePixelRatio || 1, lowTier ? 1.25 : 1.5);
    renderer.setPixelRatio(pixelRatio);
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 200);
    camera.position.set(0, 0.9, 7.6);
    camera.lookAt(0, 0, 0);

    const root = new THREE.Group();
    root.rotation.set(-0.02, 0, 0.07);
    scene.add(root);

    const silhouette = new THREE.Mesh(
      new THREE.SphereGeometry(HOLE_RADIUS, 48, 32),
      new THREE.MeshBasicMaterial({ color: 0x000000 })
    );
    root.add(silhouette);

    const diskGeometry = buildDisk(lowTier ? 9000 : 22000);
    const timeUniform = { value: 0 };
    const exposureUniform = { value: lowTier ? 1.45 : 1.7 };

    const diskMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: timeUniform,
        uPixelRatio: { value: pixelRatio },
        uSize: { value: lowTier ? 1.8 : 2.2 },
        uExposure: exposureUniform,
      },
      vertexShader: DISK_VERT,
      fragmentShader: DISK_FRAG,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const disk = new THREE.Points(diskGeometry, diskMaterial);
    disk.frustumCulled = false;
    root.add(disk);

    const lensGeometry = buildLensed(lowTier ? 2200 : 5000);
    const lensMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: timeUniform,
        uPixelRatio: { value: pixelRatio },
        uSize: { value: lowTier ? 2.3 : 2.8 },
        uExposure: exposureUniform,
      },
      vertexShader: LENS_VERT,
      fragmentShader: LENS_FRAG,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const lensed = new THREE.Points(lensGeometry, lensMaterial);
    lensed.frustumCulled = false;
    root.add(lensed);

    const ringGeometry = new THREE.RingGeometry(HOLE_RADIUS * 1.045, HOLE_RADIUS * 1.12, 160);
    const photonRing = new THREE.Mesh(
      ringGeometry,
      new THREE.MeshBasicMaterial({
        color: 0xffe3b0,
        transparent: true,
        opacity: lowTier ? 0.75 : 0.95,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
      })
    );
    photonRing.frustumCulled = false;
    root.add(photonRing);

    const haloRing = new THREE.Mesh(
      new THREE.RingGeometry(HOLE_RADIUS * 1.12, HOLE_RADIUS * 1.5, 128),
      new THREE.MeshBasicMaterial({
        color: 0xff8c2a,
        transparent: true,
        opacity: 0.16,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
      })
    );
    haloRing.frustumCulled = false;
    root.add(haloRing);

    const glowTexture = createGlowTexture();
    const glow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTexture,
        transparent: true,
        opacity: lowTier ? 0.4 : 0.62,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    glow.scale.setScalar(9.5);
    glow.position.z = -1.2;
    root.add(glow);

    const starGeometry = buildStars(lowTier ? 420 : 1100);
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.055,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    const layout = () => {
      const width = mount.clientWidth || 1;
      const height = mount.clientHeight || 1;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;

      const halfHeight = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.length();
      const halfWidth = halfHeight * camera.aspect;
      const anchoredY = (1 - 2 * focusY) * halfHeight;

      root.position.set((focusX * 2 - 1) * halfWidth, anchoredY, 0);
      root.scale.setScalar(scale * (coarsePointer && smallViewport ? 0.82 : 1));
      camera.updateProjectionMatrix();
    };

    layout();

    const pointer = { x: 0, y: 0 };
    const eased = { x: 0, y: 0 };
    const onPointerMove = (event) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
    };

    const clock = new THREE.Clock();
    let frameHandle = 0;
    let onScreen = true;
    let visible = !document.hidden;

    const renderFrame = (time = clock.getElapsedTime()) => {
      timeUniform.value = time * spin;
      stars.rotation.y = time * 0.006;

      eased.x += (pointer.x - eased.x) * 0.045;
      eased.y += (pointer.y - eased.y) * 0.045;
      root.rotation.x = -0.02 + eased.y * 0.05;
      root.rotation.z = 0.07 - eased.x * 0.035;
      root.position.z = eased.x * 0.25;

      renderer.render(scene, camera);
    };

    const loop = () => {
      renderFrame();
      frameHandle = requestAnimationFrame(loop);
    };

    const syncPlayback = () => {
      const shouldPlay = onScreen && visible && !reducedMotion.matches;
      if (shouldPlay && !frameHandle) {
        clock.start();
        frameHandle = requestAnimationFrame(loop);
      } else if (!shouldPlay && frameHandle) {
        cancelAnimationFrame(frameHandle);
        frameHandle = 0;
        clock.stop();
      }
    };

    if (reducedMotion.matches) {
      renderFrame(9);
    } else {
      syncPlayback();
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        syncPlayback();
      },
      { threshold: 0 }
    );
    observer.observe(mount);

    const onVisibility = () => {
      visible = !document.hidden;
      syncPlayback();
    };
    const onResize = () => {
      layout();
      if (reducedMotion.matches) renderFrame(9);
    };
    const onMotionPreferenceChange = () => syncPlayback();

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("resize", onResize);
    if (!coarsePointer) window.addEventListener("pointermove", onPointerMove, { passive: true });
    reducedMotion.addEventListener("change", onMotionPreferenceChange);

    return () => {
      if (frameHandle) cancelAnimationFrame(frameHandle);
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      reducedMotion.removeEventListener("change", onMotionPreferenceChange);

      diskGeometry.dispose();
      lensGeometry.dispose();
      starGeometry.dispose();
      ringGeometry.dispose();
      haloRing.geometry.dispose();
      silhouette.geometry.dispose();
      glowTexture.dispose();
      [
        diskMaterial,
        lensMaterial,
        starMaterial,
        photonRing.material,
        haloRing.material,
        glow.material,
        silhouette.material,
      ].forEach((material) => material.dispose());

      renderer.dispose();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, [className, focusX, focusY, scale, spin, quality]);

  return <div ref={mountRef} className={className} aria-hidden="true" />;
};

export default BlackHole;
