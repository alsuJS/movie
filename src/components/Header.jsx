import { Film, Search, Moon } from "lucide-react";

export const Header = () => {
  return (
    <div className="flex justify-between w-[375px] h-[60px] md:w-[1440px] md:h-[60px]">
      <div className="flex ">
        <Film className="text-blue-800" />
        <p className="text-blue-800">Movie Z</p>
      </div>
      <div className="flex justify-between  w-[84px] h-[36px] ">
        <div className="w-[36px] h-[36px] m-auto">
          <Search className="w-[12px] h-[12px]" />
        </div>
        <div className="w-[36px] h-[36px] m-auto">
          <Moon className="w-[12px] h-[12px]" />
        </div>
      </div>
    </div>
  );
};
