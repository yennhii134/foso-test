import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

interface ProductFilterWrapperProps {
  title: string;
  className?: string;
  children?: React.ReactNode;
}

const ProductFilterWrapper = ({
  title,
  className = "gap-3",
  children,
}: ProductFilterWrapperProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="p-3 flex flex-col gap-4">
      <div
        className="flex items-center justify-between text-primary cursor-pointer gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-base lg:text-[20px] leading-7 font-semibold">
          {title}
        </p>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>
      {isOpen && (
        <div className={cn("flex flex-col", className)}>{children}</div>
      )}
    </div>
  );
};

export default ProductFilterWrapper;
