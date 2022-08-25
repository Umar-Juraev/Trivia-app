import React, { FC, useState } from "react";
import classes from "./Select.module.scss";

import { SelectOptionTypes } from "../../utils/types";
import { ArrowIcon } from "assets/svg";

type Props = {
  className?: string;
  label: React.ReactNode;
  options: SelectOptionTypes[];
  onChange: (e: string) => void;
  required?: boolean;
};

const Select: FC<Props> = ({ label, options, required, onChange }) => {
  const [select, setSelect] = useState<boolean>(false);
  const [value, setValue] = useState<string>("difficulty level");

  const handleSetSelect = (e: string) => {
    setSelect((prev) => !prev);
    onChange(e);
    setValue(e);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapper__label}>
        {label}
        {required && <span className="requiredField">Required</span>}
      </div>
      <div
        className={classes.wrapper__select}
        onClick={() => setSelect((prev) => !prev)}
      >
        <p className={classes.wrapper__select__initialState}>{value}</p>
        <span
          className={`${classes.wrapper__select__icon} ${
            select && classes.open
          }`}
        >
          <ArrowIcon />
        </span>
      </div>
      <div
        className={`${classes.wrapper__optionBox} ${select && classes.open}`}
      >
        {options.map(({ id, name }) => (
          <p
            onClick={() => handleSetSelect(id)}
            className={classes.option}
            key={id}
            defaultValue={value}
          >
            {name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Select;
