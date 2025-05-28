import { MenuCategoryBase } from "@/type/menu.type";

const MenuProductCategory = ({
  categoryItems,
}: {
  categoryItems?: MenuCategoryBase[];
}) => {
  if (!categoryItems) return null;
  return (
    <div className="grid grid-cols-3 gap-4 pb-7 border-b border-stroke-medium-color/25">
      {categoryItems.map((item: MenuCategoryBase) => (
        <div
          key={item.id}
          className="col-span-1 bg-white px-4 py-3 flex items-center gap-4 rounded-xl h-24"
        >
          <div>
            <img
              src={item.img}
              alt={item.title}
              className="object-contain size-[70px] rounded-lg"
            />
          </div>
          <div className="font-semibold">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default MenuProductCategory;
