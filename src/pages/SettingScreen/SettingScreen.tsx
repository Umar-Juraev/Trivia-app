import { FC, useState } from "react";
import { AmountIcon, DifficultyIcon } from "../../assets/svg";
import { Button, Input, Select, Wrapper } from "components";
import { Label, Welcome } from "./_components";
import { useInput, useLocalStorage } from "hooks";
import { difficulty as difficultyData } from "constants/difficulty";
import { useNavigate } from "react-router-dom";
import { navigateSlice } from "store/slices/changeRoute";
import { useAppDispatch, useAppSelector } from "store/hooks";

import classes from "./SettingScreen.module.scss";

type Props = {};

const SettingScreen: FC<Props> = () => {
  const { path } = useAppSelector((state) => state.changeRoute);
  const [difficulty, setDifficulty] = useState<string>("");
  const [required, setRequired] = useState<boolean>(false);
  const navigate = useNavigate();
  const [, setFilters] = useLocalStorage("filters");
  const [, setPath] = useLocalStorage("path");
  const dispatch = useAppDispatch();
  const register = useInput();

  const handleChange = (e: string) => {
    setDifficulty(e);
  };

  const handleSubmit = () => {
    if (difficulty && register) {
      setFilters({ difficulty, amount: register.value });
      dispatch(navigateSlice({ path: "/quizes", navigate,setPath }));
      setRequired(false);
    } else {
      setRequired(true);
    }
  };

  return (
    <Wrapper>
      <div className={` ${classes.wrapper} container`}>
        <Welcome />
        <Select
          label={<Label text="Difficulty" icon={<DifficultyIcon />} />}
          options={difficultyData}
          onChange={handleChange}
          required={required}
        />
        <Input
          {...register}
          type="number"
          label={<Label text="Amount" icon={<AmountIcon />} />}
          required={required}
        />
        <Button onSubmit={handleSubmit} text="True" type="primary" />
      </div>
    </Wrapper>
  );
};

export default SettingScreen;
