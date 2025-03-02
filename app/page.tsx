"use client";
import ModelContainer from "@/components/pages/ModelContainer";
import Landing from "@/components/pages/Landing";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import Preloader from "@/components/pages/Preloader";
import { useLoadingState } from "@/providers/LoadingProvider";

export default function Home() {
  const { isLoading } = useLoadingState();

  return (
    <main className="relative">
      <Preloader isLoading={isLoading} />
      <ThemeSwitcher />
      <div className="fixed w-screen h-screen">
        <ModelContainer />
      </div>
      <Landing />
    </main>
  );
}
