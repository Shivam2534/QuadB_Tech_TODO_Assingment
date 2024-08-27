import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import star from "../../../public/star.png";

function ImportantTask() {
  // Get the TaskList from the Redux store
  const TaskList = useSelector((state) => state.auth.TaskList);

  // Filter tasks with high priority
  const highPriorityTasks = TaskList.filter((task) => task.priority === "high");

  return (
    <div className="dark:bg-[#232323] flex flex-col p-4 border  bg-white shadow-lg rounded-md">
      <h2 className="text-xl font-bold mb-4 text-red-600">
        High Priority Tasks
      </h2>
      {highPriorityTasks.length > 0 ? (
        highPriorityTasks.map((task) => (
          <div
            key={task.id}
            className="flex justify-between items-center border-b border-gray-200 py-2"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={task.completed}
                readOnly
                className="cursor-not-allowed accent-[#a7e6ba]"
              />
              <p
                className={
                  task.completed
                    ? "text-gray-500 dark:text-gray-300"
                    : "text-black dark:text-white"
                }
              >
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

export default ImportantTask;
