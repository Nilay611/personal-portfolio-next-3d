export const SectionHeading = ({
  title,
  pageNo,
}: {
  title: string;
  pageNo: string;
}) => {
  return (
    <div className="relative px-[5%] py-[20%] border-b-2 border-accent pb-[400px]">
      <h1 className="relative text-accent text-5xl md:text-8xl uppercase font-bold font-geist-sans">
        {title}
      </h1>
      <span className="font-geist-mono absolute bottom-4 right-0 text-accent text-2xl">
        {pageNo}
      </span>
    </div>
  );
};
