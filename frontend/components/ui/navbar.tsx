import ThemeToggle from "./theme-toggle";
import MenuBar from "./menu";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-5">
        <p className="text-[40px] dark:text-white text-black font-space">
          {"mai's space"}
        </p>
        <MenuBar />
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
