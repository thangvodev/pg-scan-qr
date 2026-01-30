import React from "react";
import BannerImg from "../../static/images/event-banner.png";

const Banner = () => {
  return (
    <div className="h-[182px]">
      <img src={BannerImg} alt="" className="size-full object-cover" />
    </div>
  );
};

export { Banner };
