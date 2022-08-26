import { FC } from "react";
import { Button, Wrapper } from "components";
import { Indicator, Question } from "./_components";
import { CloseIcon } from "assets/svg";

import classes from "./FinalScreen.module.scss";
import { useAppSelector } from "store/hooks";
import { useNavigate } from "react-router-dom";

type Props = {};

const FinalScreen: FC<Props> = () => {
  const { correctAnswers, score } = useAppSelector((state) => state.filters);
  const navigate = useNavigate();
  const handlefinish = () => {
    navigate("/settings", { replace: true });
    localStorage.removeItem('filters')
  };

  return (
    <Wrapper>
      <div className={`${classes.wrapper} container`}>
        <span onClick={handlefinish}>
        <CloseIcon  className={classes.icon} />
        </span>
        <Indicator score={score} correctAnswers={correctAnswers} />
        <div className={classes.questionBox}>
          {correctAnswers.map(({ id, isCorrect, question }) => (
            <Question key={id} isCorrect={isCorrect} question={question} />
          ))}
        </div>
        <Button onSubmit={handlefinish} text="True" type="primary" />
      </div>
    </Wrapper>
  );
};

export default FinalScreen;
