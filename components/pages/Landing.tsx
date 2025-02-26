import { Hero } from "@/components/screens/Hero";
import { About } from "@/components/screens/About";
import { SectionMargin } from "@/components/ui/section-margin";
import { Experience } from "@/components/screens/Experience";

const Landing = () => {
  return (
    <div className="w-full h-full overflow-hidden z-10">
      <div className="relative">
        <Hero />
        <SectionMargin classes="first-move" />
        <About />
        <SectionMargin classes="second-move" />
        <Experience />
        <SectionMargin classes="third-move" />
        <About />
        <SectionMargin classes="fourth-move" />
        <Experience />
      </div>
    </div>
  );
};

export default Landing;
