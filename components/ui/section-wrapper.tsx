import { ReactNode } from "react";

export const SectionWrapper = ({
  children,
  classes,
  orientation,
}: {
  children: ReactNode;
  classes?: string;
  orientation: "left" | "right";
}) => {
  return (
    <section
      className={`section relative md:w-1/2 w-full py-[1000px] px-[4%] m-0 bg-background font-montserrat overflow-hidden ${
        orientation === "left"
          ? "mr-auto rounded-tr-[700px] rounded-br-0"
          : "ml-auto rounded-tl-[700px] rounded-bl-0"
      } ${orientation} ${classes}`}
    >
      {children}
    </section>
  );
};
