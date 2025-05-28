export interface PriceRange {
  id: string;
  label: string;
  minPrice: number;
  maxPrice: number;
}

export const priceRanges: PriceRange[] = [
  {
    id: "1",
    label: "Dưới 100.000đ",
    minPrice: 0,
    maxPrice: 100000,
  },
  {
    id: "2",
    label: "Từ 100.000đ - 500.000đ",
    minPrice: 100000,
    maxPrice: 500000,
  },
  {
    id: "3",
    label: "Từ 500.000đ - 1.000.000đ",
    minPrice: 500000,
    maxPrice: 1000000,
  },
  {
    id: "4",
    label: "Từ 1.000.000đ - 5.000.000đ",
    minPrice: 1000000,
    maxPrice: 5000000,
  },
  {
    id: "5",
    label: "Trên 5.000.000đ",
    minPrice: 5000000,
    maxPrice: Infinity,
  },
];
