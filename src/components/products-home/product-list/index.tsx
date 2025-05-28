"use client";
import ProductCard from "@/components/commons/product-card";
import { productList } from "@/data/products-home/product-list/product-list";
import { ProductCardType } from "@/type/product-card.type";
import { Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const PAGE_SIZE = 8;

const ProductList = () => {
  const [products, setProducts] = useState<ProductCardType[]>([]);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const isFetchingRef = useRef(false);
  const pageRef = useRef(0);

  const fetchProducts = async () => {
    if (isFetchingRef.current) return;
    isFetchingRef.current = true;
    setLoading(true);

    const start = pageRef.current * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    if (start >= productList.length) {
      setLoading(false);
      isFetchingRef.current = false;
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const newProducts = productList.slice(start, end);
    setProducts((prev) => [...prev, ...newProducts]);

    pageRef.current += 1;

    setLoading(false);
    isFetchingRef.current = false;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          fetchProducts();
        }
      },
      { threshold: 1 }
    );

    const loader = loaderRef.current;
    if (loader) observer.observe(loader);

    return () => {
      if (loader) observer.unobserve(loader);
    };
  }, [loading]);

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((product: ProductCardType) => (
          <ProductCard key={product.id} {...product} />
        ))}
        <div ref={loaderRef} className="col-span-full" />
      </div>
      {loading && (
        <div className="flex justify-center items-center py-4 min-w-full">
          <Loader2 className="animate-spin w-6 h-6 text-brand-600" />
        </div>
      )}
    </>
  );
};

export default ProductList;
