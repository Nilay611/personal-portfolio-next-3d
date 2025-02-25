import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { PerspectiveCamera } from "@react-three/drei";

export const InsetCamera = () => {
  const { gl, scene, size, camera } = useThree();
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useFrame(() => {
    if (!cameraRef.current) return;
    gl.setViewport(0, 0, size.width, size.height);
    gl.render(scene, camera);
    gl.clearDepth();
    gl.setScissorTest(true);
    gl.setScissor(size.width - 200, size.height - 200, 200, 200);
    gl.setViewport(size.width - 200, size.height - 200, 200, 200);
    gl.render(scene, cameraRef.current);
    gl.setScissorTest(false);
  });

  return <PerspectiveCamera ref={cameraRef} position={[8, 10, 8]} fov={75} />;
};
