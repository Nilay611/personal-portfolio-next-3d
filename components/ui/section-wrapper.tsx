import { ReactNode } from "react";

export const SectionWrapper = ({
  children,
  classes,
  orientation,
  isEnd = false,
}: {
  children: ReactNode;
  classes?: string;
  orientation: "left" | "right";
  isEnd?: boolean;
}) => {
  return (
    <section
      className={`section md:w-1/2 w-full pt-[1000px] px-[4%] m-0 bg-background font-geist-mono overflow-hidden dark:text-slate-400 text-slate-600 ${
        orientation === "left"
          ? "mr-auto rounded-tr-[700px] rounded-br-0"
          : "ml-auto rounded-tl-[700px] rounded-bl-0"
      } ${!isEnd ? "pb-[1000px]" : ""} ${orientation} ${classes}`}
    >
      {children}
    </section>
  );
};
