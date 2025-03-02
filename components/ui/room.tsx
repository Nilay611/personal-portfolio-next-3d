import { useCallback, useEffect, useLayoutEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  desktopAnimations,
  mobileAnimations,
  commonAnimations,
} from "@/shared/animations";

export const Room: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { scene, camera } = useThree();
  gsap.registerPlugin(ScrollTrigger);

  const findSceneObjectByName = (root: THREE.Object3D, targetName: string) => {
    return root.getObjectByName(targetName);
  };

  const setShadowForChildren = useCallback((object: THREE.Object3D) => {
    object.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, []);

  useEffect(() => {
    if (!scene) return;
    console.log(scene);

    const groupRef = findSceneObjectByName(scene, "gamingRoom");
    if (groupRef) {
      setShadowForChildren(groupRef);
    }
  }, [scene, setShadowForChildren]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!scene || !camera) return;

      const groupRef = findSceneObjectByName(scene, "gamingRoom");
      const floorRef = findSceneObjectByName(scene, "floorMesh");
      const tabletRef = findSceneObjectByName(scene, "Tablet");

      if (!groupRef || !floorRef || !tabletRef) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 960px)", () => {
        desktopAnimations(
          groupRef,
          tabletRef,
          camera as THREE.OrthographicCamera
        );
      });

      mm.add("(max-width: 959px)", () => {
        mobileAnimations(groupRef, camera as THREE.OrthographicCamera);
      });

      mm.add("all", () => {
        commonAnimations(floorRef);
      });

      return () => mm.revert();
    });

    return () => ctx.revert();
  }, [scene, camera]);

  return <group name="gamingRoom">{children}</group>;
};
