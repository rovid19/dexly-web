import FadeIn from "./FadeIn";

interface appInstructionsProps {
  image: string;
  number: string;
  title: string;
  description: string;
}

const appInstructions = ({
  image,
  number,
  title,
  description,
}: appInstructionsProps) => {
  return (
    <div className="h-[650px] w-full flex px-18">
      <FadeIn direction="right" duration={600} className="h-full w-[70%]">
        <div className="h-full w-full flex flex-col items-center justify-center gap-4 ">
          <div className="flex flex-col gap-2">
            <h2 className="text-7xl font-sans text-light1">{title}</h2>
            <p className="text-light3 font-sans text-lg">{description}</p>
          </div>
        </div>
      </FadeIn>
      <FadeIn
        direction="left"
        duration={600}
        delay={150}
        className="h-full w-[30%]"
      >
        <div className="h-full w-full flex items-center justify-end ">
          <img
            src={image}
            alt={title}
            className="h-[550px] object-contain rounded-3xl"
            style={{ marginLeft: "auto" }}
          />
        </div>
      </FadeIn>
    </div>
  );
};

export default appInstructions;
