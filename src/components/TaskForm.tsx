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
  const submitOnEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSubmit();
  };
  const addTask = useTaskStore((store) => store.addTask);
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);
  const date = formatDate;
  const handleSubmit = () => {
    if (titleRef.current && descRef.current) {
      if (
        titleRef.current.value.length > 2 &&
        descRef.current.value.length > 5
      ) {
        addTask(
          Date.now(),
          titleRef.current.value,
          descRef.current.value,
          status,
          date
        );
        setTaskState(false);
      }
    }
  };
  return (
    <section
      onClick={() => setTaskState(false)}
      className="absolute top-0 left-0 h-screen w-screen bg-[#381717b9] dark:bg-[#484848b6] grid place-content-center z-50"
    >
      <div
        className="p-4 px-8 rounded-sm bg-white dark:bg-gray-600 shadow-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="pb-1 text-lg font-[500] dark:text-white">{status}</h1>
        <div className="flex flex-col gap-1.5 pb-2 ">
          <input
            placeholder="Task title... (at least 3 characters)"
            type="text"
            onKeyDown={(e) => submitOnEnter(e)}
            autoFocus
            ref={titleRef}
          />
          <input
            placeholder="Task description... (at least 6 characters)"
            type="text"
            ref={descRef}
            onKeyDown={(e) => submitOnEnter(e)}
          />
          <Button className="py-1.5" handleClick={() => handleSubmit()}>
            Create
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TaskForm;
