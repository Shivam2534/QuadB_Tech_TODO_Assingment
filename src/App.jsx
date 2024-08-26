import TopNavbar from "./component's/TopNAvbar/TopNavbar";
import SideNavbar from "./component's/SideNavbar/SideNavbar.jsx";
import AddTodo from "./component's/AddTodo/AddTodo";
import Alltask from "./component's/AllTask/Alltask";
import { useSelector, useDispatch } from "react-redux";
import { UpdateTaskList } from "./Store/authSlice.js";

function App() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.auth.ToggleStatusOfSideMenuBar);
  const data = localStorage.getItem("TaskList");
  console.log(data);
  if (data !== null) {
    dispatch(UpdateTaskList(JSON.parse(data)));
  }
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
        <div className=" border-red-500 w-full md:m-4">
          <div className="border border-red-500 flex flex-col gap-5">
            <div className="border border-red-500 h-40">
              <AddTodo />
            </div>
            <div className="border border-red-500 h-screen">
              <Alltask />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
