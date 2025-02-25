import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

export const GridAxesHelpers = () => {
  return (
    <>
      <gridHelper args={[10, 10]} />
      <axesHelper args={[10]} />
    </>
  );
};

export const CameraHelpers = () => {
  const { scene } = useThree();
  const cameraRef = useRef<THREE.OrthographicCamera>(null);

  useEffect(() => {
    if (cameraRef.current) {
      const helper = new THREE.CameraHelper(cameraRef.current);
      scene.add(helper);

      return () => {
        scene.remove(helper);
      };
    }
  }, [scene]);

  return cameraRef;
};
