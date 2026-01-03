import Image from "next/image";
import React from "react";

export const Header: React.FC = () => {
  const MENU = ["Home", "Pricing", "Clients", "About", "Contact"];
  return (
    <>
      <div className="absolute left-0 right-0 top-0 flex items-center justify-center py-2.5">
        <div className="bg-zinc-900/60 backdrop-blur-lg px-10 py-4 rounded-[100px] flex items-center gap-15 z-10 border border-zinc-100/30">
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
              <div className="text-zinc-100 text-[20px] max-[500px]:text-[26px] font-medium">
                Adhana Fitness+
              </div>
            </a>
          </div>
          <div className="flex items-center gap-7">
            {MENU.map((i, key) => (
              <div
                key={key}
                className="text-zinc-100 cursor-pointer text-base font-light hover:font-medium"
              >
                {i}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
