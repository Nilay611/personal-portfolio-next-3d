import { OrthographicCamera } from "@react-three/drei";
import * as THREE from "three";

export const Cameras = ({ cameraVector }: { cameraVector: THREE.Vector3 }) => {
  return (
    <OrthographicCamera
      makeDefault
      position={cameraVector}
      near={-50}
      far={50}
      zoom={45}
    />
  );
};
