import React from "react";
import appVideo from "../assets/AppVideo.mp4";

const Video = () => {
  return (
    <div className="h-[750px] w-full flex flex-col items-center justify-center">
      <h1 className="text-7xl font-bold text-light1"> Scan, Identify, Sell.</h1>
      <video
        src={appVideo}
        className="w-full h-[650px] object-contain "
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
};

export default Video;
