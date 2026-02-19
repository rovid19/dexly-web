import appPromo from "../assets/test.webm";
import { appleLogo, playStore } from "../icons";
import FadeIn from "./FadeIn";
import safariPromo from "../assets/applePromo.mov";

const hero = () => {
  return (
    <>
      <div className="h-[700px] w-full flex flex-col md:flex-row relative md:mb-[100px] mb-[300px]">
        <div className="h-full w-full md:w-[40%] z-5">
          <video
            className="w-full lg:h-[700px] md:h-[500px] h-[500px] object-contain"
            autoPlay
            muted
            loop
            playsInline
            onLoadedMetadata={(e) => {
              const video = e.currentTarget;
              console.log("currentSrc:", video.currentSrc);
            }}
          >
            {/* Safari (HEVC with alpha) */}
            <source src={safariPromo} type='video/mp4; codecs="hvc1"' />

            {/* Chrome / Edge / Firefox (VP9 with alpha) */}
            <source src={appPromo} type="video/webm" />
          </video>
        </div>
        <div className="h-full w-full md:w-[60%] flex items-center justify-center md:pr-8  ">
          <div className="relative p-6 rounded-l-3xl overflow-hidden flex flex-col items-center md:items-end justify-center ">
            <FadeIn direction="left" duration={700} delay={200}>
              <div className="relative flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <h1 className="text-5xl md:text-4xl lg:text-7xl font-bold text-light1 text-center md:text-left">
                    Sell used items faster with AI
                  </h1>
                  <h3 className="text-light2 text-base md:text-lg lg:text-2xl">
                    Take a photo of any item and find out its worth.
                  </h3>
                </div>

                <div className="flex md:flex-row flex-col gap-4">
                  <button className="flex items-center gap-4 bg-dark2 p-4 md:p-8 rounded-3xl cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_8px_32px_rgba(0,0,0,0.45)] hover:brightness-110 active:scale-100 active:shadow-none active:brightness-100">
                    <div dangerouslySetInnerHTML={{ __html: appleLogo }} />
                    <div className="flex flex-col items-start">
                      <h3 className="text-light1 text-base md:text-lg lg:text-2xl font-sans">
                        Download on the{" "}
                      </h3>
                      <h3 className="text-light1 text-base md:text-lg lg:text-2xl">
                        App Store
                      </h3>
                    </div>
                  </button>
                  <button className="flex items-center gap-4 border-4 border-dark2 p-4 md:p-8 rounded-3xl relative">
                    <div dangerouslySetInnerHTML={{ __html: playStore }} />
                    <div className="flex flex-col items-start">
                      <h3 className="text-light1 text-base md:text-lg lg:text-2xl">
                        COMING SOON
                      </h3>
                    </div>
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </>
  );
};

export default hero;

/*   <img
          src={heroBg}
          alt="background"
          className="w-full h-full object-contain"
        />


          <FadeIn
        direction="right"
        duration={700}
        delay={100}
        className="absolute top-0 left-[-200px] w-full z-4 h-[500px]"
      >
        <video
          src={appVideo}
          className="w-full h-[650px] object-contain "
          autoPlay
          muted
          loop
          playsInline
        />
      </FadeIn>
*/
