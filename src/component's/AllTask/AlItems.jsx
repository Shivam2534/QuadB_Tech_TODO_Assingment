import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import star from "../../../public/star.png";

function Alltems() {
  // Get the TaskList from the Redux store
  const TaskList = useSelector((state) => state.auth.TaskList);

  return (
    <div className="flex flex-col p-4 border  bg-white shadow-lg rounded-md">
      <h2 className="text-xl font-bold mb-4 text-green-400">
        All Tasks To Do...
      </h2>
      {TaskList.length > 0 ? (
        TaskList.map((task) => (
          <div
            key={task.id}
            className="flex justify-between items-center border-b border-gray-200 py-2"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={task.completed}
                readOnly
                className="cursor-not-allowed accent-[#baf0ca]"
              />
              <p className={task.completed ? "text-gray-500" : "text-black"}>
                {task.content}
              </p>
            </div>
            <p className="text-red-500 font-semibold">
              {task.priority == "high" ? (
                <div>
                  <FaStar className=" text-yellow-300" />
                </div>
              ) : (
                <div className=" h-4 w-4 sm:h-5 sm:w-5">
                  <img src={star} alt="" />
                </div>
              )}
            </p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No high priority tasks found.</p>
      )}
    </div>
  );
}

export default Alltems;
