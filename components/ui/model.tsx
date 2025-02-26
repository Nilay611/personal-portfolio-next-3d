"use client";
import { useGLTF } from "@react-three/drei";
import { Room } from "@/components/ui/room";
import { Floor } from "@/components/ui/floor";
import { Lights, LightLights, DarkLights } from "@/components/ui/lights";
import { useTheme } from "next-themes";

export function GamingRoom() {
  const { scene } = useGLTF("./assets/models/gaming_room.glb");
  const { theme } = useTheme();

  return (
    <Room>
      {theme === "light" ? <LightLights /> : <DarkLights />}
      <Lights />
      <primitive object={scene} />
      <Floor />
    </Room>
  );
}

useGLTF.preload("./assets/models/gaming_room.glb");
