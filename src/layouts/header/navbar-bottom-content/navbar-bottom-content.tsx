"use client";
import CategoryMenu from "./category-menu";
import Content1 from "./content-1";
import Content2 from "./content-2";

const NavbarBottomContent = () => {
  return (
    <div className="flex flex-col 2xl:flex-row items-start 2xl:items-center justify-center gap-6 container-layout mx-auto">
      <div className="hidden md:flex justify-between w-full 2xl:w-auto">
        <CategoryMenu />
        <Content1 className="2xl:hidden" />
      </div>

      <div className="flex flex-col 2xl:flex-row gap-4 2xl:items-center justify-between flex-1 w-full">
        <Content1 className="max-2xl:hidden" />
        <Content2 className="max-2xl:hidden" />
      </div>
    </div>
  );
};

export default NavbarBottomContent;
