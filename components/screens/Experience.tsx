import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ProgressBar } from "@/components/ui/progress-bar";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import skills from "@/public/assets/data/skills.json";
import experiences from "@/public/assets/data/experiences.json";
import { CompanyDetail } from "@/components/ui/company-detail";

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
          <CompanyDetail key={company.companyId} company={company} />
        ))}
        <p className="leading-[2] mt-16 font-geist-mono text-text">
          <span className="text-accent">view my resume</span> in the LaTeX
          format by clicking on the following.
        </p>
        <Button text="view" iconPrimary={<MoveRight />} classes="mt-10" />
      </div>
    </SectionWrapper>
  );
};
