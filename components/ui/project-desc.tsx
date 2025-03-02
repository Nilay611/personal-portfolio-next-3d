import { Project } from "@/shared/models/project";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

export const ProjectDesc = ({
  visible,
  project,
  setIsDialogOpen,
  setOpenedProject,
}: {
  visible: boolean;
  project: Project | null;
  setIsDialogOpen: (state: boolean) => void;
  setOpenedProject: (state: Project | null) => void;
}) => {
  const handleProjectClose = () => {
    setIsDialogOpen(false);
    setOpenedProject(null);
  };

  return (
    <AnimatePresence>
      <div
        className={`w-screen h-screen top-0 left-0 fixed z-40 bg-background/50 flex justify-center items-center ${
          visible && project ? "visible" : "invisible"
        }`}
      >
        {visible && project && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="relative w-4/5 h-4/5 bg-background border-1 rounded-3xl border-slate-200 dark:border-slate-600 p-5 sm:p-10 overflow-auto tracking-widest"
            style={{ scrollbarWidth: "none" }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full cursor-pointer absolute top-5 right-5 sm:top-10 sm:right-10 bg-foreground text-background z-10"
              onClick={handleProjectClose}
            >
              <X />
            </motion.button>
            <div className="flex sm:flex-row flex-col mr-10 mb-5 sm:mx-10 sm:mb-10 sm:text-2xl">
              <h3 className="sm:border-r-1 sm:border-b-0 border-b-1 sm:pb-0 pb-2 sm:pr-5 text-accent">
                {project.title}
              </h3>
              {project.link ? (
                <a
                  href={project.link}
                  className="sm:pl-5 sm:pt-0 pl-0 pt-2 underline underline-offset-4 flex flex-row items-center gap-2 text-foreground"
                >
                  #gitHub
                </a>
              ) : (
                <p className="sm:pl-5 sm:pt-0 pl-0 pt-2 underline underline-offset-4 flex flex-row items-center gap-2 text-foreground">
                  Private project
                </p>
              )}
            </div>
            <Image
              src={project.imageLink}
              alt={project.title}
              width={500}
              height={500}
              loading="lazy"
              unoptimized
              className="relative w-full h-auto rounded-lg"
            />
            <p className="mt-5 text-xs sm:text-base">{project.smallDesc}</p>
            <p className="mt-5 text-xs sm:text-base">{project.description}</p>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};
