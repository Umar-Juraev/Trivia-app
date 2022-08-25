import { FC, useState } from "react";
import { AmountIcon, DifficultyIcon } from "../../assets/svg";
import { Button, Input, Select, Wrapper } from "components";
import { Label, Welcome } from "./_components";
import { useInput } from "hooks";

import { difficulty as difficultyData } from "constants/difficulty";
import { setFiltersSlice } from "store/slices/quiz";

import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/hooks";

import classes from "./SettingScreen.module.scss";

type Props = {};

const SettingScreen: FC<Props> = () => {
  const [difficulty, setDifficulty] = useState<string>("");
  const [required, setRequired] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const register = useInput();

  const handleChange = (e: string) => {
    setDifficulty(e);
  };

  const handleSubmit = () => {
    if (difficulty && register) {
      localStorage.setItem("filters",JSON.stringify({ difficulty, amount: register.value }));
      dispatch(setFiltersSlice(localStorage.getItem("filters")));
      navigate("/quizes", { replace: true });
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
          label={<Label text="Amount" icon={<AmountIcon />} />}
          required={required}
        />
        <Button onSubmit={handleSubmit} text="True" type="primary" />
      </div>
    </Wrapper>
  );
};

export default SettingScreen;
