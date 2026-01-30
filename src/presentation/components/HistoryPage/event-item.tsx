import React, { FC } from "react";
import FlagIcon from "../../static/icons/flag.png";

const EventItem: TEventItem = ({ name }) => {
  return (
    <div className="flex items-center gap-[4px]">
      <img src={FlagIcon} alt="" className="size-[20px]" />
      <span className="text-xs font-normal text-gray7">{name}</span>
    </div>
  );
};

export { EventItem };

type TEventItem = FC<{ name: string }>;
