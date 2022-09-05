import {  useState } from "react";
import { ChangeInputType } from "utils/types";


const useInput = (): ChangeInputType => {
  const [value, setValue] = useState();

  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  return {
    value: value ? value : "",
    onChange,
  };
};

export default useInput;
