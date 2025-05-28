import { Search } from "lucide-react";
import { Input } from "./input";

const InputSearch = () => {
  return (
    <div className="flex items-center border-2 border-brand-500 rounded-full md:py-2 pr-2 pl-5">
      <div className="flex-1 pr-2 md:pr-6 flex items-center justify-between">
        <Input
          className="border-0 bg-transparent focus-visible:ring-transparent shadow-none"
          placeholder="Tìm sản phẩm"
        />
        <div className="cursor-pointer">
          <img
            src="/images/header/camera.svg"
            alt="search"
            className="object-contain w-[26px] h-auto"
          />
        </div>
      </div>
      <div className="flex md:hidden xl:flex bg-brand-500 rounded-full py-1 xl:py-3 xl:px-6 size-[26px] md:w-[56px] xl:w-[76px] md:h-12 items-center justify-center cursor-pointer">
        <Search className="text-white size-4 md:size-6" />
      </div>
    </div>
  );
};

export default InputSearch;
