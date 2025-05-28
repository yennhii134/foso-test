import NavbarBottomContent from "./navbar-bottom-content/navbar-bottom-content";
import NavbarMiddleContent from "./navbar-middle-content/navbar-middle-content";
import SmallOne from "./small-one/small-one";

const HeaderLayout = () => {
  return (
    <div className="bg-white md:pb-4 space-y-6 fixed top-0 z-10 w-full">
      <SmallOne />
      <NavbarMiddleContent />
      <NavbarBottomContent />
    </div>
  );
};

export default HeaderLayout;
