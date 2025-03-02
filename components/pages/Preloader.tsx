import { AnimatePresence, motion } from "framer-motion";

const Preloader = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <AnimatePresence initial={false}>
      {isLoading && (
        <div className="w-screen h-screen bg-background flex justify-center items-center fixed top-0 left-0 z-30">
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
          {/* <div className="font-montserrat text-2xl font-light uppercase">
            Welcome to my <span className="text-accent">Room</span>!
          </div> */}
        </div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
