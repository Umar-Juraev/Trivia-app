import { MutatingDots } from "react-loader-spinner";
import classes from "./Spinner.module.scss";

const Spinner = () => {
  return (
      <MutatingDots
        height="100"
        width="100"
        color="#FFA57A"
        secondaryColor="#FF6265"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass={classes.wrapper}
        visible={true}
      />
  );
};

export default Spinner;
