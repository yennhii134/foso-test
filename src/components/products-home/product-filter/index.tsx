"use client";
import { brands } from "@/data/products-home/product-filter/brands";
import { origins } from "@/data/products-home/product-filter/origin";
import {
  PriceRange,
  priceRanges,
} from "@/data/products-home/product-filter/price-range";
import { productCatalogs } from "@/data/products-home/product-filter/product-catalogs";
import { yearProductions } from "@/data/products-home/product-filter/year-production";
import clsx from "clsx";
import { useState } from "react";
import { default as CheckBoxCategoryGroup } from "./check-box-category";
import ProductFilterWrapper from "./product-filter-wrapper";

const ProductFilter = () => {
  const [productCatalogChecked, setProductCatalogChecked] = useState<string[]>(
    []
  );
  const [brandsChecked, setBrandsChecked] = useState<string[]>([]);
  const [yearProductionsChecked, setYearProductionsChecked] = useState<
    string[]
  >([]);
  const [originsChecked, setOriginsChecked] = useState<string[]>([]);
  const [priceRangeChecked, setPriceRangeChecked] = useState<string | null>(
    null
  );

  const toggleCheckbox =
    (stateSetter: React.Dispatch<React.SetStateAction<string[]>>) =>
    (id: string) => {
      stateSetter((prev) =>
        prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
      );
    };

  return (
    <div className="hidden max-w-[160px] lg:max-w-[315px] w-[315px] rounded-lg py-3 md:flex flex-col gap-1 bg-white mb-5">
      {/* Title */}
      <div className="p-3 flex items-center gap-3">
        <img
          src="/icons/filter.svg"
          alt="Filter Icon"
          className="size-6 lg:size-8"
        />
        <p className="text-brand-500 text-xl lg:text-2xl font-bold">Bộ lọc</p>
      </div>

      <div className="border border-stroke-low-color/20"></div>

      {/* Product Catalog */}
      <CheckBoxCategoryGroup
        title="Danh mục sản phẩm"
        categories={productCatalogs}
        categoriesChecked={productCatalogChecked}
        handleCategoryChecking={toggleCheckbox(setProductCatalogChecked)}
      />

      {/* Price range*/}
      <ProductFilterWrapper title="Khoảng giá" className="gap-2">
        {priceRanges.map((priceRange: PriceRange) => {
          const isChecked = priceRangeChecked === priceRange.id;
          return (
            <div
              key={priceRange.id}
              className={clsx(
                "border border-stroke-medium-color/25 rounded-[4px] p-1 lg:p-2 flex items-center justify-center gap-[10px] cursor-pointer",
                {
                  "bg-brand-50 border-brand-500 text-brand-500 font-bold":
                    isChecked,
                  "bg-fill-outermost/25 text-primary font-normal": !isChecked,
                }
              )}
              onClick={() => setPriceRangeChecked(priceRange.id)}
            >
              <p className="text-xs lg:text-sm">{priceRange.label}</p>
            </div>
          );
        })}
      </ProductFilterWrapper>

      {/* Brand */}
      <CheckBoxCategoryGroup
        title="Thương hiệu"
        categories={brands}
        categoriesChecked={brandsChecked}
        handleCategoryChecking={toggleCheckbox(setBrandsChecked)}
      />

      {/* Year of production  */}
      <CheckBoxCategoryGroup
        title="Năm sản xuất"
        categories={yearProductions}
        categoriesChecked={yearProductionsChecked}
        handleCategoryChecking={toggleCheckbox(setYearProductionsChecked)}
      />

      {/* Origin */}
      <CheckBoxCategoryGroup
        title="Xuất xứ"
        categories={origins}
        categoriesChecked={originsChecked}
        handleCategoryChecking={toggleCheckbox(setOriginsChecked)}
      />
    </div>
  );
};

export default ProductFilter;
