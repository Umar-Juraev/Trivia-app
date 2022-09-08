import { FC } from "react";
import classes from "./Input.module.scss";

type Props = {
  label: React.ReactNode;
  required?: boolean;
  type: string;
};

const Input: FC<Props> = ({ label, type, required, ...props }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapper__label}>
        {label}
        {required && <span className="requiredField">Required</span>}
      </div>
      <input {...props} type={type} min="0" max="50" />
    </div>
  );
};

export default Input;
