import { Film, Search, Moon } from "lucide-react";
import { Router } from "next/router";

export const Header = () => {
  return (
    <div className="flex justify-between items-center ml-[20px] w-[375px] h-[60px] md:w-[1440px] md:h-[60px]">
      <div className="flex ">
        <Film className="text-blue-800" />
        <p className="text-blue-800">Movie Z</p>
      </div>
      <div className="flex mr-[20px] w-[84px] h-[36px] ">
        <button className="border-1 rounded-xl p-[12px] w-[36px] h-[36px] m-auto">
          <Search className="w-[12px] h-[12px]" />
        </button>
        <button className="border-1 rounded-xl p-[10px] w-[36px] h-[36px] justify-center items-center ">
          <Moon className="w-[16px] h-[16px]" />
        </button>
      </div>
    </div>
  );
};
