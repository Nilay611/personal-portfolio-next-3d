import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { OrthographicCamera, CameraHelper } from "three";

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
  const cameraRef = useRef<OrthographicCamera>(null);

  useEffect(() => {
    if (cameraRef.current) {
      const helper = new CameraHelper(cameraRef.current);
      scene.add(helper);

      return () => {
        scene.remove(helper);
      };
    }
  }, [scene]);

  return cameraRef;
};
