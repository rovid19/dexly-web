import Navbar from "./navbar";
import Hero from "./hero";
import StoreCta from "./storeCta";
import AppInstructions from "./appInstructions";
import firstStep from "../assets/01.png";
import secondStep from "../assets/02.png";
import thirdStep from "../assets/03.png";
import fourthStep from "../assets/04.png";
import ContactUs from "./contactUs";
import Footer from "./footer";

const home = () => {
  return (
    <div className="h-full w-full bg-dark1 relative ">
      <Navbar />
      <Hero />
      <StoreCta />
      <div className="w-full mt-[100px] flex flex-col gap-4 mb-[100px]">
        <AppInstructions
          image={firstStep}
          number="01"
          title="Take a photo"
          description="Capture a clear photo of any item you want to sell. The app handles the rest — no manual research, no guesswork."
        />

        <AppInstructions
          image={secondStep}
          number="02"
          title="AI Identifies the Item & Market Value"
          description="Our AI analyzes the image, identifies the exact product, and instantly pulls live marketplace data to estimate realistic resale value based on current demand."
        />

        <AppInstructions
          image={thirdStep}
          number="03"
          title="List in Seconds"
          description="Generate ready-to-use listings with optimized titles, pricing guidance, and structured details. Publish directly to supported marketplaces in just a few taps."
        />

        <AppInstructions
          image={fourthStep}
          number="04"
          title="Track Your Inventory & Profit"
          description="Every scanned item is automatically added to your inventory dashboard, where you can monitor active listings, track sales performance, and analyze profit over time."
        />
      </div>

      <StoreCta />

      <ContactUs />
      <Footer />
    </div>
  );
};

export default home;

/*

            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-dark1 p-4 rounded-3xl">
                <div dangerouslySetInnerHTML={{ __html: appleLogo }} />
                <div>
                  <h3 className="text-light1 text-2xl">Download on the</h3>
                  <h3 className="text-light1 text-2xl">App Store</h3>
                </div>
              </button>
            </div>

            */
