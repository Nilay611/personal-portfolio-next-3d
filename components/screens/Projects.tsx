import { useState } from "react";
import { Project } from "@/shared/models/project";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ProgressBar } from "@/components/ui/progress-bar";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectsGrid, ProjectsGridItem } from "@/components/ui/projects-grid";
import { ProjectDesc } from "@/components/ui/project-desc";
import projects from "@/public/assets/data/projects.json";

export const Projects = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [openedProject, setOpenedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setIsDialogOpen(true);
    setOpenedProject(project);
  };

  return (
    <SectionWrapper orientation="right">
      <ProgressBar color="accent" orientation="right" />
      <SectionHeading title="Projects" pageNo="03" />
      <div className="relative px-[5%] py-[20%]">
        <ProjectsGrid className="max-w-4xl mx-auto">
          {projects.data.map((project, i) => (
            <ProjectsGridItem
              key={project.id}
              title={project.title}
              description={project.smallDesc}
              header={<Skeleton imgLink={project.imageLink} />}
              className={
                i === 0 || i === 3 || i === 8 || i === 12 ? "md:col-span-2" : ""
              }
            >
              <button
                className="w-full h-full absolute cursor-pointer z-10 top-0 left-0"
                onClick={() => handleProjectClick(project)}
              ></button>
            </ProjectsGridItem>
          ))}
        </ProjectsGrid>
      </div>
      <ProjectDesc
        visible={isDialogOpen}
        project={openedProject}
        setIsDialogOpen={setIsDialogOpen}
        setOpenedProject={setOpenedProject}
      />
    </SectionWrapper>
  );
};

const Skeleton = ({ imgLink }: { imgLink: string }) => (
  <div
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl"
    style={{
      backgroundImage: `url(${imgLink})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  ></div>
);
