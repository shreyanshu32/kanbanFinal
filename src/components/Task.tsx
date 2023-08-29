import classNames from "classnames";
import useTaskStore from "../data/store";
import { BsThreeDotsVertical } from "react-icons/bs";

export interface TaskType {
  id: number;
  title: string;
  state?: string;
}
const Task = ({ id }: TaskType) => {
  const deleteTask = useTaskStore((store) => store.deleteTask);
  const task = useTaskStore((store) =>
    store.tasks.find((task) => task.id === id)
  );
  const setDraggedTask = useTaskStore((store) => store.setDraggedTask);

  return (
    <article
      className={classNames(
        "flex justify-between gap-2 p-2 py-2.5 rounded-sm cursor-move mb-1 text-white",
        {
          "bg-green-500": task?.state === "Completed",
          "bg-blue-400": task?.state === "In Progress",
          "bg-orange-400": task?.state === "In Review",
          "bg-gray-400": task?.state === "Planned",
        }
      )}
      draggable
      onDragStart={() => setDraggedTask(id)}
    >
      <p className="break-all">{task?.title}</p>
      <button onClick={() => deleteTask(id)}>
        <BsThreeDotsVertical className="text-xl" />
      </button>
      {/* <div className="status">{task?.state}</div> */}
    </article>
  );
};

export default Task;
