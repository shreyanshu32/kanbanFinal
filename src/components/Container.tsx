import { useMemo, useState } from "react";
import useTaskStore from "../data/store";
import Button from "./Button";
import Task from "./Task";
import TaskForm from "./TaskForm";
import classNames from "classnames";
import formatDate from "../utils/formatDate";
type Props = {
  state: string;
};
const Container = ({ state }: Props) => {
  const [isDropping, setIsDropping] = useState(false);
  const [addTaskWindowState, setAddTaskWindowState] = useState(false);
  const tasks = useTaskStore((store) => store.tasks);
  const filteredTasks = useMemo(
    () => tasks.filter((task) => task.state === state),
    [tasks, state]
  );
  const setDraggedTask = useTaskStore((store) => store.setDraggedTask);
  const draggedTask = useTaskStore((store) => store.draggedTask);
  const moveTask = useTaskStore((store) => store.moveTask);
  const date = formatDate;

  return (
    <section
      className="bg-white dark:bg-gray-200 w-[305px] h-fit p-2 rounded-sm shadow-md"
      onDragOver={(e) => {
        e.preventDefault();
        setIsDropping(true);
      }}
      onDragLeave={() => setIsDropping(false)}
      onDrop={() => {
        setIsDropping(false);
        const title = tasks.filter((task) => task.id == draggedTask)[0].title;
        const description = tasks.filter((task) => task.id == draggedTask)[0]
          .description;
        moveTask(draggedTask, title, description, state, date);
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
          <p className="py-2 text-sm pl-1">No tasks.</p>
        )}
        {filteredTasks.map((task) => (
          <Task
            key={task.id}
            title={task.title}
            description={task.description}
            id={task.id}
            state={task.state}
            date={task.date}
          />
        ))}
      </section>

      {addTaskWindowState && (
        <TaskForm
          status={state}
          setTaskState={(value) => setAddTaskWindowState(value)}
        />
      )}
    </section>
  );
};

export default Container;
