import { FC, useEffect, useState } from "react";
import { Indicator, Question, Title } from "./_components";
import { Button, Spinner, Wrapper } from "components";

import { useQuizQuery } from "store/endpoints/quiz";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { useNavigate } from "react-router-dom";

import classes from "./QuizScreen.module.scss";
import { setCorrectAnswersSlice, setScoreSlice } from "store/slices/quiz";

type Props = {};
const QuizScreen: FC<Props> = () => {
  const { filters} = useAppSelector((state) => state.filters);
  const { data  , isLoading } = useQuizQuery(filters);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [options, setOptions] = useState<Array<string>>([]);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data?.results.length) {
      const question = data?.results[questionIndex];
      let answers = [...question.incorrect_answers, question.correct_answer];
      setOptions(answers);
    }
  }, [data, questionIndex]);

  const handleClickAnswer = (e: string) => {
    const question = data?.results[questionIndex];
    if (e === question?.correct_answer) {
      dispatch(setScoreSlice());
      dispatch(setCorrectAnswersSlice({ ...question, isCorrect: true, id: questionIndex }));
    } else {
      dispatch(setCorrectAnswersSlice({ ...question, isCorrect: false, id: questionIndex }));
    }
    if (data && questionIndex + 1 < data?.results?.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate("/end", { replace: true });
    }
  };

console.log(data);

  // for showing loading screen also error screen we we can use HOC,
  if (isLoading) return <Spinner />;
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
          {options
            .map((item, id) => ({
              id,
              item,
              textBtn: id == 0 ? "True" : "False",
              typeBtn: id == 0 ? "secondary" : "gosht",
            }))
            .map(({ id, item, textBtn, typeBtn }) => {
              return (
                <Button
                  onSubmit={() => handleClickAnswer(item)}
                  key={id}
                  text={textBtn}
                  type={typeBtn}
                />
              );
            })}
        </div>
      </div>
    </Wrapper>
  );
};

export default QuizScreen;