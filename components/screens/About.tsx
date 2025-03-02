import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ProgressBar } from "@/components/ui/progress-bar";
import { SectionHeading } from "@/components/ui/section-heading";

export const About = () => {
  return (
    <SectionWrapper orientation="right">
      <ProgressBar color="accent" orientation="right" />
      <SectionHeading title="About Me" pageNo="01" />
      <div className="relative px-[5%] py-[20%]">
        <h3 className="text-4xl mt-16 leading-[1.8] tracking-widest text-black dark:text-white">
          nice To Meet You, I&apos;m Nilay!
        </h3>
        <p className="leading-[2] mt-5 text-text">
          I&apos;m a full-stack developer with experience building large-scale
          applications, freelancing, and crafting projects that blend
          functionality with great user experiences.
        </p>
        <p className="leading-[2] mt-16 text-text">
          I admire developers who can bridge the gap between backend logic and
          frontend aesthetics. While roles are often divided, I aim to be
          someone who not only writes efficient code but also designs intuitive
          interfaces.
        </p>
        <p className="leading-[2] mt-16 text-text">
          I enjoy creating interactive and dynamic experiences—whether it&apos;s
          a well-designed UI, smooth animations, or systems that respond
          seamlessly to user actions. To me, the best applications feel like a
          conversation between the user and the technology.
        </p>
        <p className="leading-[2] mt-16 text-text">
          In my free time I enjoy doing a variety of other things like creating
          and animating things in blender. For eg, the room on the left (or top
          for mobile users) is a one-on-one accurate representation of my real
          room.
        </p>
        <p className="leading-[2] mt-16 text-text">
          I also love playing video games a lot and watching/consuming a lot of
          japanese content (animes, mangas, visual novels, etc) and I am
          actively learning japanese to maybe one day work in Japan. To that end
          I am also active on discord and helping groups on discord translate
          various japanese media to english.
        </p>
      </div>
    </SectionWrapper>
  );
};
