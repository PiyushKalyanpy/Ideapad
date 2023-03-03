import { Checkbox, Spacer } from "@nextui-org/react";
import Status from "./Status";

const TodoItem = (props) => {
  const { title, description, dueDate, priority, status, completed } =
    props.todo;
  return (
    <div className="flex flex-row justify-between p-4 items-center bg-white  border  rounded-3xl ">
      {/* checkbox, title and description */}
      <div className="flex flex-row items-center">
        <Checkbox value={true}/>
        <Spacer y={5}/>
        {/* div with title and description */}
        <div className="flex flex-col ">
          <h4>{title}</h4>
          <h6 className="font-normal text-slate-700" >{description}</h6>
          
        </div>

      </div>

      <Status status={status} />

      {/* div with status */}
    </div>
  );
};

export default TodoItem;
