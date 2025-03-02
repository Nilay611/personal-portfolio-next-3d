import * as THREE from "three";
import { Line, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const CameraControls = ({
  setCameraVector,
}: {
  setCameraVector: (vector: THREE.Vector3) => void;
}) => {
  const curve = new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(2, 2, 2),
      new THREE.Vector3(-2, 2, 2),
      new THREE.Vector3(-2, 2, -2),
      new THREE.Vector3(2, 2, -2),
    ],
    true
  );

  const scroll = useScroll();

  useFrame(() => {
    const progress = scroll.offset;
    const point = curve.getPoint(progress);
    setCameraVector(point);
  });

  return <Line visible={false} points={curve.getPoints(50)} />;
};
