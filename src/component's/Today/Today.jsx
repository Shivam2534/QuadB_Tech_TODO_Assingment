import AddTodo from "../AddTodo/AddTodo";
import Alltask from "../AllTask/Alltask";

function Today() {
  return (
    <div className=" w-full md:m-4">
      <div className="border flex flex-col gap-5 p-1">
        <div className="border h-40">
          <AddTodo />
        </div>
        <div className="border">
          <Alltask />
        </div>
      </div>
    </div>
  );
}

export default Today;
