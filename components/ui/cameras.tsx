import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";

export const Cameras = ({ cameraVector }: { cameraVector: THREE.Vector3 }) => {
  const orthoCamRef = useRef<THREE.OrthographicCamera>(null);

  useEffect(() => {
    if (orthoCamRef.current) {
      orthoCamRef.current.lookAt(new THREE.Vector3(-10, 0, -10));
    }
  }, []);

  return (
    <>
      <PerspectiveCamera />
      <OrthographicCamera
        ref={orthoCamRef}
        makeDefault
        position={cameraVector}
        near={-50}
        far={50}
        zoom={45}
      />
    </>
  );
};
