import { FC } from "react";
import { Button, Wrapper } from "components";
import { Indicator, Question } from "./_components";
import { CloseIcon } from "assets/svg";

import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "hooks";
import { QuizDTO } from "typesDTO/quiz";

import classes from "./FinalScreen.module.scss";

type Props = {};


const FinalScreen: FC<Props> = () => {
  const [correctAnswers] = useLocalStorage("correctAnswers");
  const navigate = useNavigate();
  const handlefinish = () => {
    navigate("/settings", { replace: true });
    localStorage.clear();
  };

  return (
    <Wrapper>
      <div className={`${classes.wrapper} container`}>
        <span onClick={handlefinish}>
          <CloseIcon className={classes.icon} />
        </span>
        <Indicator correctAnswers={correctAnswers} />
        <div className={classes.questionBox}>
          {correctAnswers.map(({ id, isCorrect, question }:QuizDTO) => (
            <Question key={id} isCorrect={isCorrect} question={question} />
          ))}
        </div>
        <Button onSubmit={handlefinish} text="True" type="primary" />
      </div>
    </Wrapper>
  );
};

export default FinalScreen;
