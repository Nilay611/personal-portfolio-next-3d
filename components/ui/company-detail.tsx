import { useState } from "react";
import { Company } from "@/shared/models/company";
import { ChevronUp, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export const CompanyDetail = ({ company }: { company: Company }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatePresence>
      <div className="relative leading-[2] h-fit mt-5 font-geist-mono border-1 px-5 py-2 rounded-2xl border-slate-200 dark:border-slate-600">
        <h3 className="font-semibold underline underline-offset-4 text-black dark:text-white pr-5">
          {company.companyName}
        </h3>
        <p className="text-black dark:text-white pr-5">{company.designation}</p>
        <p className="italic text-black dark:text-white">{company.period}</p>
        {isOpen && (
          <motion.ul
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.1 },
              },
            }}
            className="px-5"
          >
            {company.summary.map((point) => (
              <motion.li
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                key={point.id}
                className="list-disc"
              >
                {point.point}
              </motion.li>
            ))}
          </motion.ul>
        )}
        <p className="italic">
          <span className="underline underline-offset-4">Technologies</span>:{" "}
          {company.tech}
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 cursor-pointer bg-foreground rounded-full text-background"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </motion.button>
      </div>
    </AnimatePresence>
  );
};
