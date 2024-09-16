"use client";

import Image from "@/common/components/Image";

const Hero = () => {
  const coverImage =
    "url('/images/shiny_card_animated.svg'), url('/images/cover.webp')";

  return (
    <header className="flex flex-col items-center justify-center">
      <div
        className="w-full h-28 md:h-40 md:rounded-t-lg bg-cover"
        data-aos="fade-down"
        data-aos-duration="1000"
        style={{
          backgroundImage: coverImage,
          backgroundPosition: "center, bottom",
        }}
      ></div>
      <div
        className="rounded-full bg-white border border-2 -mt-[60px]"
        data-aos="zoom-in-down"
        data-aos-duration="1000"
      >
        <Image
          src="/images/avatar.webp"
          alt="Sam McNab"
          width={100}
          height={100}
          rounded="rounded-full"
          className="lg:hover:scale-105"
        />
      </div>
      <div className="pt-5 px-8">
        <div
          className="flex flex-col justify-center items-center space-y-3"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex flex-col gap-1 items-center text-center">
            <h1 className="text-2xl font-medium">Sam McNab</h1>
            <div className="flex gap-2 text-[15px] text-neutral-500">
              <span>Buckinghamshire, United Kingdom</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
