import { appleLogo, playStore } from "../icons";
import FadeIn from "./FadeIn";

const storeCta = () => {
  return (
    <FadeIn direction="up" duration={600}>
      <div className="animated-gradient h-[300px] w-full flex relative z-2 rounded-3xl items-center justify-center gap-4">
        <div className="flex gap-4">
          <button className="flex items-center gap-4 bg-dark1 p-8 rounded-3xl cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_8px_32px_rgba(0,0,0,0.45)] hover:brightness-110 active:scale-100 active:shadow-none active:brightness-100">
            <div dangerouslySetInnerHTML={{ __html: appleLogo }} />
            <div className="flex flex-col items-start">
              <h3 className="text-light1 text-2xl font-sans">
                Download on the{" "}
              </h3>
              <h3 className="text-light1 text-2xl font-sans">App Store</h3>
            </div>
          </button>
          <button className="flex items-center gap-4 bg-dark1 p-8 rounded-3xl relative">
            <div className="absolute inset-0 bg-dark1/80  rounded-3xl flex items-center justify-center">
              <h1 className="text-light1 text-md font-bold bg-dark2 rounded-3xl p-2 px-4 border border-dark3">
                COMING SOON
              </h1>
            </div>
            <div dangerouslySetInnerHTML={{ __html: playStore }} />
            <div className="flex flex-col items-start">
              <h3 className="text-light1 text-2xl">Download on the</h3>
              <h3 className="text-light1 text-2xl">Google Play</h3>
            </div>
          </button>
        </div>
      </div>
    </FadeIn>
  );
};

export default storeCta;
