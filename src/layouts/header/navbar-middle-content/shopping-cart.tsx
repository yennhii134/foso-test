"use client";
import ProductCard from "@/components/commons/product-card";
import { useState } from "react";

const ShoppingCart = () => {
  const [isHoveredShoppingCart, setIsHoveredShoppingCart] =
    useState<boolean>(false);

  return (
    <div
      className="flex gap-2 items-center cursor-pointer relative"
      onMouseEnter={() => setIsHoveredShoppingCart(true)}
      onMouseLeave={() => setIsHoveredShoppingCart(false)}
    >
      <div className="relative">
        <img src="/images/header/ecommerce.svg" alt="ecommerce" />
        <div className="absolute -top-1/4 md:-top-1/2 -right-1/3 md:-right-1/2 bg-error rounded-full flex items-center justify-center size-5 md:size-6">
          <p className="text-white text-center leading-4 text-[10px] md:text-xs font-medium">
            12
          </p>
        </div>
      </div>
      <p className="hidden md:block">Giỏ hàng</p>

      {isHoveredShoppingCart && (
        <div className="absolute top-7 left-0 md:left-1/2 -translate-x-1/2 z-20 md:min-w-[214px]">
          <div className="mt-6 shadow-[0px_8px_16px_0px_rgba(3,117,243,0.16)] rounded-lg">
            <ProductCard
              id="1"
              img="/images/products/bo-loc-dau.png"
              title="Bộ lọc dầu"
              originalPrice={3290000}
              discountedPrice={2990000}
              discountPercent={10}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
