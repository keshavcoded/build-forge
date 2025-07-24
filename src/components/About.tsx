import aboutImage from "../assets/about.png";
import { ABOUT_US } from "../constants";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto mt-30 scroll-mt-30" id="about">
      <h2 className="text-2xl lg:text-4xl tracking-tight text-center mb-12 mx-4">
        About Us
      </h2>
      <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
        <div className="mb-8 lg:mb-0">
          <img
            src={aboutImage}
            alt="About Build Forge"
            className="w-full h-auto rounded-2xl"
          />
        </div>
        <p className="text-lg lg:text-2xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8">
          {ABOUT_US.text.split("\n").map((line, index) => (
            <span key={index} className="block mb-2">
              {line}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default About;
