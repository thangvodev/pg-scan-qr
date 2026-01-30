import React, { FC } from "react";
import { Status } from "./status";
import { EventItem } from "./event-item";
import ClockFilledIcon from "../icons/ClockFilledIcon";
import { Divider } from "antd";
import { formatCurrency } from "../../utils/helpers";
import ClockIcon from "../icons/ClockIcon";
import { useNavigate } from "react-router-dom";

const CheckInList = () => {
  return (
    <div className="flex flex-col gap-[20px] pb-[16px]">
      <CheckInListItem status="checkin" />
      <CheckInListItem status="checkin" />
      <CheckInListItem status="checkin" />
      <CheckInListItem status="checkin" />
    </div>
  );
};

const CheckInListItem: TCheckInListItem = ({ status }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col gap-[12px] rounded-[12px] bg-white px-[12px] py-[10px]"
      style={{ boxShadow: "0px 4px 24px 0px #BABABA1F" }}
      onClick={() => navigate("/checkin")}
    >
      <div className="flex flex-col gap-[8px]">
        <Status status={status} />
        <div className="text-sm font-medium">
          Thu Hồng <span className="text-xs text-gray6">(012343454)</span>
        </div>
      </div>
      <div className="flex items-center gap-[4px]">
        <ClockIcon className="size-[20px] text-gray4" />
        <div className="text-xs font-normal text-gray7">
          Checkin: 12:00, 12/12/2024
        </div>
      </div>
      <EventItem name="Sự kiện Doctor event 1" />
    </div>
  );
};

export { CheckInList };

type TCheckInListItem = FC<{
  status: "checkin";
}>;
