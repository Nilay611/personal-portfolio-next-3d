"use client";
import ModelContainer from "@/components/pages/ModelContainer";
import Landing from "@/components/pages/Landing";
import Preloader from "@/components/pages/Preloader";

export default function Home() {
  return (
    <main className="relative">
      <Preloader />
      <div className="fixed w-screen h-screen">
        <ModelContainer />
      </div>
      <Landing />
    </main>
  );
}
