import { bestSellerProducts } from "@/data/category-menu-hovered/best-seller-products";
import { ProductCardType } from "@/type/product-card.type";
import { ChevronsRight } from "lucide-react";

const BestSellerProducts = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Sản Phẩm Bán Chạy</h1>
        <div className="text-brand-500 font-semibold text-base flex items-center gap-2 py-1 px-3 rounded-[20px]">
          <p>Xem tất cả</p>
          <ChevronsRight />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {bestSellerProducts.map((product: ProductCardType) => (
          <div
            key={product.id}
            className="col-span-1 rounded-lg bg-white flex flex-col"
          >
            <div className="w-full aspect-square overflow-hidden rounded-lg p-spacing-1">
              <img
                src={product.img}
                alt="product-1"
                className="size-full object-cover rounded-lg"
              />
            </div>
            <div className="pt-spacing-2 pb-5 px-3 flex flex-col gap-4">
              <p className="font-semibold line-clamp-2 text-ellipsis">
                {product.title}
              </p>
              <p className="text-error-dark font-semibold text-xl leading-6">
                {product.discountedPrice.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
              <div className="flex items-center gap-[10px] text-sm leading-6">
                <p className="text-disabled font-normal line-through">
                  {product.originalPrice.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
                <p className="text-error-dark font-medium">
                  -{product.discountPercent}%
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellerProducts;
