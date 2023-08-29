import { useEffect, useRef } from "react";
import useTaskStore from "../data/store";
import formatDate from "../utils/formatDate";
import Button from "./Button";

interface Props {
  setTaskState: (value: boolean) => void;
  status: string;
}

const TaskForm = ({ setTaskState, status }: Props) => {
  const handleEscKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") setTaskState(false);
  };
  useEffect(() => {
    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  });
  const addTask = useTaskStore((store) => store.addTask);
  const inputRef = useRef<HTMLInputElement>(null);
  const date = formatDate;
  const handleSubmit = () => {
    if (inputRef.current) {
      addTask(Date.now(), inputRef.current.value, status, date);
      setTaskState(false);
    }
  };
  return (
    <section
      onClick={() => setTaskState(false)}
      className="absolute top-0 left-0 h-screen w-screen bg-[#381717b9] dark:bg-[#484848b6] grid place-content-center z-50"
    >
      <div
        className="p-2 px-4 rounded-sm bg-white dark:bg-gray-600 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="pb-1 font-[500]">{status}</h1>
        <div className="flex gap-1 pb-2">
          <input
            className="p-1 w-[270px] text-sm outline-none border-2 border-blue-400 rounded-sm text-black"
            placeholder="Add task"
            type="text"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit();
            }}
            autoFocus
            ref={inputRef}
          />
          <Button handleClick={() => handleSubmit()}>Add Task</Button>
        </div>
      </div>
    </section>
  );
};

export default TaskForm;
