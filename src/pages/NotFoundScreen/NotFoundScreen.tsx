import { Wrapper } from "components";
import { useNavigate } from "react-router-dom";

import classes from "./NotFoundScreen.module.scss";

const NotFoundScreen = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <Wrapper light>
      <p className={classes.text}>
        This page is not Found , please <span onClick={goBack}>click</span> to
        go back
      </p>
    </Wrapper>
  );
};

export default NotFoundScreen;
