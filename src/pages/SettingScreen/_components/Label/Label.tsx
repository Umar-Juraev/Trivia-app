import { FC } from "react";
import classes from "./Label.module.scss";

type Props = {
  text?: string;
  icon?: React.ReactNode;
};

const Label: FC<Props> = ({ text, icon }) => {
  return (
    <div className={classes.wrapper}>
      <span className={classes.wrapper__icon}>{icon}</span>
      <p className={classes.wrapper__text}> {text}</p>
    </div>
  );
};

export default Label;
