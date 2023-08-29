import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import TaskType from "../entities/TaskType";

interface TaskStore {
  tasks: TaskType[];
  darkMode: boolean;
  setDarkMode: () => void;
  addTask: (
    id: number,
    tile: string,
    description: string,
    state: string,
    date: string
  ) => void;
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
        addTask: (id, title, description, state, date) =>
          set((store) => ({
            tasks: [...store.tasks, { id, title, description, state, date }],
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
