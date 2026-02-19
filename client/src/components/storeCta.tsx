import FadeIn from "./FadeIn";

interface storeCtaProps {
  title: string;
}

const storeCta = ({ title }: storeCtaProps) => {
  return (
    <FadeIn direction="up" duration={600}>
      <div className="w-full flex justify-center px-4">
        <div className="animated-gradient h-[300px] w-full flex relative z-2 rounded-3xl items-center justify-center gap-4">
          <div>
            <h1 className="text-light1  text-4xl lg:text-7xl font-bold">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default storeCta;

/*
            <div className="absolute inset-0 bg-dark2/80 backdrop-blur-sm  rounded-3xl flex items-center justify-center"></div>
   <div className="text-light1 text-md font-sans bg-dark2 rounded-3xl p-2 px-4 border border-dark3 flex items-center gap-2">
                <div dangerouslySetInnerHTML={{ __html: playStore }} />
                COMING SOON
              </div>*/
