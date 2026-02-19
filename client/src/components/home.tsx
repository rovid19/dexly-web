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
    <div className="h-full w-full  relative   lg:px-0">
      <Navbar />
      <Hero />

      <StoreCta title="Features" />

      <div className="w-full flex flex-col gap-12 lg:gap-4 mb-[100px]">
        <AppInstructions
          image={firstStep}
          title="Take a photo"
          description={
            <>
              Capture a clear photo of any item you want to sell. The app
              handles the rest — no manual research, no guesswork.
            </>
          }
        />

        <AppInstructions
          image={secondStep}
          title={
            <>
              AI Identifies the Item <br /> & Market Value
            </>
          }
          description="Our AI analyzes the image, identifies the exact product, and instantly pulls live marketplace data to estimate realistic resale value based on current demand."
        />

        <AppInstructions
          image={thirdStep}
          title="List in Seconds"
          description="Generate ready-to-use listings with optimized titles, pricing guidance, and structured details. Publish directly to supported marketplaces in just a few taps."
        />

        <AppInstructions
          image={fourthStep}
          title={<>Track Your Inventory</>}
          description="Every scanned item is automatically added to your inventory dashboard, where you can monitor active listings, track sales performance, and analyze profit over time."
        />
      </div>

      <StoreCta title="Support" />

      <ContactUs />
      <Footer />
    </div>
  );
};

export default home;
