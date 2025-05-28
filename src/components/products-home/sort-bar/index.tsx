"use client";

import clsx from "clsx";
import { useState } from "react";
import SortPrice from "./sort-price";

const SortBar = () => {
  const [sortChecked, setSortChecked] = useState<string>(
    productSortOptions[0].apiValue
  );

  return (
    <div className="pb-2 flex flex-col 3xl:flex-row 3xl:items-center justify-between">
      <h3 className="text-xl font-semibold text-primary pb-6 3xl:pb-0">
        Danh sách sản phẩm
      </h3>

      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
        <div className="flex items-center justify-between">
          <p className="text-primary font-medium text-base leading-[26px] ">
            Sắp xếp theo
          </p>
          <SortPrice className="block md:hidden" />
        </div>
        <div className="flex justify-between md:justify-start gap-3">
          {productSortOptions.map((option: ProductSortOptionsType) => {
            const isChecked = sortChecked === option.apiValue;
            return (
              <div
                key={option.key}
                className={clsx(
                  "relative bg-white rounded-lg h-10 flex items-center cursor-pointer",
                  {
                    "border border-brand-500": isChecked,
                  }
                )}
                onClick={() => setSortChecked(option.apiValue)}
              >
                <div className="px-2 md:px-4 flex items-center gap-2">
                  <p
                    className={clsx(
                      "font-bold text-xs md:text-sm leading-6 text-center",
                      {
                        "text-brand-500": isChecked,
                        "text-primary": !isChecked,
                      }
                    )}
                  >
                    {option.label}
                  </p>
                </div>
                {isChecked && (
                  <div
                    className="absolute top-0 right-0 bg-brand-500 rounded-tr-[6px] w-[25px] h-6 flex justify-end"
                    style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}
                  >
                    <img
                      src="/icons/check.svg"
                      alt="check"
                      className="w-3 h-3 pt-[2px] pr-[2px] object-contain"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <SortPrice className="hidden md:block" />
      </div>
    </div>
  );
};
export default SortBar;

type ProductSortOptionsType = {
  key: string;
  label: string;
  apiValue: string;
};
const productSortOptions: ProductSortOptionsType[] = [
  {
    key: "relevance",
    label: "Liên quan",
    apiValue: "relevance",
  },
  {
    key: "best_selling",
    label: "Bán chạy",
    apiValue: "best_selling",
  },
  {
    key: "newest",
    label: "Mới nhất",
    apiValue: "newest",
  },
  {
    key: "featured",
    label: "Nổi bật",
    apiValue: "featured",
  },
];
