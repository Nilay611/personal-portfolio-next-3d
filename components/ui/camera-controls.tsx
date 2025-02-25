import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Line, useScroll } from "@react-three/drei";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

export const CameraControls = ({
  setCameraVector,
}: {
  setCameraVector: (vector: THREE.Vector3) => void;
}) => {
  const curve = new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(10, 10, 10),
      new THREE.Vector3(-10, 10, 10),
      new THREE.Vector3(-10, 10, -10),
      new THREE.Vector3(10, 10, -10),
    ],
    true
  );

  const scroll = useScroll();
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    tl.current = gsap.timeline();
    tl.current.to({}, { duration: 1 });
  }, []);

  useFrame(() => {
    const progress = scroll.offset;
    const point = curve.getPoint(progress);
    setCameraVector(point);
  });

  return <Line visible={false} points={curve.getPoints(50)} />;
};
