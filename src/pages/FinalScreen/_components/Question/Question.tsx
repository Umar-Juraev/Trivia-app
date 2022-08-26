import { FalseIcon, TrueIcon } from "assets/svg";
import { FC } from "react";
import classes from "./Question.module.scss";

type Props = {
  isCorrect: boolean;
  question: string;
};

const Question: FC<Props> = ({ isCorrect, question }) => {
  
  return (
    <div className={classes.item}>
      <p>{question.replace(/&quot;|&eacute;|&#039;/g, '"')}</p>
      <span>{isCorrect ? <TrueIcon /> : <FalseIcon />}</span>
    </div>
  );
};

export default Question;
