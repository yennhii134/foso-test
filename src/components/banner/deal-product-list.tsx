"use client";
import { dealProduct } from "@/data/banner/deal-product/deal-product";
import { ProductCardType } from "@/type/product-card.type";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import ProductCard from "../commons/product-card";

const DealProductList = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1280px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const [startIndex, setStartIndex] = useState<number>(0);
  const visibleCount = isDesktop ? 5 : isMobile ? 2 : 3;

  const visibleProducts = dealProduct.slice(
    startIndex,
    startIndex + visibleCount
  );

  const handleNext = () => {
    if (startIndex + visibleCount >= dealProduct.length) {
      return;
    } else {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex === 0) {
      return;
    } else {
      setStartIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-[592px] rounded-br-xl rounded-bl-xl px-6 py-12 md:p-12 gap-5 bg-brand-600 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 relative">
      <div
        className="absolute top-1/2 left-3 md:left-6 bg-brand-100 rounded-full size-8 md:size-10 p-2 flex items-center justify-center"
        onClick={handlePrev}
      >
        <ChevronLeft className="text-brand-800" />
      </div>
      {visibleProducts.map((product: ProductCardType) => (
        <ProductCard key={product.id} {...product} />
      ))}
      <div
        className="absolute top-1/2 right-3 md:right-6 bg-brand-100 rounded-full size-8 md:size-10 p-2 flex items-center justify-center"
        onClick={handleNext}
      >
        <ChevronRight className="text-brand-800" />
      </div>
    </div>
  );
};

export default DealProductList;
