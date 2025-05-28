import { productBase } from "@/data/base-product";
import { ProductCardType } from "@/type/product-card.type";

const baseItems: ProductCardType[] = [
  {
    img: "/images/products/loc-gio-dong-co-5.png",
    ...productBase,
  },
  {
    img: "/images/products/bo-loc-nhien-lieu-1.png",
    ...productBase,
  },
  {
    img: "/images/products/loc-gio-dong-co-6.png",
    ...productBase,
  },
  {
    img: "/images/products/loc-gio-dong-co-7.png",
    ...productBase,
  },
  {
    img: "/images/products/loc-gio-dong-co-5.png",
    ...productBase,
  },
  {
    img: "/images/products/bo-loc-nhien-lieu-1.png",
    ...productBase,
  },
  {
    img: "/images/products/loc-gio-dong-co-6.png",
    ...productBase,
  },
  {
    img: "/images/products/loc-gio-dong-co-7.png",
    ...productBase,
  },
];

export const productList: ProductCardType[] = Array.from(
  { length: 40 },
  (_, index) => {
    const baseProduct = baseItems[index % baseItems.length];
    return {
      ...baseProduct,
      id: `${index + 1}-${Math.random().toString(36).slice(2, 9)}`,
    };
  }
);
