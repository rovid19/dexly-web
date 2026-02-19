import React from "react";
import FadeIn from "./FadeIn";

interface appInstructionsProps {
  image: string;
  title: React.ReactNode;
  description: React.ReactNode;
}

const appInstructions = ({
  image,
  title,
  description,
}: appInstructionsProps) => {
  return (
    <div className="h-[650px] w-full flex flex-col lg:flex-row px-4 lg:px-18 mt-[100px] gap-8 lg:gap-0 ">
      <FadeIn
        direction="right"
        duration={600}
        className="h-full w-full lg:w-[70%]"
      >
        <div className="h-full w-full flex flex-col items-start justify-center gap-4">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl lg:text-7xl font-sans text-light1 text-center lg:text-left">
              {title}
            </h2>
            <p className="text-light3 font-sans text-base lg:text-lg text-center lg:text-left">
              {description}
            </p>
          </div>
        </div>
      </FadeIn>
      <FadeIn
        direction="left"
        duration={600}
        delay={150}
        className="h-full w-full lg:w-[30%] "
      >
        <div className="h-full w-full flex items-center justify-center ">
          <img
            src={image}
            alt={title as string}
            className="lg:h-[550px] h-[400px] object-contain rounded-3xl"
          />
        </div>
      </FadeIn>
    </div>
  );
};

export default appInstructions;
