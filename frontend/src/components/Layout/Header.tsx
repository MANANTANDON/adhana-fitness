import Image from "next/image";
import React from "react";

export const Header: React.FC = () => {
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
          <div className="text-zinc-100 text-xl cursor-pointer bg-zinc-200/20 px-1 py-0.5 rounded-[100px]">
            􀌇
          </div>
        </div>
      </div>
    </>
  );
};
