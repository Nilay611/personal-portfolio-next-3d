import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ProgressBar } from "@/components/ui/progress-bar";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";

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
          Full-stack software developer with{" "}
          <span className="text-accent">3 years</span> of experience in
          engineering scalable, high-performance web and mobile applications.
          Proficient in{" "}
          <span className="text-accent">
            React.JS, React Native, Node.JS, ASP.NET Core,
          </span>{" "}
          and <span className="text-accent">Python</span>, with a strong focus
          on optimizing backend services and creating user-centric UIs.
          Experienced in large-scale applications,{" "}
          <span className="text-accent">Agile</span> methodologies, and
          delivering high-quality products.{" "}
          <span className="text-accent">
            3x Microsoft Certified Azure Developer
          </span>
          {}, skilled at leveraging Azure&#39;s robust cloud services to design
          and deploy scalable solutions. Highly adaptable and eager to
          contribute to new opportunities in full-stack development and software
          engineering
        </p>
        <h3 className="text-lg text-accent mt-16 leading-[1.8] tracking-widest">
          careerOverview
        </h3>
        <div className="leading-[2] mt-5 font-geist-mono">
          <h3 className="font-semibold underline underline-offset-4 text-black dark:text-white">
            NextXLiving Private Limited
          </h3>
          <p className="text-black dark:text-white">
            Technical Lead (Software Development Consultant) - Contract
          </p>
          <p className="italic text-black dark:text-white">
            December 2024 - March 2025
          </p>
          <ul>
            <li className="list-disc">
              Architected a large-scale web application with Next.JS and SSR,
              improving page load speeds by 40% and enhancing SEO.
            </li>
            <li className="list-disc">
              Led UI/UX design in Figma, creating user-friendly interfaces
              focused on conversion optimization.
            </li>
            <li className="list-disc">
              Developed scalable features with React.JS and React Native,
              driving user engagement and improving experience.
            </li>
            <li className="list-disc">
              Spearheaded scalable RESTful APIs in Node.JS, reducing response
              times by 30% through optimized queries in MongoDB and PostgreSQL,
              and automated CI/CD workflows with Azure DevOps.
            </li>
            <li className="list-disc">
              Applied system design principles like database sharding, load
              balancing, and CDN integration, achieving 99.9% uptime while
              handling 1,000+ concurrent requests and 1,000+ users in the first
              quarter.
            </li>
            <li className="list-disc">
              Developed a React Native mobile app, reducing development time by
              30% with a single codebase for both web and mobile, deployed over
              Azure App Service and monitored with Azure App Insights.
            </li>
          </ul>
          <p className="italic">
            <span className="underline underline-offset-4">Technologies</span>:
            Next.JS, React.JS, React Native, Node.JS, MongoDB, PostgreSQL, Azure
            DevOps, CI/CD, Azure App Service, Azure App Insights, Figma, RESTful
            APIs, CDN Integration
          </p>
        </div>
        <div className="leading-[2] mt-5 font-geist-mono">
          <h3 className="font-semibold underline underline-offset-4 text-black dark:text-white">
            Capgemini Technology Services Limited
          </h3>
          <p className="text-black dark:text-white">Associate Consultant</p>
          <p className="italic text-black dark:text-white">
            June 2022 - November 2024
          </p>
          <ul>
            <li className="list-disc">
              Developed full-stack applications supporting 4,000+ concurrent
              users, using React.JS for front-end, ASP.NET Core for backend, and
              MS SQL Server for high-volume data handling.
            </li>
            <li className="list-disc">
              Engineered a JavaScript module for frozen columns in grid tables,
              improving horizontal scrolling and vertical navigation in large
              datasets.
            </li>
            <li className="list-disc">
              Implemented a dynamic notification system for client leads,
              improving response times and automating workflows.
            </li>
            <li className="list-disc">
              Built RESTful APIs optimized for high-volume requests, efficiently
              retrieving 100,000+ records.
            </li>
            <li className="list-disc">
              Achieved SonarQube rating above 85%, reducing bugs by 20%,
              improving code quality.
            </li>
            <li className="list-disc">
              Created a reporting dashboard, integrating Google Analytics and
              real-time data, driving data-driven decision- making for 1,000+
              interactions.
            </li>
          </ul>
          <p className="italic">
            <span className="underline underline-offset-4">Technologies</span>:
            React.JS, ASP.NET Core, MS SQL Server, JavaScript, RESTful APIs,
            SonarQube, Google Analytics
          </p>
        </div>
        <h3 className="text-lg text-accent mt-16 leading-[1.8] tracking-widest">
          skills
        </h3>
        <ul className="leading-[2] mt-5">
          <li className="list-disc">
            <span className="underline underline-offset-4">
              Programming Languages
            </span>
            {}: JavaScript, TypeScript, Hack, C#, Python, SQL
          </li>
          <li className="list-disc">
            <span className="underline underline-offset-4">
              Backend Development
            </span>
            {}: Node.JS, ASP.NET Core, FastAPI, Flask (Scalable services)
          </li>
          <li className="list-disc">
            <span className="underline underline-offset-4">
              Frontend Development
            </span>
            {}: React.JS, Next.JS, React Native
          </li>
          <li className="list-disc">
            <span className="underline underline-offset-4">Databases</span>: SQL
            Server, PostgreSQL, MongoDB
          </li>
          <li className="list-disc">
            <span className="underline underline-offset-4">
              Version Control &amp; DevOps
            </span>
            {}: Git, Azure DevOps, CI/CD, Docker, Kubernetes
          </li>
          <li className="list-disc">
            <span className="underline underline-offset-4">
              Software Architecture
            </span>
            {}: Scalable Architectures, Distributed Systems
          </li>
          <li className="list-disc">
            <span className="underline underline-offset-4">
              Data Structures &amp; Algorithms
            </span>
            {}: Problem Solving, Algorithm Design
          </li>
        </ul>
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
