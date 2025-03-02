export const Hero = () => {
  return (
    <section className="w-screen h-screen">
      <div className="relative h-full my-0 mx-auto w-[calc(100%-28px)] md:w-[calc(100%-160px)] max-w-lg md:max-w-5xl">
        <div className="absolute w-full bottom-[17vmax] md:bottom-[calc(50%-268px)] xl:bottom-[calc(50%-368px)] text-center font-montserrat">
          <p className="text-xl lg:text-2xl xl:text-4xl tracking-wide font-geist-mono">
            hi, I&apos;m <span className="text-accent">Nilay</span>.
          </p>
        </div>
        <div className="absolute w-full bottom-4 font-geist-mono dark:text-gray-400 text-gray-500 text-sm sm:text-base lg:text-lg font-light text-center">
          <p>
            &apos;Crafting websites that feel as good as they look.&apos; -
            ChatGPT
          </p>
        </div>
      </div>
    </section>
  );
};
