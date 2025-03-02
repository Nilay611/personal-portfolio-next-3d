import { ReactNode } from "react";

export const Button = ({
  text,
  classes,
  iconPrimary,
  iconSecondary,
}: {
  text: string;
  classes?: string;
  iconPrimary?: ReactNode;
  iconSecondary?: ReactNode;
}) => {
  return (
    <button
      className={`flex flex-row gap-2 cursor-pointer border-1 rounded-full border-slate-600 dark:border-slate-400 
        text-slate-600 dark:text-slate-400 px-6 py-3 font-geist-mono ${classes}`}
    >
      {iconPrimary}
      {text}
      {iconSecondary}
    </button>
  );
};
