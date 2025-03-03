import { useCallback, useEffect, useLayoutEffect } from "react";
import { useThree } from "@react-three/fiber";
import { Object3D, Mesh, OrthographicCamera } from "three";
import gsap from "gsap";
import { desktopAnimations, mobileAnimations } from "@/shared/animations";

export const Room: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { scene, camera } = useThree();

  const findSceneObjectByName = (root: Object3D, targetName: string) => {
    return root.getObjectByName(targetName);
  };

  const setShadowForChildren = useCallback((object: Object3D) => {
    object.traverse((child) => {
      if (child instanceof Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, []);

  useEffect(() => {
    if (!scene) return;

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

      if (!groupRef || !floorRef) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 960px)", () => {
        desktopAnimations(groupRef, floorRef, camera as OrthographicCamera);
      });

      mm.add("(max-width: 959px)", () => {
        mobileAnimations(groupRef, camera as OrthographicCamera);
      });

      return () => mm.revert();
    });

    return () => ctx.revert();
  }, [scene, camera]);

  return <group name="gamingRoom">{children}</group>;
};
