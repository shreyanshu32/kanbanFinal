import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  handleClick?: () => void;
}
const Button = ({ children, handleClick }: Props) => {
  return (
    <button
      onClick={handleClick}
      className={classNames(
        "text-sm px-2 p-0.5 border border-gray-400 rounded-sm bg-green-500 text-white"
        // {
        //   "bg-gray-400": state === "Planned",
        //   "bg-blue-400": state === "Progress",
        //   "bg-green-400": state === "Completed",
        // }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
