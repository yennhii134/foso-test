import { MenuCategoryType } from "@/type/menu.type";

const createCategoryItems = (
  count: number,
  title: string,
  img: string
): MenuCategoryType[] =>
  Array.from({ length: count }, (_, i) => ({
    id: `${i + 1}`,
    title,
    img,
  }));

export const menuCategory: MenuCategoryType[] = [
  {
    id: "1",
    img: "/images/products/bo-loc-dau.png",
    title: "Bộ Lọc Dầu",
    menuProductCategory: createCategoryItems(
      6,
      "Bộ Lọc Dầu",
      "/images/products/bo-loc-dau.png"
    ),
  },
  {
    id: "2",
    img: "/images/products/bo-loc-khong-khi-1.png",
    title: "Bộ Lọc Không Khí",
    menuProductCategory: createCategoryItems(
      6,
      "Bộ Lọc Không Khí",
      "/images/products/bo-loc-khong-khi-1.png"
    ),
  },
  {
    id: "3",
    img: "/images/products/bo-loc-nhien-lieu-1.png",
    title: "Bộ Lọc Nhiên Liệu",
    menuProductCategory: createCategoryItems(
      6,
      "Bộ Lọc Nhiên Liệu",
      "/images/products/bo-loc-nhien-lieu-1.png"
    ),
  },
  {
    id: "4",
    img: "/images/products/bo-loc-trong-cabin-1.png",
    title: "Bộ Lọc Trong Cabin",
    menuProductCategory: createCategoryItems(
      6,
      "Bộ Lọc Trong Cabin",
      "/images/products/bo-loc-trong-cabin-1.png"
    ),
  },
  {
    id: "5",
    img: "/images/products/bo-loc-khong-khi-2.png",
    title: "Bộ Lọc Không Khí",
    menuProductCategory: createCategoryItems(
      6,
      "Bộ Lọc Không Khí",
      "/images/products/bo-loc-khong-khi-2.png"
    ),
  },
  {
    id: "6",
    img: "/images/products/bo-loc-trong-cabin-2.png",
    title: "Bộ Lọc Trong Cabin",
    menuProductCategory: createCategoryItems(
      6,
      "Bộ Lọc Trong Cabin",
      "/images/products/bo-loc-trong-cabin-2.png"
    ),
  },
  {
    id: "7",
    img: "/images/products/bo-loc-nhien-lieu-2.png",
    title: "Bộ Lọc Nhiên Liệu",
    menuProductCategory: createCategoryItems(
      6,
      "Bộ Lọc Nhiên Liệu",
      "/images/products/bo-loc-nhien-lieu-2.png"
    ),
  },
  {
    id: "8",
    img: "/images/products/bo-loc-khong-khi-3.png",
    title: "Bộ Lọc Không Khí",
    menuProductCategory: createCategoryItems(
      6,
      "Bộ Lọc Không Khí",
      "/images/products/bo-loc-khong-khi-3.png"
    ),
  },
];
