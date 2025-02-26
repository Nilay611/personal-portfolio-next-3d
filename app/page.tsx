"use client";
import ModelContainer from "@/components/pages/ModelContainer";
import Landing from "@/components/pages/Landing";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";

export default function Home() {
  return (
    <main className="relative">
      <ThemeSwitcher />
      <div className="fixed w-screen h-screen">
        <ModelContainer />
      </div>
      <Landing />
    </main>
  );
}
