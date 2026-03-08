import React from "react";
import { Header } from "../Layout/Header";
import Image from "next/image";

export const Home: React.FC = () => {
  return (
    <>
      <div
        className="bg-linear-to-b h-screen w-screen overflow-hidden relative"
        style={{
          backgroundImage: "url(/media/images/bg_images.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute top-7.5 left-12 right-12">
          <Header />
        </div>
        <h2 className="absolute left-12 top-100 text-5xl/14 font-bold tracking-tighter text-zinc-900">
          Ignite Your Start
          <br />
          Power Your Journey
        </h2>
        <h3 className="absolute left-12 top-132  text-lg font-normal tracking-tighter text-zinc-900/80">
          <i>
            Pain itself is sometimes endured in order to obtain pleasure, <br />
            but there is no pain that is free from consequence.
          </i>
        </h3>
        <button className="absolute left-12 top-152 bg-zinc-100 backdrop-blur-3xl px-8 py-3 cursor-pointer rounded-[100px] text-lg font-semibold text-zinc-900 shadow-2xl">
          Get Started
        </button>
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 z-10">
          <Image
            src="/media/images/ankit_adhana.png"
            layout="intrinsic"
            height={1300}
            width={700}
            alt="Ankit Adhana"
          />
        </div>
      </div>
    </>
  );
};
