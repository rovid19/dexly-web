import heroBg from "../assets/hero.png";
import FadeIn from "./FadeIn";

const hero = () => {
  return (
    <>
      <FadeIn
        direction="right"
        duration={700}
        delay={100}
        className="absolute top-50 left-[-200px] w-full z-4 h-[500px]"
      >
        <img
          src={heroBg}
          alt="background"
          className="w-full h-full object-contain"
        />
      </FadeIn>
      <div className="h-[500px] w-full flex relative">
        <div className="h-full w-1/2"></div>
        <div className="h-full w-1/2 flex items-center justify-center pr-8">
          <div className="relative p-6 rounded-l-3xl overflow-hidden">
            <div className="absolute inset-0 bg-dark2/10 backdrop-blur-md rounded-l-3xl" />

            <FadeIn direction="left" duration={700} delay={200}>
              <div className="relative flex flex-col gap-4 ml-8 mb-12">
                <h1 className="text-7xl font-bold text-light1">
                  Sell used items faster with AI
                </h1>
                <h3 className="text-light2 text-2xl">
                  Take a photo of any item and find out its worth.
                </h3>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </>
  );
};

export default hero;
