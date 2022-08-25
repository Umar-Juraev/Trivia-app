import { FC } from "react";
import { QuizDTO } from "typesDTO/quiz";
import classes from "./Question.module.scss";

type Props = {
  currentQuestionData: QuizDTO | undefined;
};

const Question: FC<Props> = ({ currentQuestionData }) => {
  return (
    <div className={classes.wrapper}>
      <p> {currentQuestionData?.question.replace(/&quot;|&#039;/g, '"')}</p>
    </div>
  );
};

export default Question;
