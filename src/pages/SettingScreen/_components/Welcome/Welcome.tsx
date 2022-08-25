import { FC } from "react";
import img from "../../../../assets/images/trivia.png";
import classes from "./Welcome.module.scss";

const Welcome: FC = () => {
  return (
    <div className={classes.wrapper}>
      <p className={classes.wrapper__title}>Welcome to the</p>
      <div className={classes.wrapper__img}>
        <img src={img} alt="trivia" />
      </div>
    </div>
  );
};

export default Welcome;
