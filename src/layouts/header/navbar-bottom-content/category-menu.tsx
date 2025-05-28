"use client";
import CategoryMenuHovered from "@/components/category-menu-hovered";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const CategoryMenu = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const [isHoveredCategoryMenu, setIsHoveredCategoryMenu] =
    useState<boolean>(false);

  return (
    <>
      <div
        className="relative"
        onMouseEnter={() => {
          !isMobile && setIsHoveredCategoryMenu(true);
        }}
        onMouseLeave={() => {
          !isMobile && setIsHoveredCategoryMenu(false);
        }}
      >
        <div className="hidden bg-brand text-white py-3 px-4 rounded-lg md:flex items-center gap-2 cursor-pointer">
          <img src="/images/header/menu.svg" alt="menu" />
          <p className="text-sm 3xl:text-base leading-[20px] font-bold text-center">
            Danh mục sản phẩm
          </p>
          {isHoveredCategoryMenu ? (
            <ChevronUpIcon className="hidden md:block" />
          ) : (
            <ChevronDownIcon className="hidden md:block" />
          )}
        </div>
        {isHoveredCategoryMenu && !isMobile && (
          <div className="absolute top-full left-0 z-[9999] md:min-w-[1057px]">
            <CategoryMenuHovered />
          </div>
        )}
      </div>

      {isMobile && (
        <Sheet>
          <SheetTrigger asChild>
            <div
              className="bg-brand text-white py-3 px-4 rounded-lg flex items-center gap-2 cursor-pointer z-[9999]"
              onClick={() => setIsHoveredCategoryMenu(!isHoveredCategoryMenu)}
            >
              <img src="/images/header/menu.svg" alt="menu" />
            </div>
          </SheetTrigger>
          <SheetContent side="left" className="overflow-y-auto">
            <CategoryMenuHovered />
          </SheetContent>
        </Sheet>
      )}
    </>
  );
};

export default CategoryMenu;
