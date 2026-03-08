import Image from "next/image";
import React, { useState } from "react";

export const Header: React.FC = () => {
  const [openMenu, setMenuOpen] = useState(false);
  const MENU = ["Home", "Pricing", "Clients", "About", "Contact"];

  return (
    <>
      <div className="absolute left-0 right-0 top-0 flex items-center justify-center py-2.5 max-[500px]:px-2.5">
        <div className="bg-zinc-900/60 backdrop-blur-lg max-[500px]:px-5 px-10 py-4 rounded-[100px] max-[500px]:w-full flex items-center max-[500px]:justify-between min-[500px]:gap-15 z-10 border border-zinc-100/30">
          <div className="flex items-baseline gap-3">
            <a href="/">
              <Image
                src={"/media/images/logo.png"}
                layout="intrinsic"
                alt="Adhana Fitness"
                height={30}
                width={25}
              />
            </a>
            <a href="/">
              <div className="text-zinc-100 text-[20px] min-[500px]:text-[26px] font-medium">
                Adhana Fitness+
              </div>
            </a>
          </div>
          <div className="hidden min-[500px]:flex items-center gap-7">
            {MENU.map((i, key) => (
              <div
                key={key}
                className="text-zinc-100 cursor-pointer text-base font-light hover:font-medium"
              >
                {i}
              </div>
            ))}
          </div>
          <div
            className="text-zinc-100 text-xl cursor-pointer bg-zinc-200/20 px-1 py-0.5 rounded-[100px] max-[500px]:flex hidden"
            onClick={() => setMenuOpen(true)}
          >
            􀌇
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-screen w-screen bg-zinc-900/90 backdrop-blur-xl z-20 p-2.5 transform transition-transform duration-300 ease-out ${
          openMenu ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <div className="bg-zinc-900/60 backdrop-blur-lg px-5 py-4 rounded-[100px] w-full flex items-center justify-between  border border-zinc-100/30">
          <div className="flex items-baseline gap-3">
            <a href="/">
              <Image
                src={"/media/images/logo.png"}
                layout="intrinsic"
                alt="Adhana Fitness"
                height={30}
                width={25}
              />
            </a>
            <a href="/">
              <div className="text-zinc-100 text-[20px] min-[500px]:text-[26px] font-medium">
                Adhana Fitness+
              </div>
            </a>
          </div>
          <div
            className="text-zinc-100 text-xl cursor-pointer bg-zinc-200/20 px-1.5 py-0.5 rounded-[100px]"
            onClick={() => setMenuOpen(false)}
          >
            􀆄
          </div>
        </div>
        <div className=" flex flex-col gap-5 my-4.5 px-2.5">
          {MENU.map((item, key) => (
            <div
              key={key}
              className="text-zinc-100 border-b border-zinc-200/20 w-full text-left py-2.5 text-lg font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
