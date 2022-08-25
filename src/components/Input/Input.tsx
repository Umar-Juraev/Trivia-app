import { FC } from "react";
import classes from "./Input.module.scss";

type Props = {
  label: React.ReactNode;
  required?: boolean;
};

const Input: FC<Props> = ({ label, required, ...props }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapper__label}>
        {label}
        {required && <span className="requiredField">Required</span>}
      </div>
      <input {...props} type="number" />
    </div>
  );
};

export default Input;
