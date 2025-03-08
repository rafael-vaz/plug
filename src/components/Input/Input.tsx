import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import Label from "../Label/Label";
import styles from "./Input.module.css";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  callback?: () => void;
  isRequired?: boolean;
  register: UseFormRegisterReturn;
}

const Input = ({ label, id, isRequired, register, ...props }: IInputProps) => {
  return (
    <div>
      {label && id && <Label id={id} text={label} />}
      <input
        {...props}
        {...register}
        className={styles.input}
        required={isRequired}
      />
    </div>
  );
};

export default Input;
