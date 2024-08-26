import {
  FaTasks,
  FaStar,
  FaCalendarAlt,
  FaClipboardList,
  FaPlus,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const SideNavbar = () => {
  const TaskList = useSelector((state)=> state.auth.TaskList)
  return (
    <div className="w-64 h-full bg-green-50 p-4">
      {/* Profile Section */}
      <div className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="rounded-full w-20 h-20"
        />
        <h2 className="text-center text-lg mt-2">Hey, Shivam</h2>
      </div>

      {/* Navigation List */}
      <div className="mt-8">
        <ul className="space-y-2">
          <li className="flex items-center p-2 bg-green-200 rounded-md">
            <FaTasks className="mr-2" />
            <span>All Tasks</span>
          </li>
          <li className="flex items-center p-2 bg-green-300 rounded-md">
            <FaCalendarAlt className="mr-2" />
            <span>Today</span>
          </li>
          <li className="flex items-center p-2 bg-green-200 rounded-md">
            <FaStar className="mr-2" />
            <span>Important</span>
          </li>
          <li className="flex items-center p-2 bg-green-200 rounded-md">
            <FaClipboardList className="mr-2" />
            <span>Planned</span>
          </li>
          <li className="flex items-center p-2 bg-green-200 rounded-md">
            <FaTasks className="mr-2" />
            <span>Assigned to me</span>
          </li>
        </ul>
      </div>

      {/* Add List Button */}
      <div className="mt-8">
        <button className="flex items-center w-full p-2 bg-white text-green-700 border rounded-md hover:bg-green-100">
          <FaPlus className="mr-2" />
          <span>Add list</span>
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
  );
};

export default SideNavbar;
