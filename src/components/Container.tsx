import { useEffect, useMemo, useState } from "react";
import useTaskStore from "../data/store";
import Button from "./Button";
import Task from "./Task";
import TaskForm from "./TaskForm";
import classNames from "classnames";
type Props = {
  state: string;
};
const Container = ({ state }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const [isDropping, setIsDropping] = useState(false);
  const [addTaskWindowState, setAddTaskWindowState] = useState(false);
  const { tasks, addTask } = useTaskStore();
  const filteredTasks = useMemo(
    () => tasks.filter((task) => task.state === state),
    [tasks, state]
  );
  const setDraggedTask = useTaskStore((store) => store.setDraggedTask);
  const draggedTask = useTaskStore((store) => store.draggedTask);
  const moveTask = useTaskStore((store) => store.moveTask);
  const handleSubmit = () => {
    if (inputValue.length > 2) {
      addTask(Date.now(), inputValue, state);
      setInputValue("");
      setAddTaskWindowState((state) => !state);
    }
  };
  useEffect(() => {
    console.log("dropping");
  }, [isDropping]);

  return (
    <section
      className="bg-white w-[305px] h-fit p-2 rounded-sm"
      onDragOver={(e) => {
        e.preventDefault();
        setIsDropping(true);
      }}
      onDragLeave={() => setIsDropping(false)}
      onDrop={() => {
        setIsDropping(false);
        const dragged = tasks.filter((task) => task.id == draggedTask)[0].title;
        moveTask(draggedTask, dragged, state);
        setDraggedTask(0);
      }}
    >
      <header className="flex justify-between items-center border-b border-gray-400 pb-2">
        <p
          className={classNames("font-[500]", {
            "text-gray-500": state === "Planned",
            "text-blue-500": state === "In Progress",
            "text-orange-500": state === "In Review",
            "text-green-500": state === "Completed",
          })}
        >
          {state}
        </p>
        <Button handleClick={() => setAddTaskWindowState(true)}>
          Add Task
        </Button>
      </header>

      <section
        className={classNames("mt-2", {
          "outline-2 outline-dotted outline-gray-400": isDropping == true,
        })}
      >
        {!filteredTasks.length && (
          <p className="py-2 text-sm pl-1">Add your first task.</p>
        )}
        {filteredTasks.map((task) => (
          <Task key={task.id} title={task.title} id={task.id} />
        ))}
      </section>

      {addTaskWindowState && (
        <TaskForm
          status={state}
          inputValue={inputValue}
          setInputValue={(value) => setInputValue(value)}
          setTaskState={(value) => setAddTaskWindowState(value)}
          handleSubmit={() => handleSubmit()}
        />
      )}
    </section>
  );
};

export default Container;
