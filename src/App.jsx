import TopNavbar from "./component's/TopNAvbar/TopNavbar";
import SideNavbar from "./component's/SideNavbar/SideNavbar.jsx";
import { useSelector, useDispatch } from "react-redux";
import { isUserLoggedIn, UpdateTaskList } from "./Store/authSlice.js";
import { Outlet } from "react-router-dom";

function App() {
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

  console.log(UserCrad);

  return (
    <div className=" border border-red-400 min-h-screen md:h-full md:mx-10 flex flex-col">
      <div className=" border border-red-500 h-10 m-2">
        <TopNavbar />
      </div>
      <div className="border border-red-500 h-screen m-2 flex gap-2">
        <div
          className={`${
            status == true ? "md:block" : "md:hidden"
          } border border-red-500 w-72 hidden md:block`}
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
