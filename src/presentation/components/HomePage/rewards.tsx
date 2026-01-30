import React from "react";
import CheckmarkIcon from "../../static/icons/checkmark.png";

const Rewards = () => {
  return (
    <div className="flex items-center gap-[14px] rounded-[12px] border border-[#E6E6E699] px-[14px] py-[12px]">
      <img src={CheckmarkIcon} alt="" className="size-[32px]" />
      <div className="flex flex-col gap-[2px]">
        <div className="text-sm font-normal text-gray7">Tổng số checkin</div>
        <div className="text-lg font-bold">1234</div>
      </div>
    </div>
  );
};

export { Rewards };
