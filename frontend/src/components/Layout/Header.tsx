import Image from "next/image";
import React from "react";

export const Header: React.FC = () => {
  const MENU = ["Home", "About", "Schedule", "Contact"];
  return (
    <>
      <div className="">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={"/media/images/adhana_wellness_logo.png"}
              layout="intrinsic"
              height={40}
              width={73}
              alt="Adhana Wellness logo"
            />
            <h2 className="font-extrabold text-2xl/6 tracking-tighter text-zinc-900">
              ADHANA
              <br />
              WELLNESS
            </h2>
          </div>
          <div className="flex items-center gap-15 text-lg font-medium text-zinc-900">
            {MENU.map((item, key) => (
              <a href="" key={key}>
                {item}
              </a>
            ))}
          </div>
          <button className="bg-zinc-100 backdrop-blur-3xl px-8 py-3 cursor-pointer rounded-[100px] text-lg font-semibold text-zinc-900 shadow-2xl">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};
