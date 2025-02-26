export const ProgressBar = ({
  classes,
  color,
  orientation,
}: {
  classes?: string;
  color: string;
  orientation: "left" | "right";
}) => {
  return (
    <div
      className={`progress-wrapper h-screen w-3 z-20 absolute top-0 ${classes} ${
        orientation === "left"
          ? "md:left-0 md:right-auto right-0"
          : "md:right-0 md:left-auto left-0"
      }`}
    >
      <div
        className={`progress-bar h-screen w-full bg-accent origin-top scale-y-[1] bg-${color}`}
      ></div>
    </div>
  );
};
