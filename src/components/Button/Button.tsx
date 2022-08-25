import { FC } from "react";
import classes from "./Button.module.scss";

// type TypeBtn = "primary" | "secondary" | "gosht";

type Props = {
  text: string;
  type:  string;
  onSubmit?: () => void;
};

const Button: FC<Props> = ({ text, type, onSubmit }) => {
  return (
    <button
      onClick={onSubmit}
      className={
        (type === "primary" && classes.primary) ||
        (type === "secondary" && classes.secondary) ||
        (type === "gosht" && classes.gosht)
      }
    >
      {text}
    </button>
  );
};

export default Button;
