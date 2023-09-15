import useTaskStore from "@/data/store";
import formatDate from "@/utils/formatDate";
import { useEffect, useRef } from "react";
import Button from "./Button";

interface Props {
  setTaskState: (value: boolean) => void;
  status: string;
}

const TaskForm = ({ setTaskState, status }: Props) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);
  const date = formatDate;

  const handleEscKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") setTaskState(false);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  });

  const addTask = useTaskStore((store) => store.addTask);

  const handleSubmit = () => {
    if (titleRef.current && descRef.current) {
      if (
        titleRef.current.value.length > 2 &&
        descRef.current.value.length > 5
      ) {
        const newTask = {
          id: Date.now(),
          title: titleRef.current.value,
          description: descRef.current.value,
          state: status,
          date: date,
        };
        addTask(newTask);
        setTaskState(false);
      }
    }
  };
  return (
    <div
      onClick={() => setTaskState(false)}
      className="absolute top-0 left-0 h-screen w-screen bg-[#381717b9] dark:bg-[#484848b6] grid place-content-center z-50"
    >
      <div
        className="p-4 px-8 rounded-sm bg-white dark:bg-gray-600 shadow-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="pb-1 text-lg font-[500] mb-1 dark:text-white">{status}</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="flex flex-col gap-1.5 pb-2 "
        >
          <input
            placeholder="Task title... (at least 3 characters)"
            type="text"
            autoFocus
            required
            ref={titleRef}
          />
          <input
            placeholder="Task description... (at least 6 characters)"
            type="text"
            required
            ref={descRef}
          />
          <Button type="submit" title="submitButton" className="py-2">
            Create
          </Button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
