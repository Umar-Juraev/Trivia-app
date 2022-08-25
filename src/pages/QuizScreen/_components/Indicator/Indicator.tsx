import { FC } from "react";
import classes from "./Indicator.module.scss";

type Props = {
  length: number;
  currentQuestionIndex: number;
};

const Indicator: FC<Props> = ({ length, currentQuestionIndex }) => {
  let i = 100 / length;
  return (
    <div className={classes.wrapper}>
      <p className={classes.level}>level 1</p>

      <div className={classes.indicatorBox}>
        <div className={classes.indicatorBox__Figures}>
          <span>{currentQuestionIndex + 1}</span>/{length}
        </div>
        <div className={classes.indicatorBox__line}>
          <span style={{ width: `${i + currentQuestionIndex * i }%` }}></span>
        </div>
      </div>
    </div>
  );
};

export default Indicator;
