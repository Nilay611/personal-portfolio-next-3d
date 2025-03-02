import { Project } from "@/shared/models/project";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

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
            className="relative w-4/5 h-4/5 bg-background border-1 rounded-3xl border-slate-200 dark:border-slate-600"
          >
            {project.id}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full cursor-pointer absolute top-5 right-5 bg-foreground text-background"
              onClick={handleProjectClose}
            >
              <X />
            </motion.button>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};
