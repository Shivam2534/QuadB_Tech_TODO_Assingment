import { FaBell, FaSyncAlt, FaCalendarAlt } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTask } from "../../Store/authSlice";
const AddTodo = () => {
  const [InputValue, setInputValue] = useState("");
  const [checkboxvalue, setcheckboxvalue] = useState(false);
  const dispatch = useDispatch();

  function handleCheck(e) {
    setcheckboxvalue(e.target.checked);
  }

  function AddTodoToTheList(e) {
    e.preventDefault();

    if (InputValue.length > 0 && InputValue != null && InputValue != "") {
      const newTask = {
        id: Date.now(),
        content: InputValue,
        completed: false,
        priority: "low", // low, mid
        type_of_work: checkboxvalue, // checked -> outdoor
      };

      setInputValue("");
      dispatch(AddTask(newTask));

      console.log("Task Added successfully");
    }
  }
  return (
    <form
      onSubmit={AddTodoToTheList}
      className="flex flex-col items-center justify-between bg-green-50  p-2 md:p-4 rounded-md"
    >
      <div className="flex-grow mx-4 w-full mt-4">
        <input
          type="text"
          placeholder="Add A Task"
          value={InputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
        />
      </div>

      <div className="flex justify-between w-full mt-7">
        <div className="flex items-center space-x-2 md:space-x-4">
          <FaBell className="cursor-not-allowed text-xl text-gray-700 hidden sm:block" />
          <FaCalendarAlt className=" cursor-not-allowed text-xl text-gray-700" />
          <FaSyncAlt
            className="text-xl text-gray-700 hover:text-gray-500"
            onClick={() => setInputValue("")}
          />
          <div className="flex items-center justify-between gap-1 mt-1">
            <input
              type="checkbox"
              name="checkbox"
              id=""
              className="size-4"
              onChange={handleCheck}
            />
            <span className="text-green-700">outdoor</span>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="bg-green-200 text-green-700 px-4 py-2 rounded-md hover:bg-green-300"
          >
            ADD TASK
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
