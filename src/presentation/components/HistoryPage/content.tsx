import React from "react";
import { SearchBarNoPopup } from "../common/search-bar";
import { CheckInList } from "./checkin-list";
import SearchIcon from "../icons/SearchIcon";

const Content = () => {
  return (
    <div className="flex flex-col gap-[16px] px-[16px]">
      <div className="text-lg font-medium">Danh sách check-in</div>
      <SearchBarNoPopup
        placeholder="Tìm kiếm"
        className="h-[40px] rounded-[24px]"
        suffix={<SearchIcon className="size-[15px] text-[#8E8E8E]" />}
      />
      <CheckInList />
    </div>
  );
};

export default Content;
