"use client";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUp, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { FaFunnelDollar } from "react-icons/fa";

const SortPrice = ({ className }: { className: string }) => {
  const [isPriceASC, setIsPriceASC] = useState<boolean>(true);
  return (
    <div
      className={cn(
        "max-w-[160px] h-9 rounded-lg px-2 cursor-pointer",
        className
      )}
      onClick={() => setIsPriceASC(!isPriceASC)}
    >
      {isPriceASC ? (
        <>
          <div className="hidden xl:flex items-center xl:gap-2">
            <p className="font-medium text-sm leading-6 text-center">
              Giá: Thấp → Cao
            </p>
            <ChevronDown />
          </div>

          <div className="flex xl:hidden items-center text-brand-500">
            <FaFunnelDollar className="block xl:hidden text-xl" />
            <ArrowDown />
          </div>
        </>
      ) : (
        <>
          <div className="hidden xl:flex items-center xl:gap-2">
            <p className="font-medium text-sm leading-6 text-center">
              Giá: Cao → Thấp
            </p>
            <ChevronUp />
          </div>

          <div className="flex xl:hidden items-center text-brand-500">
            <FaFunnelDollar className="block xl:hidden text-xl" />
            <ArrowUp />
          </div>
        </>
      )}
    </div>
  );
};

export default SortPrice;
