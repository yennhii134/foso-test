import { MenuCategoryBase, MenuCategoryType } from "@/type/menu.type";
import clsx from "clsx";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useMediaQuery } from "react-responsive";

interface MenuLogoProps {
  item: MenuCategoryType;
  menuActive: MenuCategoryType | null;
  categoryItems: MenuCategoryBase[];
  setMenuActive: (id: MenuCategoryType) => void;
}

const MenuCategory = ({
  item,
  menuActive,
  categoryItems,
  setMenuActive,
}: MenuLogoProps) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const isMenuActived = menuActive && menuActive.id === item.id;

  const handleOnClick = () => {
    if (menuActive) {
      if (item.id === menuActive.id) {
        setMenuActive({ ...item, id: "" });
      } else {
        setMenuActive(item);
      }
    }
  };

  return (
    <ol
      key={item.id}
      className={clsx("py-1 px-4 cursor-pointer rounded-lg", {
        "bg-grey-200": menuActive && menuActive.id === item.id,
      })}
      onMouseMove={() => setMenuActive(item)}
      onClick={() => isMobile && handleOnClick()}
    >
      <div>
        <div
          className={clsx("flex items-center justify-between py-3 gap-3", {
            "text-brand-700 font-bold": isMenuActived,
            "text-primary": !isMenuActived,
          })}
        >
          <div>
            <img
              src={item.img}
              alt={item.title}
              className="object-contain size-10"
            />
          </div>
          <div className="flex justify-start flex-1">{item.title}</div>
          <div>{isMenuActived ? <ChevronDown /> : <ChevronRight />}</div>
        </div>
        {isMenuActived && (
          <div className="flex flex-col gap-3 md:hidden rounded-lg">
            {categoryItems.map((subItem, index) => (
              <div
                key={subItem.id}
                className={clsx(
                  "pl-4 pb-2 border-b border-stroke-medium-color/25",
                  {
                    "pt-4": index === 0,
                    "pb-2 border-b-0": index === categoryItems.length - 1,
                  }
                )}
              >
                <p className="font-medium">{subItem.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </ol>
  );
};

export default MenuCategory;
