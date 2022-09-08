import { FC, useEffect, useState } from "react";
import { Indicator, Question, Title } from "./_components";
import { Button, Spinner, Wrapper } from "components";

import { useQuizQuery } from "store/endpoints/quiz";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "hooks";
import { navigateSlice } from "store/slices/changeRoute";
import { useAppDispatch } from "store/hooks";

import classes from "./QuizScreen.module.scss";

type Props = {};
const QuizScreen: FC<Props> = () => {
  const [filters] = useLocalStorage("filters");
  const dispatch = useAppDispatch();

  // instead of Redux state, I used localStorage for data manipulation,
  // because if we refresh the page we will lose all data

  // for missing the first item i used comma

  const [, setCorrectAnswers] = useLocalStorage("correctAnswers");
  const [, setPath] = useLocalStorage("path");
  const { data, isLoading, isFetching, refetch } = useQuizQuery(filters);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const navigate = useNavigate();

  const handleClickAnswer = (e: any) => {
    const question = data?.results[questionIndex];
    if (
      e.target.textContent.toUpperCase() ===
      question?.correct_answer.toUpperCase()
    ) {
      setCorrectAnswers({ ...question, isCorrect: true, id: questionIndex });
    } else {
      setCorrectAnswers({ ...question, isCorrect: false, id: questionIndex });
    }
    if (data && questionIndex + 1 < data?.results?.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      dispatch(navigateSlice({ path: "/end", navigate,setPath }));
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  

  // for showing loading screen also error screen we we can use HOC,
  if (isLoading || isFetching) return <Spinner />;
  return (
    <Wrapper light>
      <div className={` ${classes.wrapper} container`}>
        <Title />
        <Indicator
          currentQuestionIndex={questionIndex}
          length={data !== undefined ? data?.results.length : 0}
        />
        <Question currentQuestionData={data?.results[questionIndex]} />
        <div className={classes.btnBox}>
          <Button
            onSubmit={handleClickAnswer}
            text={"True"}
            type={"secondary"}
          />
          <Button onSubmit={handleClickAnswer} text={"False"} type={"gosht"} />
        </div>
      </div>
    </Wrapper>
  );
};

export default QuizScreen;
