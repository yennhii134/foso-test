import { Checkbox } from "@/components/ui/checkbox";
import { Category } from "@/type/category.type";
import ProductFilterWrapper from "./product-filter-wrapper";

interface CheckBoxCategoryProps {
  title: string;
  categories: Category[];
  categoriesChecked: string[];
  handleCategoryChecking: (id: string) => void;
}

const CheckBoxCategoryGroup = ({
  title,
  categories,
  categoriesChecked,
  handleCategoryChecking,
}: CheckBoxCategoryProps) => {
  return (
    <ProductFilterWrapper title={title}>
      {categories.map((category: Category) => (
        <div key={category.id} className="flex items-center gap-3">
          <Checkbox
            checked={categoriesChecked.includes(category.id)}
            onCheckedChange={() => handleCategoryChecking(category.id)}
          />
          <div className="text-xs lg:text-sm">
            <p className="text-primary font-medium">
              {category.name}{" "}
              <span className="font-normal text-secondary">
                ({category.count})
              </span>
            </p>
          </div>
        </div>
      ))}
    </ProductFilterWrapper>
  );
};

export default CheckBoxCategoryGroup;
