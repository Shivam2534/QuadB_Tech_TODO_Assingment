import AddTodo from "../AddTodo/AddTodo";
import Alltask from "../AllTask/Alltask";

function Today() {
  return (
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
  );
}

export default Today;
