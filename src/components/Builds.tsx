import { RiArrowRightUpLine } from "@remixicon/react";
import { BEST_BUILDS } from "../constants";

const Builds = () => {
  return (
    <section className="max-w-7xl mx-auto scroll-mt-30" id="builds">
      <div className="my-20">
        <h2 className="text-2xl lg:text-4xl tracking-tight text-center mt-20 mb-12">
          Our Best Builds
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {BEST_BUILDS.map((customBuild) => (
            <div
              key={customBuild.id}
              className="group relative overflow-hidden rounded-3xl mx-4"
            >
              <img
                src={customBuild.image}
                alt={customBuild.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100 text-white">
                <h3 className="mb-2 text-xl font-semibold">{customBuild.name}</h3>
                <p className="mb-2 p-4">{customBuild.description}</p>
                <a href={customBuild.link} className="hover:underline flex text-md">
                  Buy now
                  <span>
                    <RiArrowRightUpLine />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Builds;
