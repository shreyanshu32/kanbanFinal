import useTaskStore from "@/store";
import { useEffect } from "react";
import { BsFillMoonFill, BsSun } from "react-icons/bs";

const Header = () => {
  const darkMode = useTaskStore((s) => s.darkMode);
  const setDarkMode = useTaskStore((s) => s.setDarkMode);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <header className="w-full bg-white p-2 dark:bg-[#272c34] dark:border-b border-gray-500 dark:text-white">
      <section className="max-w-[1250px] mx-auto flex items-center justify-between">
        <h1>My Tasks</h1>
        <button
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
