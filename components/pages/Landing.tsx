import { Hero } from "@/components/screens/Hero";
import { About } from "@/components/screens/About";
import { SectionMargin } from "@/components/ui/section-margin";

const Landing = () => {
  return (
    <div className="w-full h-full overflow-hidden z-10">
      <div className="relative">
        <Hero />
        <SectionMargin classes="first-move" />
        <About />
      </div>
    </div>
  );
};

export default Landing;
