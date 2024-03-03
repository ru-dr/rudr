import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col gap-y-5">
      <div className="w-full flex lg:flex-row flex-col justify-between gap-x-5 gap-y-5 h-[40dvh]">
        <div className="bg-[#1c1c1c] flex-1 h-full rounded-3xl">1</div>
        <div className="anim-gradient aspect-square lg:h-full sm:h-20 h-16 rounded-3xl flex lg:flex-col flex-row-reverse group cursor-pointer ">
          <div className="h-[20%] w-full justify-end items-center lg:flex hidden">
            <div className="relative aspect-square h-[40%] m-5">
              <Image
                src="/assets/ArrowDark.svg"
                alt="Logo"
                fill
                className="w-full h-full rotate-45 group-hover:rotate-0 transition-all duration-300 ease-in-out"
              />
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center items-center lg:translate-y-[-10%] translate-y-0">
            <p className="lg:text-3xl xl:text-4xl text-2xl lg:font-semibold font-semibold tracking-wide text-black">
              Get In Touch
              <span className="text-black lg:font-semibold font-semibold lg:text-3xl xl:text-4xl text-2xl animate-ping-slow">
                .
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#1c1c1c] h-[10dvh] rounded-3xl">3</div>
    </footer>
  );
};

export default Footer;
