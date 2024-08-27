import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UpdateTaskList } from "../../Store/authSlice.js";
import { FaStar } from "react-icons/fa";
import star from "../../../public/star.png";
import { Delete } from "@mui/icons-material";
import whiteStar from "../../../public/whiteStar.png";

const Alltask = () => {
  const [IdToEdit, setIdToEdit] = useState(null);
  const [changeButton, setChangeButton] = useState("Edit");
  const [newEditedContent, setNewEditedContent] = useState("");
  const TaskList = useSelector((state) => state.auth.TaskList);
  const dispatch = useDispatch();

  function handleEditSubmit(id) {
    const UpdatedTaskList = TaskList.map((task) => {
      if (task.id === id) {
        return { ...task, content: newEditedContent };
      }
      return task;
    });
    dispatch(UpdateTaskList(UpdatedTaskList));
    setChangeButton("Edit");
    setIdToEdit(null); // Reset after edit
    setNewEditedContent(""); // Clear the edit field
  }

  function handleCheckBoxChange(e, id) {
    const UpdatedTaskList = TaskList.map((task) => {
      if (task.id === id) {
        return { ...task, completed: e.target.checked };
      }
      return task;
    });
    dispatch(UpdateTaskList(UpdatedTaskList));
  }

  function HandlePriorityOfTask(id) {
    const UpdatedTaskList = TaskList.map((task) => {
      if (task.id === id) {
        if (task.priority == "high") {
          return { ...task, priority: "low" };
        } else {
          return { ...task, priority: "high" };
        }
      }
      return task;
    });
    dispatch(UpdateTaskList(UpdatedTaskList));
  }

  function HandleDeleteRequest(id) {
    const UpdatedTaskList = TaskList.filter((task) => task.id !== id);
    dispatch(UpdateTaskList(UpdatedTaskList));
  }

  useEffect(() => {
    if (IdToEdit !== null) {
      setChangeButton("");
      console.log("Rerandering triggered");
    }
  }, [IdToEdit, TaskList]); // Ensure newEditedContent is set when IdToEdit changes

  return (
    <div className="dark:bg-[#232323] dark:text-white flex flex-col justify-between items-center border-b border-gray-300 sm:p-4 gap-4 bg-green-50 rounded-md shadow-lg">
      <div className="w-full">
        {TaskList.map((task) =>
          !task.completed ? (
            <div
              key={task.id}
              className="dark:bg-[#232323] dark:text-white flex items-center justify-between w-full border border-green-300 dark:border-slate-100 rounded-lg p-2 mb-2 bg-white shadow-sm"
            >
              <div className="dark:text-white flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={(e) => handleCheckBoxChange(e, task.id)}
                  className="dark:text-white form-checkbox h-3 w-3 sm:h-5 sm:w-5 accent-[#F0FDF4]"
                />
                {task.id === IdToEdit ? (
                  <input
                    type="text"
                    value={newEditedContent}
                    onChange={(e) => setNewEditedContent(e.target.value)}
                    className="border border-green-300 rounded-lg p-1 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                    autoFocus
                  />
                ) : (
                  <p className="text-gray-700 dark:text-white">
                    {task.content}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-4 dark:text-white">
                <div className={`${IdToEdit != null ? "hidden" : "block"}`}>
                  {task.priority == "high" ? (
                    <div onClick={() => HandlePriorityOfTask(task.id)}>
                      <FaStar className=" text-yellow-300" />
                    </div>
                  ) : (
                    <div
                      className=" h-4 w-4  dark:text-white"
                      onClick={() => HandlePriorityOfTask(task.id)}
                    >
                      <img src={star} alt="" className="dark:hidden block" />
                      <img
                        src={whiteStar}
                        alt=""
                        className="dark:block hidden"
                      />
                    </div>
                  )}
                </div>
                {changeButton === "Edit" ? (
                  <button
                    onClick={() => {
                      setIdToEdit(task.id);
                      setNewEditedContent(task.content);
                    }}
                    className="text-green-600 hover:text-green-800 dark:text-white"
                  >
                    Edit
                  </button>
                ) : IdToEdit === task.id ? (
                  <button
                    onClick={() => handleEditSubmit(task.id)}
                    className="text-green-600 hover:text-green-800 dark:text-white"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => setNewEditedContent(task.content)}
                    className="text-green-600 hover:text-green-800 dark:text-white"
                  >
                    Edit
                  </button>
                )}

                <div onClick={() => HandleDeleteRequest(task.id)}>
                  <Delete />
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>

      <div className="w-full mt-4 dark:text-white">
        <p className="text-gray-600 font-semibold mb-3 dark:text-white">
          Completed
        </p>
        {TaskList.map((task) =>
          task.completed ? (
            <div
              key={task.id}
              className=" dark:text-white dark:bg-[#232323] flex items-center justify-between w-full border border-green-300 rounded-lg p-2 mb-2 bg-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-3 ">
                <input
                  type="checkbox"
                  checked={task.completed}
                  readOnly
                  onChange={(e) => handleCheckBoxChange(e, task.id)}
                  className="form-checkbox h-5 w-5 accent-[#c1e0ca]"
                />
                <p className="text-gray-700 dark:text-white">{task.content}</p>
              </div>
              <div className=" flex items-center gap-3">
                <div className={`${IdToEdit != null ? "hidden" : "block"}`}>
                  {task.priority == "high" ? (
                    <div onClick={() => HandlePriorityOfTask(task.id)}>
                      <FaStar className=" text-yellow-300" />
                    </div>
                  ) : (
                    <div
                      className=" h-4 w-4 "
                      onClick={() => HandlePriorityOfTask(task.id)}
                    >
                      <img src={star} alt="" className="dark:hidden block" />
                      <img
                        src={whiteStar}
                        alt=""
                        className="dark:block hidden"
                      />
                    </div>
                  )}
                </div>
                <div onClick={() => HandleDeleteRequest(task.id)}>
                  <Delete />
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Alltask;
