import React, { useState } from "react";
import { Banner } from "./banner";
import { Title } from "./title";
import { GuestInformation } from "./guest-information";
import { EventInformation } from "./event-information";
import { FloatButton } from "./float-button";

const Content = () => {
  const [status, setStatus] = useState<TStatus>("unconfirmed");

  return (
    <div className="relative flex size-full flex-col gap-[16px]">
      <div className="flex flex-col gap-[20px]">
        <Banner />
        <Title status={status} />
      </div>
      <div className="flex flex-col gap-[16px] px-[12px]">
        <GuestInformation />
        <EventInformation />
      </div>
      <FloatButton status={status} setStatus={setStatus} />
    </div>
  );
};

export default Content;

type TStatus = "unconfirmed" | "confirmed" | "finished";
