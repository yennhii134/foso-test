export interface MenuCategoryBase {
  id: string;
  img: string;
  title: string;
}
export interface MenuCategoryType extends MenuCategoryBase {
  menuProductCategory?: MenuCategoryBase[];
}
