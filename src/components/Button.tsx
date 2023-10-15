import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
  title: string;
  className?: string;
  children: ReactNode;
  handleClick?: () => void;
  type: "button" | "submit" | "reset";
}

const Button = ({ children, handleClick, className, title, type }: Props) => {
  return (
    <button
      type={type}
      title={title}
      onClick={handleClick}
      className={classNames(
        className +
          " text-sm px-2 p-0.5 border-none rounded-sm hover:bg-blue-600 active:bg-blue-700 bg-blue-700 text-white"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
