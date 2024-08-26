import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UpdateTaskList } from "../../Store/authSlice.js";
import { FaStar } from "react-icons/fa";
import star from "../../../public/star.png";

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

  useEffect(() => {
    if (IdToEdit !== null) {
      setChangeButton("");
      console.log("Rerandering triggered");
    }
  }, [IdToEdit, TaskList]); // Ensure newEditedContent is set when IdToEdit changes

  return (
    <div className="flex flex-col justify-between items-center border-b border-gray-300 sm:p-4 gap-4 bg-green-50 rounded-md shadow-lg">
      <div className="w-full">
        {TaskList.map((task) =>
          !task.completed ? (
            <div
              key={task.id}
              className="flex items-center justify-between w-full border border-green-300 rounded-lg p-2 mb-2 bg-white shadow-sm"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={(e) => handleCheckBoxChange(e, task.id)}
                  className="form-checkbox h-3 w-3 sm:h-5 sm:w-5 accent-[#F0FDF4]"
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
                  <p className="text-gray-700">{task.content}</p>
                )}
              </div>
              <div className="flex items-center gap-4">
                <p className={`${IdToEdit != null ? "hidden" : "block"}`}>
                  {task.priority == "high" ? (
                    <div onClick={() => HandlePriorityOfTask(task.id)}>
                      <FaStar className=" text-yellow-300" />
                    </div>
                  ) : (
                    <div
                      className=" h-4 w-4 sm:h-5 sm:w-5"
                      onClick={() => HandlePriorityOfTask(task.id)}
                    >
                      <img src={star} alt="" />
                    </div>
                  )}
                </p>
                {changeButton === "Edit" ? (
                  <button
                    onClick={() => {
                      setIdToEdit(task.id);
                      setNewEditedContent(task.content);
                    }}
                    className="text-green-600 hover:text-green-800"
                  >
                    Edit
                  </button>
                ) : IdToEdit === task.id ? (
                  <button
                    onClick={() => handleEditSubmit(task.id)}
                    className="text-green-600 hover:text-green-800"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => setNewEditedContent(task.content)}
                    className="text-green-600 hover:text-green-800"
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
          ) : null
        )}
      </div>

      <div className="w-full mt-4">
        <p className="text-gray-600 font-semibold mb-3">Completed</p>
        {TaskList.map((task) =>
          task.completed ? (
            <div
              key={task.id}
              className="flex items-center justify-between w-full border border-green-300 rounded-lg p-2 mb-2 bg-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  readOnly
                  onChange={(e) => handleCheckBoxChange(e, task.id)}
                  className="form-checkbox h-5 w-5 accent-[#c1e0ca]"
                />
                <p className="text-gray-700">{task.content}</p>
              </div>
              <div>
                <p className={`${IdToEdit != null ? "hidden" : "block"}`}>
                  {task.priority == "high" ? (
                    <div onClick={() => HandlePriorityOfTask(task.id)}>
                      <FaStar className=" text-yellow-300" />
                    </div>
                  ) : (
                    <div
                      className=" h-4 w-4 sm:h-5 sm:w-5"
                      onClick={() => HandlePriorityOfTask(task.id)}
                    >
                      <img src={star} alt="" />
                    </div>
                  )}
                </p>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Alltask;
