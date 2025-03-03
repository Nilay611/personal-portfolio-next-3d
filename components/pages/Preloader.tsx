import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLoadingState } from "@/providers/LoadingProvider";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { commonAnimations } from "@/shared/animations";

const Preloader = () => {
  const { isLoading, enter, setEnter } = useLoadingState();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("all", () => {
        commonAnimations();
      });

      return () => mm.revert();
    });

    return () => ctx.revert();
  }, [enter]);

  return (
    <AnimatePresence>
      {!enter && (
        <div className="w-screen h-screen bg-background flex justify-center items-center fixed top-0 left-0 z-30">
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              key="box"
              className="flex space-x-2"
            >
              <span className="dot bg-accent w-3 h-3 rounded-full animate-bounce"></span>
              <span className="dot bg-accent w-3 h-3 rounded-full animate-bounce delay-150"></span>
              <span className="dot bg-accent w-3 h-3 rounded-full animate-bounce delay-300"></span>
            </motion.div>
          )}

          {!isLoading && !enter && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              key="box"
              className="font-montserrat text-2xl font-light uppercase flex flex-col items-center"
            >
              <p>
                Click below to enter my{" "}
                <span className="text-accent">Room</span>!
              </p>
              <Button
                text="enter"
                iconPrimary={<MoveRight />}
                classes="mt-10"
                handleClick={() => setEnter(true)}
              />
            </motion.div>
          )}
        </div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
