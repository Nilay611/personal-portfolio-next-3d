"use client";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Room } from "@/components/ui/room";
import { Floor } from "@/components/ui/floor";
import { Lights, DarkLights } from "@/components/ui/lights";
import { useEffect } from "react";
import { LoopOnce } from "three";
import { useLoadingState } from "@/providers/LoadingProvider";

export function GamingRoom() {
  const { scene, animations } = useGLTF("./assets/models/gaming_room.glb");
  const { actions } = useAnimations(animations, scene);
  const { enter } = useLoadingState();

  useEffect(() => {
    if (!actions) return;
    Object.values(actions).forEach((action) => {
      action!.reset().play();
      action!.clampWhenFinished = true;
      action!.setLoop(LoopOnce, 1);
    });
  }, [actions, enter]);

  return (
    <Room>
      <DarkLights />
      <Lights />
      <primitive object={scene} />
      <Floor />
    </Room>
  );
}

useGLTF.preload("./assets/models/gaming_room.glb");
