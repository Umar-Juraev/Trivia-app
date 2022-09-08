import { FC } from "react";
import { Button, Wrapper } from "components";
import { Indicator, Question } from "./_components";
import { CloseIcon } from "assets/svg";

import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "hooks";
import { QuizDTO } from "typesDTO/quiz";
import { navigateSlice } from "store/slices/changeRoute";
import { useAppDispatch } from "store/hooks";

import classes from "./FinalScreen.module.scss";

type Props = {};

const FinalScreen: FC<Props> = () => {
  const [correctAnswers] = useLocalStorage("correctAnswers");
  const [, setPath] = useLocalStorage("path");
  const dispatch = useAppDispatch();


  const navigate = useNavigate();
  const handlefinish = () => {
    dispatch(navigateSlice({path:"/settings",navigate,setPath}));
    localStorage.removeItem("filters");
    localStorage.removeItem("correctAnswers");
  };

  return (
    <Wrapper>
      <div className={`${classes.wrapper} container`}>
        <span onClick={handlefinish}>
          <CloseIcon className={classes.icon} />
        </span>
        <Indicator correctAnswers={correctAnswers} />
        <div className={classes.questionBox}>
          {correctAnswers.map(({ id, isCorrect, question }: QuizDTO) => (
            <Question key={id} isCorrect={isCorrect} question={question} />
          ))}
        </div>
        <Button onSubmit={handlefinish} text="True" type="primary" />
      </div>
    </Wrapper>
  );
};

export default FinalScreen;
