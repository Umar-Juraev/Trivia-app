import { StarIcon } from "assets/svg";
import { FC } from "react";
import { QuizDTO } from "typesDTO/quiz";
import classes from "./Indicator.module.scss";

type Props = {
  correctAnswers: QuizDTO[];
};

const Indicator: FC<Props> = ({ correctAnswers }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.indicatorTitleWrapper}>
        <div className={classes.avatar}></div>
        <p>
          You scored
          <span>
            {correctAnswers.filter(({ isCorrect }) => isCorrect).length}
          </span>
          <span>/{correctAnswers.length}</span>
        </p>
      </div>
      <div className={classes.indicatorBox}>
        {correctAnswers.map(({ id, isCorrect }) => {
          if (isCorrect) {
            return <StarIcon key={id} color={"#FF7C7C"} />;
          }
        })}
        {correctAnswers.map(({ id, isCorrect }) => {
          if (!isCorrect) {
            return <StarIcon key={id} color={"#969CDC"} />;
          }
        })}
      </div>
    </div>
  );
};

export default Indicator;
