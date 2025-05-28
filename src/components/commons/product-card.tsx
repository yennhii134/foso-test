import { ProductCardType } from "@/type/product-card.type";
import { Button } from "../ui/button";

const ProductCard = (product: ProductCardType) => {
  return (
    <div
      key={product.id}
      className="col-span-1 rounded-lg bg-white flex flex-col justify-between"
    >
      <div className="w-full aspect-square overflow-hidden rounded-lg p-spacing-1 flex items-center h-full">
        <img
          src={product.img}
          alt="product-1"
          className="size-full object-contain rounded-lg"
        />
      </div>
      <div className="pt-spacing-1 pb-content-p px-4 md:px-content-p flex flex-col gap-4">
        <div className="w-full md:max-w-[124px] h-[25px] rounded-full py-[2px] px-2 md:px-[10px] flex items-center gap-[6px] bg-gradient-to-r from-warning-light to-warning">
          <img
            src="/images/products/fire-icon.svg"
            alt="fire-icon"
            className="size-4 object-contain"
          />
          <p className="text-error-darker text-xs md:text-sm font-semibold">
            Giá cực sốc
          </p>
        </div>
        <p className="text-sm md:text-base font-semibold line-clamp-2 text-ellipsis">
          {product.title}
        </p>
        <p className="text-error-dark font-semibold text-lg md:text-xl leading-6">
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

        <Button className="w-full" variant="default">
          Mua ngay
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
