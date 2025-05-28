import InputSearch from "../../../components/ui/input-search";
import CategoryMenu from "../navbar-bottom-content/category-menu";
import { FeatureItem } from "./feature-item";

import ShoppingCart from "./shopping-cart";

const NavbarMiddleContent = () => {
  return (
    <div>
      <div className="flex items-center justify-between gap-6 xl:gap-12 container-layout">
        <div className="block md:hidden">
          <CategoryMenu />
        </div>
        <div className="cursor-pointer">
          <img
            src="/images/header/logo_sunfil1.svg"
            alt="logo_sunfil1"
            className="object-contain h-20 w-auto xl:h-28"
          />
        </div>
        <div className="hidden md:block flex-1 max-xl:mr-6">
          <InputSearch />
        </div>
        <div className="flex items-center gap-4 md:gap-8">
          <FeatureItem text="VI" icon="/icons/ico-country-c-vietnam.svg" />
          <ShoppingCart />
          <FeatureItem text="Tài khoản" icon="/images/header/users.svg" />
        </div>
      </div>
      <div className="block md:hidden px-6">
        <InputSearch />
      </div>
    </div>
  );
};

export default NavbarMiddleContent;
