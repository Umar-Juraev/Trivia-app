import { FC } from "react";
import {
  QuizLeftBottomIcon,
  QuizLeftTopIcon,
  QuizRightBottomIcon,
  QuizRightTopIcon,
  SettingsLeftBottomIcon,
  SettingsLeftTopIcon,
  SettingsRightBottomIcon,
  SettingsRightTopIcon,
} from "../../assets/svg";
import classes from "./Wrapper.module.scss";

type Props = {
  children: React.ReactNode;
  light?: boolean
};

const Wrapper: FC<Props> = ({ children,light }) => {
  return (
    <main className={`${classes.wrapper} ${light ? classes.light : ''} ` }>
      {children}
      {light ? 
      <>
      <QuizLeftTopIcon className={`${classes.icon} ${classes.leftTop}`} />
      <QuizLeftBottomIcon className={`${classes.icon} ${classes.leftBottom}`}/>
      <QuizRightTopIcon className={`${classes.icon} ${classes.rightTop}`} />
      <QuizRightBottomIcon className={`${classes.icon} ${classes.RightBottom}`}
      />
      </>
      :
      <>
      <SettingsLeftTopIcon className={`${classes.icon} ${classes.leftTop}`} />
      <SettingsLeftBottomIcon className={`${classes.icon} ${classes.leftBottom}`}/>
      <SettingsRightTopIcon className={`${classes.icon} ${classes.rightTop}`} />
      <SettingsRightBottomIcon className={`${classes.icon} ${classes.RightBottom}`}
      />
      </>
    }
   
    </main>
  );
};

export default Wrapper;
