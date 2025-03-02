import { OrthographicCamera } from "@react-three/drei";
import * as THREE from "three";

export const Cameras = ({ cameraVector }: { cameraVector: THREE.Vector3 }) => {
  return (
    <OrthographicCamera
      makeDefault
      position={cameraVector}
      near={-25}
      far={25}
      zoom={180}
    />
  );
};
