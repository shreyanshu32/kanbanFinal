import classNames from "classnames";
import useTaskStore from "../data/store";
import { AiOutlineDelete } from "react-icons/ai";
import TaskType from "../entities/TaskType";

const Task = ({ id }: TaskType) => {
  const deleteTask = useTaskStore((store) => store.deleteTask);
  const task = useTaskStore((store) =>
    store.tasks.find((task) => task.id === id)
  );
  const setDraggedTask = useTaskStore((store) => store.setDraggedTask);

  return (
    <article
      className={classNames(
        "p-2 rounded-sm cursor-move mb-1 shadow-md border",
        {
          "border-l-4 border-green-500": task?.state === "Completed",
          "border-l-4 border-blue-400": task?.state === "In Progress",
          "border-l-4 border-orange-400": task?.state === "In Review",
          "border-l-4 border-gray-400": task?.state === "Planned",
        }
      )}
      draggable
      onDragStart={() => setDraggedTask(id)}
    >
      <p className="break-words py-0.5 font-[500] text-gray-600 border-b border-gray-300">
        {task?.title.substring(0, 34)}
      </p>
      <p className="break-words py-0.5 text-gray-600">
        {task?.description.substring(0, 265)}
      </p>
      <footer className="relative border-t flex items-center justify-between border-gray-300 mt-1 text-sm pt-1">
        <p
          className={classNames({
            "text-gray-500": task?.state === "Planned",
            "text-blue-500": task?.state === "In Progress",
            "text-orange-500": task?.state === "In Review",
            "text-green-500": task?.state === "Completed",
          })}
        >
          {task?.date}
        </p>
        <button className="text-base" onClick={() => deleteTask(id)}>
          <AiOutlineDelete />
        </button>
      </footer>
    </article>
  );
};

export default Task;
