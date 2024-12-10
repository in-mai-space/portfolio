import ThemeToggle from "./theme-toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import MenuBar from "./menu";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-5">
        <p className="text-[40px]">{"mai's space"}</p>
        <MenuBar />
      </div>
      <div className="flex flex-row items-center gap-10">
        <ThemeToggle />
        <button>
          <FontAwesomeIcon
            icon={faUser}
            className="hover:text-slate-600 text-[25px] transition-colors duration-200 ease-in-out"
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
