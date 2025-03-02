import { OrthographicCamera } from "@react-three/drei";
import { Vector3 } from "three";

export const Cameras = ({ cameraVector }: { cameraVector: Vector3 }) => {
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
