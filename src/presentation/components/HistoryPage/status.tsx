import React, { FC } from "react";

const Status: TStatus = ({ status = "checkin" }) => {
  switch (status) {
    case "checkin":
      return (
        <div className="w-fit rounded-[24px] bg-infor1 px-[8px] py-[4px] text-[11px] font-medium text-secondary4">
          Đã checkin
        </div>
      );

    default:
      return null;
  }
};

export { Status };

type TStatus = FC<{ status: "checkin" }>;
