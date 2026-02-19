import { useState } from "react";
import { logo } from "../icons";
import FadeIn from "./FadeIn";

const navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <FadeIn direction="down" duration={500}>
      <div className="w-full px-4 lg:px-8 py-4 flex justify-end lg:justify-between items-center">
        <div
          dangerouslySetInnerHTML={{ __html: logo }}
          className="hidden lg:block"
        />

        {/* Desktop nav */}
        <div className="hidden lg:flex flex-row gap-4">
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

        {/* Hamburger button */}
        <button
          className="lg:hidden flex flex-col justify-center gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-light1 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-light1 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-light1 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-end gap-4 px-8 pb-4">
          <button
            className="text-light1 text-2xl cursor-pointer font-sans hover:font-bold transition-all duration-150"
            onClick={() => setMenuOpen(false)}
          >
            FAQ
          </button>
          <button
            className="text-light1 text-2xl cursor-pointer font-sans hover:font-bold transition-all duration-150"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              });
            }}
          >
            SUPPORT
          </button>
        </div>
      )}
    </FadeIn>
  );
};

export default navbar;
