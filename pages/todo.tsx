import { Input, Button, Spacer } from "@nextui-org/react";
import TodoItem from "../components/TodoItem";

const Todo = () => {
  return (
    <div className="flex flex-col w-screen h-screen bg-slate-100 ">
      <div className="flex flex-col w-1/2 mx-auto mt-20 bg-white p-8 rounded-3xl shadow-xl shadow-slate-300/20">
        {/* div with Input and Button */}
        <div className="flex w-full mx-auto">
          <Input width="100%" />
          <Spacer x={1} />
          <Button>Add </Button>
        </div>
        {/* div with todo items */}
        <Spacer y={2} />
        <div className="flex flex-col space-y-12">
          {todoArray &&
            todoArray.map((todo) => {
              return <TodoItem todo={todo} />;
            })}
        </div>
      </div>
    </div>
  );
};

const todoArray = [
  {
    id: 1,
    title: "Complete Math Homework",
    description: "Finish the math problems assigned by your teacher.",
    dueDate: "2023-03-10",
    priority: "High",
    status: {
      status_id: 3,
      status_title: "Done",
    },
    completed: false,
  },
  {
    id: 2,
    title: "Schedule Doctor's Appointment",
    description: "Book an appointment with your family doctor for a check-up.",
    dueDate: "2023-03-15",
    priority: "Medium",
    status: {
      status_id: 2,
      status_title: "Not Started",
    },
    completed: false,
  },
  {
    id: 3,
    title: "Clean the House",
    description: "Tidy up the living room, kitchen, and bedrooms.",
    dueDate: "2023-03-12",
    priority: "Low",
    status: {
      status_id: 3,
      status_title: "Done",
    },
    completed: false,
  },
  {
    id: 4,
    title: "Attend Team Meeting",
    description: "Join the weekly team meeting to discuss project progress.",
    dueDate: "2023-03-08",
    priority: "High",
    status: {
      status_id: 2,
      status_title: "In Progress",
    },
    completed: false,
  },
  {
    id: 5,
    title: "Send Birthday Card",
    description:
      "Send a birthday card to your friend who lives in another city.",
    dueDate: "2023-03-20",
    priority: "Medium",
    status: {
      status_id: 1,
      status_title: "Done",
    },
    completed: false,
  },
];

export default Todo;
