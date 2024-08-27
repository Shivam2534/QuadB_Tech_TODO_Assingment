import { useState } from "react";
import SideNavbarForModile from "../SideNavbar/SideNavbarForModile";
import { useDispatch, useSelector } from "react-redux";
import { SetTogglingStatus } from "../../Store/authSlice.js";
import logomark from "../../../public/logomark.png";
import all from "../../../public/Vector.png";
import mode from "../../../public/app-grid.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { ToggleDarkMode } from "../../Store/authSlice.js";
import { ToggleLightMode } from "../../Store/authSlice.js";

function TopNavbar() {
  const [toggleMenu, settoggleMenu] = useState(false);
  const [toggleStatusOfsidemenu, settoggleStatusOfsidemenu] = useState(false);
  const CurrThemeMode = useSelector((state) => state.auth.Mode);
  const dispatch = useDispatch();

  function OpenMenuBar() {
    if (toggleMenu) {
      settoggleMenu(false);
    } else {
      settoggleMenu(true);
    }
  }

  function toggleSideMenuOFLargeScreen() {
    settoggleStatusOfsidemenu(!toggleStatusOfsidemenu);
    dispatch(SetTogglingStatus(toggleStatusOfsidemenu));
  }

  function ChangeMode() {
    if (CurrThemeMode == "light") {
      dispatch(ToggleDarkMode());
    } else {
      dispatch(ToggleLightMode());
    }
  }

  return (
    <div>
      <div className="flex justify-between">
        <div className="md:flex md:w-24 md:gap-8 md:justify-between md:items-center">
          <div
            className="hidden md:block"
            onClick={toggleSideMenuOFLargeScreen}
          >
            <MenuIcon />
          </div>
          <div className="flex justify-center items-center">
            <img src={logomark} alt="LoGo" />{" "}
            <span className=" text-[#3F9142] text-xl">DoIt</span>
          </div>
        </div>
        <div className=" hidden md:flex md:gap-5 md:items-center">
          <div className="md:cursor-not-allowed">
            <SearchIcon />
          </div>
          <div className="md:cursor-not-allowed">
            <img src={mode} alt="" />
          </div>

          <div onClick={ChangeMode}>
            <img src={all} alt="" />
          </div>
        </div>
        <div onClick={OpenMenuBar} className="md:hidden">
          <MenuIcon />
        </div>
      </div>

      <div
        className={`${toggleMenu == true ? "block" : "hidden"} mt-4 md:hidden`}
      >
        <SideNavbarForModile toggleMenu={toggleMenu} />
      </div>
    </div>
  );
}

export default TopNavbar;
