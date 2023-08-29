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
        "text-sm px-2 p-0.5 border border-gray-400 rounded-sm hover:bg-blue-400 active:bg-blue-500 bg-blue-500 text-white"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
