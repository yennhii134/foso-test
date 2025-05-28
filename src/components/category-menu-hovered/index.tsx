"use client";
import { MenuCategoryType } from "@/type/menu.type";
import { useState } from "react";
import BestSellerProducts from "./best-seller-products";

import { menuCategory } from "@/data/category-menu-hovered/menu-product-category";
import { useMediaQuery } from "react-responsive";
import MenuCategory from "./menu-category";
import MenuProductCategory from "./menu-product-category";

const CategoryMenuHovered = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const [menuActive, setMenuActive] = useState<MenuCategoryType | null>(
    isMobile ? null : menuCategory[0]
  );

  return (
    <div className="max-w-full bg-grey-200 mt-4 z-[9999]">
      <div
        className="md:grid md:grid-cols-8"
        onMouseLeave={() => !isMobile && setMenuActive(menuCategory[0])}
      >
        <div className="md:col-span-2 bg-white">
          <li className="list-none">
            {menuCategory.map((item: MenuCategoryType) => (
              <MenuCategory
                key={item.id}
                item={item}
                menuActive={menuActive}
                categoryItems={item.menuProductCategory ?? []}
                setMenuActive={setMenuActive}
              />
            ))}
          </li>
        </div>
        <div className="hidden md:col-span-6 p-6 md:flex flex-col gap-6">
          <MenuProductCategory
            categoryItems={menuActive?.menuProductCategory}
          />
          <BestSellerProducts />
        </div>
      </div>
    </div>
  );
};

export default CategoryMenuHovered;
