"use client";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Room } from "@/components/ui/room";
import { Floor } from "@/components/ui/floor";
import { Lights, LightLights, DarkLights } from "@/components/ui/lights";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { LoopOnce } from "three";
import { useLoadingState } from "@/providers/LoadingProvider";

export function GamingRoom() {
  const { scene, animations } = useGLTF("./assets/models/gaming_room_m.glb");
  const { theme } = useTheme();
  const { actions } = useAnimations(animations, scene);
  const { isLoading } = useLoadingState();

  useEffect(() => {
    if (!actions) return;

    const loadingTimeout = setTimeout(() => {
      Object.values(actions).forEach((action) => {
        action!.reset().play();
        action!.clampWhenFinished = true;
        action!.setLoop(LoopOnce, 1);
      });
    }, 3000);

    return () => clearTimeout(loadingTimeout);
  }, [actions, isLoading]);

  return (
    <Room>
      {theme === "light" ? <LightLights /> : <DarkLights />}
      <Lights />
      <primitive object={scene} />
      <Floor />
    </Room>
  );
}

useGLTF.preload("./assets/models/gaming_room_m.glb");
