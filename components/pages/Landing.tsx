import { Hero } from "@/components/screens/Hero";
import { About } from "@/components/screens/About";
import { SectionMargin } from "@/components/ui/section-margin";
import { Experience } from "@/components/screens/Experience";
import { Projects } from "@/components/screens/Projects";
import { Contact } from "@/components/screens/Contact";

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
        <Projects />
        <SectionMargin classes="fourth-move" />
        <Contact />
      </div>
    </div>
  );
};

export default Landing;
