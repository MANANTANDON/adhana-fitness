import Image from "next/image";
import React from "react";
import { Header } from "../Layout/Header";

export const TopCont: React.FC = () => {
  const handleClick = () => {
    alert("User SEXfully Registered !");
  };
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <Header />
      <div className="absolute left-0 right-0 bottom-0 h-150 bg-linear-to-t from-[#000000] to-transparent" />
      <video
        src="/media/videos/ankit.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 flex flex-col items-center left-0 right-0 z-10 py-10">
        <div className="flex items-baseline gap-3">
          <Image
            src={"/media/images/logo.png"}
            layout="intrinsic"
            alt="Adhana Fitness"
            height={40}
            width={35}
          />
          <div className="text-zinc-100 text-[30px] max-[500px]:text-[26px] font-medium">
            Adhana Fitness+
          </div>
        </div>
        <div className="text-zinc-100 text-[53px]/16 max-[500px]:text-[32px]/10 font-bold mt-6.75 max-[500px]:mt-5.75  mb-4.5">
          Ingnites the start.
          <br />
          Powers the journey.
        </div>
        <button
          onClick={handleClick}
          className="bg-linear-to-l from-[#239971] to-[#01492E] text-[20px] max-[500px]:text-[16px] font-semibold px-8 py-4 rounded-[50px] text-zinc-100 cursor-pointer w-fit"
        >
          Begin your journey
        </button>
      </div>
    </div>
  );
};
