import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Room: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useThree();

  useEffect(() => {
    const setShadowForChildren = (object: THREE.Object3D) => {
      if (object instanceof THREE.Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }

      if (object instanceof THREE.Group || object instanceof THREE.Object3D) {
        object.children.forEach(setShadowForChildren);
      }
    };

    if (groupRef.current) {
      groupRef.current.children.forEach(setShadowForChildren);
    }
  }, [scene]);

  useEffect(() => {
    if (!groupRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(groupRef.current.position, {
      x: () => {
        return -window.innerWidth * 0.0025;
      },
      z: () => {
        return window.innerWidth * 0.0055;
      },
      scrollTrigger: {
        trigger: ".first-move",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
        markers: true,
        invalidateOnRefresh: true,
      },
    });
  }, []);

  return <group ref={groupRef}>{children}</group>;
};
