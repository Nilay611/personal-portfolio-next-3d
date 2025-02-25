"use client";
import { Canvas } from "@react-three/fiber";
import ModelContainer from "@/components/pages/ModelContainer";
import Landing from "@/components/pages/Landing";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";

export default function Home() {
  return (
    <main className="relative">
      <ThemeSwitcher />
      <div className="fixed w-screen h-screen">
        <Canvas
          className="w-full h-full"
          camera={{
            fov: 64,
            position: [8, 10, 8],
          }}
          gl={{ antialias: true }}
          dpr={[1, 1.5]}
          shadows="soft"
        >
          <ModelContainer />
        </Canvas>
      </div>
      <Landing />
    </main>
  );
}
