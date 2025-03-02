import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ProgressBar } from "@/components/ui/progress-bar";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";
import skills from "@/public/assets/data/skills.json";
import experiences from "@/public/assets/data/experiences.json";

export const Experience = () => {
  return (
    <SectionWrapper orientation="left">
      <ProgressBar color="accent" orientation="left" />
      <SectionHeading title="Resume" pageNo="02" />
      <div className="relative px-[5%] py-[20%]">
        <h3 className="text-4xl mt-16 leading-[1.8] tracking-widest">
          &apos;Nilay Saxena&apos; - full Stack Developer & Designer
        </h3>
        <p className="leading-[2] mt-5 font-geist-mono">
          Full-stack software developer with 3 years of experience in
          engineering scalable, high-performance web and mobile applications.
          Proficient in React.JS, React Native, Node.JS, ASP.NET Core, and
          Python, with a strong focus on optimizing backend services and
          creating user-centric UIs. Experienced in large-scale applications,
          Agile methodologies, and delivering high-quality products. 3x
          Microsoft Certified Azure Developer, skilled at leveraging Azure&#39;s
          robust cloud services to design and deploy scalable solutions. Highly
          adaptable and eager to contribute to new opportunities in full-stack
          development and software engineering.
        </p>
        <h3 className="text-lg text-accent mt-16 leading-[1.8] tracking-widest">
          skills
        </h3>
        <ul className="leading-[2] mt-5">
          <li className="list-disc">
            <span className="underline underline-offset-4">
              Programming Languages
            </span>
            {}: {skills.progLang}
          </li>
          <li className="list-disc">
            <span className="underline underline-offset-4">
              Backend Development
            </span>
            {}: {skills.backDev}
          </li>
          <li className="list-disc">
            <span className="underline underline-offset-4">
              Frontend Development
            </span>
            {}: {skills.frontDev}
          </li>
          <li className="list-disc">
            <span className="underline underline-offset-4">Databases</span>:{" "}
            {skills.databases}
          </li>
          <li className="list-disc">
            <span className="underline underline-offset-4">
              Version Control &amp; DevOps
            </span>
            {}: {skills.versionControl}
          </li>
          <li className="list-disc">
            <span className="underline underline-offset-4">
              Software Architecture
            </span>
            {}: {skills.softArch}
          </li>
          <li className="list-disc">
            <span className="underline underline-offset-4">
              Data Structures &amp; Algorithms
            </span>
            {}: {skills.dsa}
          </li>
        </ul>
        <h3 className="text-lg text-accent mt-16 leading-[1.8] tracking-widest">
          careerOverview
        </h3>
        {experiences.data.map((company) => (
          <div
            key={company.companyId}
            className="leading-[2] mt-5 font-geist-mono"
          >
            <h3 className="font-semibold underline underline-offset-4 text-black dark:text-white">
              {company.companyName}
            </h3>
            <p className="text-black dark:text-white">{company.designation}</p>
            <p className="italic text-black dark:text-white">
              {company.period}
            </p>
            <ul>
              {company.summary.map((point) => (
                <li key={point.id} className="list-disc">
                  {point.point}
                </li>
              ))}
            </ul>
            <p className="italic">
              <span className="underline underline-offset-4">Technologies</span>
              : {company.tech}
            </p>
          </div>
        ))}
        <p className="leading-[2] mt-16 font-geist-mono text-text">
          <span className="text-accent">download my resume</span> in the LaTeX
          format by clicking on the following.
        </p>
        <Button
          text="Download"
          iconPrimary={<ArrowDownToLine />}
          classes="mt-10"
        />
      </div>
    </SectionWrapper>
  );
};
