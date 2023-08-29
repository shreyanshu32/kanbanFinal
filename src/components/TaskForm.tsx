import { useEffect } from "react";
import Button from "./Button";

interface Props {
  inputValue: string;
  setInputValue: (value: string) => void;
  setTaskState: (value: boolean) => void;
  handleSubmit: () => void;
  status: string;
}

const TaskForm = ({
  inputValue,
  setTaskState,
  handleSubmit,
  setInputValue,
  status,
}: Props) => {
  const handleEscKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") setTaskState(false);
  };
  useEffect(() => {
    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  });
  return (
    <section
      onClick={() => setTaskState(false)}
      className="absolute top-0 left-0 h-screen w-screen bg-[#ff92929c] grid place-content-center"
    >
      <div
        className="p-2 px-4 rounded-sm bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="pb-1 font-[500]">{status}</h1>
        <div className="flex gap-1 pb-2">
          <input
            className="p-1 w-[270px] text-sm outline-none border-2 border-blue-400 rounded-sm"
            placeholder="Add task"
            type="text"
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit();
            }}
            autoFocus
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button handleClick={() => handleSubmit()}>Add Task</Button>
        </div>
      </div>
    </section>
  );
};

export default TaskForm;
