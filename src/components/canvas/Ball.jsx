import React, { Suspense, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import {
  Decal,
  Float,
  Preload,
  useTexture,
} from '@react-three/drei';
import * as THREE from 'three';
import Loader from '../Loader';

/* --- Single ball mesh, used in both single and group canvases --- */
const Ball = ({ imgUrl, position = [0, 0, 0], scale = 2.75 }) => {
  const [decal] = useTexture([imgUrl]);
  const { gl } = useThree();

  useEffect(() => {
    decal.colorSpace = THREE.SRGBColorSpace;
    decal.generateMipmaps = true;
    decal.minFilter = THREE.LinearMipmapLinearFilter;
    decal.magFilter = THREE.LinearFilter;
    decal.anisotropy = gl.capabilities.getMaxAnisotropy();
    decal.needsUpdate = true;
  }, [decal, gl]);

  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={scale} position={position}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#3d3d3d"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

/* --- Original single-ball canvas (kept for backward compatibility) --- */
const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 1.5]}
      gl={{ preserveDrawingBuffer: false, antialias: true, alpha: true }}>
      <Suspense fallback={<Loader />}>
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

/* --- Group canvas: ALL balls for one category in a SINGLE WebGL context --- */
const GroupBallCanvas = ({ items }) => {
  const count = items.length;
  const spacing = 3.2;
  const totalWidth = (count - 1) * spacing;
  const centerX = totalWidth / 2;
  // Push camera back enough to see all balls side by side
  const cameraZ = 5 + count * 1.2;

  return (
    <Canvas
      frameloop="always"
      dpr={[1, 1.5]}
      style={{ width: '100%', height: '110px' }}
      camera={{ position: [centerX, 0, cameraZ], fov: 40 }}
      gl={{ preserveDrawingBuffer: false, antialias: true, alpha: true }}>
      <Suspense fallback={null}>
        {items.map((item, i) => (
          <Ball
            key={item.name}
            imgUrl={item.icon}
            position={[i * spacing, 0, 0]}
            scale={1.4}
          />
        ))}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export { BallCanvas, GroupBallCanvas };
export default BallCanvas;

