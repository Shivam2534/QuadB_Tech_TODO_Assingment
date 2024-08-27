import TopNavbar from "./component's/TopNAvbar/TopNavbar";
import SideNavbar from "./component's/SideNavbar/SideNavbar.jsx";
import { useSelector, useDispatch } from "react-redux";
import { isUserLoggedIn, UpdateTaskList } from "./Store/authSlice.js";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  // we are changing mode
  const [Theme, setTheme] = useState("light");
  const CurrTheme = useSelector((state) => state.auth.Mode);

  useEffect(() => {
    setTheme(CurrTheme);
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(Theme);
  }, [CurrTheme, Theme]);

  console.log(Theme);

  // other stuff
  const dispatch = useDispatch();
  const status = useSelector((state) => state.auth.ToggleStatusOfSideMenuBar);
  const data = localStorage.getItem("TaskList");
  const UserCrad = localStorage.getItem("UserCradentials");
  if (data !== null) {
    dispatch(UpdateTaskList(JSON.parse(data)));
  }

  if (JSON.parse(UserCrad) != null) {
    dispatch(isUserLoggedIn(true));
  }

  return (
    <div className="dark:bg-[#232222] min-h-screen sm:h-full border md:mx-10 flex flex-col">
      <div className="border h-10 m-2">
        <TopNavbar />
      </div>
      <div className="min-h-screen sm:h-full m-2 flex gap-2">
        <div
          className={`${
            status == true ? "md:block" : "md:hidden"
          } w-72 hidden md:block`}
        >
          <SideNavbar />
        </div>

        <div className="w-full md:m-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
