import { logo } from "../icons";
import FadeIn from "./FadeIn";

const navbar = () => {
  return (
    <FadeIn direction="down" duration={500}>
      <div className="w-full px-8 py-4 flex justify-between ">
        <div dangerouslySetInnerHTML={{ __html: logo }} />

        <div className="flex flex-row gap-4">
          <button className="text-light1 text-2xl cursor-pointer font-sans hover:font-bold transition-all duration-150">
            FAQ
          </button>
          <button
            className="text-light1 text-2xl cursor-pointer font-sans hover:font-bold transition-all duration-150"
            onClick={() =>
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              })
            }
          >
            SUPPORT
          </button>
        </div>
      </div>
    </FadeIn>
  );
};

export default navbar;
