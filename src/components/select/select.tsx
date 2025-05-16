import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import Label from "../label/label";
import styles from "./select.module.css";

interface IOptionItem extends React.OptionHTMLAttributes<HTMLOptionElement> {
  value: string;
  text: string;
}
interface ISelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  initialText: string;
  options: IOptionItem[];
  register: UseFormRegisterReturn;
}

const Select = ({
  id,
  label,
  initialText,
  options,
  register,
  ...props
}: ISelectProps) => {
  return (
    <div>
      {label && id && <Label id={id} text={label} />}
      <select
        {...props}
        {...register}
        id={id}
        className={styles.select}
        defaultValue=""
      >
        <option hidden value="">
          {initialText}
        </option>
        {options.map((opt) => {
          return (
            <option key={opt.value} value={opt.value}>
              {opt.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
