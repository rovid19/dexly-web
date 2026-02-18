import { logo } from "../icons";
import FadeIn from "./FadeIn";
import { useNavigate } from "react-router-dom";
const footer = () => {
  const navigate = useNavigate();
  return (
    <FadeIn direction="up" duration={600}>
      <footer className="w-full bg-dark2 border-t border-dark3 mt-[100px] px-8 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex flex-col gap-2">
            <div dangerouslySetInnerHTML={{ __html: logo }} />
            <p className="text-light3 text-sm mt-2 max-w-xs">
              Sell used items faster with AI. Take a photo, get a price, list in
              seconds.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-light1 font-bold text-sm uppercase tracking-widest mb-1">
              Links
            </h4>
            <button className="text-light3 text-sm hover:text-accent1 transition-colors duration-150 text-left cursor-pointer">
              FAQ
            </button>
            <button className="text-light3 text-sm hover:text-accent1 transition-colors duration-150 text-left cursor-pointer">
              Support
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-light1 font-bold text-sm uppercase tracking-widest mb-1">
              Legal
            </h4>
            <button
              onClick={() => navigate("/privacy-policy")}
              className="text-light3 text-sm hover:text-accent1 transition-colors duration-150 text-left cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => navigate("/terms-of-service")}
              className="text-light3 text-sm hover:text-accent1 transition-colors duration-150 text-left cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-dark3 flex justify-center">
          <p className="text-light3 text-xs">
            © {new Date().getFullYear()} Dexly. All rights reserved.
          </p>
        </div>
      </footer>
    </FadeIn>
  );
};

export default footer;
