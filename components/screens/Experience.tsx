import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ProgressBar } from "@/components/ui/progress-bar";

export const Experience = () => {
  return (
    <SectionWrapper orientation="left">
      <ProgressBar color="accent" orientation="left" />
      <div className="relative px-[5%] py-[20%] border-b-2 border-accent pb-[400px]">
        <h1 className="relative text-accent text-5xl md:text-8xl uppercase font-bold">
          About Me
        </h1>
        <span className="font-geist-mono absolute bottom-4 right-0 text-accent text-2xl">
          01
        </span>
      </div>
      <div className="relative px-[5%] py-[20%]">
        <h3 className="text-lg font-semibold mt-16 leading-[1.8] tracking-widest">
          Nice to meet you, I am Nilay!
        </h3>
        <p className="leading-[2] mt-5 font-geist-mono text-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          laboriosam mollitia neque commodi ratione reiciendis animi porro quas.
          Veniam ipsam nesciunt velit ipsum sint, exercitationem consectetur
          quis sequi doloremque soluta.
        </p>
        <h3 className="text-lg font-semibold mt-16 leading-[1.8] tracking-widest">
          Lorem Ipsum
        </h3>
        <p className="leading-[2] mt-5 font-geist-mono text-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          laboriosam mollitia neque commodi ratione reiciendis animi porro quas.
          Veniam ipsam nesciunt velit ipsum sint, exercitationem consectetur
          quis sequi doloremque soluta.
        </p>
        <h3 className="text-lg font-semibold mt-16 leading-[1.8] tracking-widest">
          Lorem Ipsum
        </h3>
        <p className="leading-[2] mt-5 font-geist-mono text-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          laboriosam mollitia neque commodi ratione reiciendis animi porro quas.
          Veniam ipsam nesciunt velit ipsum sint, exercitationem consectetur
          quis sequi doloremque soluta.
        </p>
      </div>
    </SectionWrapper>
  );
};
