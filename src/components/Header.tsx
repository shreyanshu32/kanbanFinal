import { useEffect } from "react";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import useTaskStore from "../data/store";
const Header = () => {
  const { darkMode, setDarkMode } = useTaskStore();
  const toggleDarkMode = () => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };
  useEffect(() => {
    toggleDarkMode();
  }, [darkMode]);
  return (
    <header className="w-full bg-white p-2 dark:bg-[#181B20] dark:text-white">
      <section className="max-w-[1250px] mx-auto flex items-center justify-between">
        <h1>Kanban</h1>
        <button
          tabIndex={0}
          title="darkModeButton"
          type="button"
          className="hover:bg-gray-100 active:bg-gray-200 dark:active:bg-gray-600 dark:hover:bg-gray-700 h-[35px] w-[35px] grid place-content-center rounded-full"
          onClick={() => setDarkMode()}
        >
          {darkMode ? <BsFillMoonFill /> : <BsSun />}
        </button>
      </section>
    </header>
  );
};

export default Header;
