import { ProgressBar } from "@/components/ui/progress-bar";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { Separator } from "@/components/ui/separator";
import { MoveRight } from "lucide-react";

export const Contact = () => {
  return (
    <SectionWrapper orientation="left" isEnd>
      <ProgressBar color="accent" orientation="left" />
      <SectionHeading title="Contact Me" pageNo="04" />
      <div className="relative px-[5%] py-[20%]">
        <h3 className="text-4xl mt-16 leading-[1.8] tracking-widest dark:text-white text-black">
          let&apos;s Work Together!
        </h3>
        <p className="leading-[2] mt-5">
          Reach out to me and let us discuss opportunities to work together.
        </p>
        <a
          href="https://linkedin.com/in/nilaysaxena22"
          className="leading-[2] mt-16 text-foreground font-semibold flex flex-row gap-2 items-center underline underline-offset-4"
        >
          <MoveRight /> <span>_linkedIn</span>
        </a>
        <a
          href="https://github.com/Nilay611"
          className="leading-[2] mt-5 text-foreground font-semibold flex flex-row gap-2 items-center underline underline-offset-4"
        >
          <MoveRight />
          <span>#gitHub</span>
        </a>
        <h3 className="text-lg text-accent mt-16 leading-[1.8] tracking-widest">
          contact
        </h3>
        <p className="leading-[2] mt-5">(+91) 9140416064</p>
        <p className="leading-[2] mt-1 mb-5">nilay.saxena.06@gmail.com</p>
        <Separator />
        <p className="leading-[2] mt-5">
          Copyright &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </SectionWrapper>
  );
};
