import { useState } from "react";
import SideNavbarForModile from "../SideNavbar/SideNavbarForModile";
import { useDispatch, useSelector } from "react-redux";
import { SetTogglingStatus } from "../../Store/authSlice.js";
import logomark from "../../../public/logomark.png";
// import all from "../../../public/Vector.png";
// import mode from "../../../public/app-grid.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import { DarkMode } from "@mui/icons-material";
import { AddBoxRounded } from "@mui/icons-material";
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
      <div className="flex justify-between items-center">
        <div className=" md:flex md:w-24 md:gap-8 md:justify-between md:items-center">
          <div
            className="hidden md:block dark:text-white"
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
          <div className="md:cursor-not-allowed dark:text-white">
            <SearchIcon />
          </div>
          <div className="md:cursor-not-allowed  dark:text-white">
            {/* <img src={mode} alt="" /> */}
             <AddBoxRounded />
          </div>

          <div onClick={ChangeMode} className="dark:text-white">
            {/* <img src={all} alt="" className="dark:text-white" /> */}
             <DarkMode />
          </div>
        </div>
        <div onClick={OpenMenuBar} className="md:hidden dark:text-white">
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
