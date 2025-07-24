import { RiArrowRightUpLine } from "@remixicon/react";
import { HERO_CONTENT } from "../constants";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center my-50">
        <h1 className="text-4xl lg:text-8xl p-2 font-bold text-center">
          {HERO_CONTENT.title1}{" "}
          <span className="text-[rgb(110,110,115)]">{HERO_CONTENT.title2}</span>
        </h1>
        <p className="lg:mt-6 text-md lg:text-3xl mb-4 font-medium tracking-tighter text-center">
          {HERO_CONTENT.subtitle}
        </p>
        <div className="group relative overflow-hidden rounded-3xl mx-4">
          <img
          src={HERO_CONTENT.image}
          alt="hero-img"
          className="w-full h-auto object-cover transition-transform duration-500 rounded-3xl"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100 text-neutral-200">
          <h3 className="mb-2 text-6xl font-semibold">The Pros Trust Us. Now It's Your Turn.</h3>
          <p className="mb-2 p-4 text-2xl text-center max-w-lg">From esports champions to creative powerhouses. Build Forge rigs fuel the best. Get yours built by the same team trusted by the pros.</p>
          <a href="#builds" className="hover:underline flex text-md">
            Build now
            <span>
              <RiArrowRightUpLine />
            </span>
          </a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
