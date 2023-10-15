import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface TaskType {
  id: number;
  title: string;
  description: string;
  state: string;
  date: string;
}

interface TaskStore {
  tasks: TaskType[];
  darkMode: boolean;
  setDarkMode: () => void;
  addTask: (task: TaskType) => void;
  deleteTask: (id: number) => void;
  draggedTask: number;
  setDraggedTask: (id: number) => void;
  moveTask: (
    id: number,
    title: string,
    description: string,
    state: string,
    date: string
  ) => void;
}

const useTaskStore = create<TaskStore>()(
  devtools(
    persist(
      (set) => ({
        tasks: [],
        darkMode: false,
        setDarkMode: () =>
          set((store) => ({ darkMode: store.darkMode ? false : true })),
        draggedTask: 0,
        addTask: (task) =>
          set((store) => ({
            tasks: [...store.tasks, task],
          })),
        deleteTask: (id) =>
          set((store) => ({
            tasks: store.tasks.filter((task) => task.id !== id),
          })),
        setDraggedTask: (id) => set({ draggedTask: id }),
        moveTask: (id, title, description, state, date) =>
          set((store) => ({
            tasks: store.tasks.map((task) =>
              task.id == id ? { id, title, description, state, date } : task
            ),
          })),
      }),
      { name: "tasks" }
    )
  )
);

export default useTaskStore;
