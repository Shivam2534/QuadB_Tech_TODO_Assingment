import {
  FaTasks,
  FaStar,
  FaCalendarAlt,
  FaClipboardList,
  FaPlus,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LogoutUser } from "../../Store/authSlice";
import { BiLogOut } from "react-icons/bi";
import { BiLogIn } from "react-icons/bi";

const SideNavbar = () => {
  const TaskList = useSelector((state) => state.auth.TaskList);
  const authStatus = useSelector((state) => state.auth.isUserLoggedIn); // False
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const LoggedInUserData = JSON.parse(localStorage.getItem("UserCradentials"));

  function DeleteUserSession() {
    localStorage.setItem("UserCradentials", null);
    dispatch(LogoutUser(false));
    navigate("/login");
  }

  return (
    <div className="w-64 h-full bg-green-50 dark:bg-[#2C2C2C] p-4 border">
      <div className="">
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="rounded-full w-20 h-20"
          />
          <h2 className="text-center text-lg mt-2 dark:text-white">
            Hey,{" "}
            {LoggedInUserData != null ? LoggedInUserData.Username : "Buddy"}
          </h2>
        </div>

        <div className="mt-8 ">
          <ul className="space-y-2">
            <Link to={"/allitems"}>
              <li className=" dark:text-white flex items-center p-2 bg-green-200 dark:bg-[#232323] hover:bg-green-300 rounded-md">
                <FaTasks className="mr-2 " />
                <span className="">All Tasks</span>
              </li>
            </Link>
            <Link to={"/"}>
              <li className=" dark:text-white flex items-center p-2 bg-green-200 dark:bg-[#232323] hover:bg-green-300 rounded-md">
                <FaCalendarAlt className="mr-2 " />
                <span className="">Today</span>
              </li>
            </Link>
            <Link to={"/important"}>
              <li className="dark:text-white flex items-center p-2 bg-green-200 dark:bg-[#232323] hover:bg-green-300 rounded-md">
                <FaStar className="mr-2 " />
                <span className="">Important</span>
              </li>
            </Link>
            <li className="dark:text-white flex items-center p-2 bg-green-200 dark:bg-[#232323] hover:bg-green-300 rounded-md">
              <FaClipboardList className="mr-2 " />
              <span className="">Planned</span>
            </li>
            <li className=" dark:text-white flex items-center p-2 bg-green-200 dark:bg-[#232323] hover:bg-green-300 rounded-md">
              <FaTasks className="mr-2 " />
              <span className="">Assigned to me</span>
            </li>
            {!authStatus && (
              <Link to={"/login"} className="dark:text-white">
                <li className="flex items-center p-2 bg-green-200 dark:bg-[#232323] hover:bg-green-300 rounded-md">
                  <BiLogIn className="mr-2 " />
                  <span className="">Login</span>
                </li>
              </Link>
            )}

            {authStatus && (
              <li className="dark:text-white flex items-center p-2 bg-green-200 dark:bg-[#232323] hover:bg-green-300 rounded-md">
                <BiLogOut className="mr-2 " />
                <span onClick={DeleteUserSession} className="">
                  Logout
                </span>
              </li>
            )}
          </ul>
        </div>

        {/* Add List Button */}
        <div className="mt-8">
          <button className="flex items-center w-full p-2 bg-white text-green-700 border rounded-md hover:bg-green-100">
            <FaPlus className="mr-2" />
            <span className="dark:text-white">Add list</span>
          </button>
        </div>

        {/* Task Summary */}
        <div className="mt-8 bg-white p-4 rounded-md">
          <h3 className="text-lg mb-2">Today Tasks</h3>
          <div className="text-center">
            <div className="text-4xl mb-4">{TaskList.length}</div>
            {/* Replace with a donut chart component */}
            <div className="w-20 h-20 mx-auto bg-green-300 rounded-full relative">
              <div className="w-10 h-10 bg-white rounded-full absolute top-5 left-5"></div>
            </div>
            <div className="mt-4">
              <span className="block text-sm">Pending</span>
              <span className="block text-sm">Done</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
