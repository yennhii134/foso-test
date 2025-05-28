import ProductFilter from "./product-filter";
import ProductList from "./product-list";
import SortBar from "./sort-bar";

const ProductsHome = () => {
  return (
    <div className="flex gap-4">
      <ProductFilter />
      <div className="flex-1 flex flex-col gap-5">
        <SortBar />
        <ProductList />
      </div>
    </div>
  );
};

export default ProductsHome;
