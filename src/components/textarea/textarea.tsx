import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import Label from "../label/label";
import styles from "./textarea.module.css";

interface ITextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  callback?: () => void;
  register: UseFormRegisterReturn;
}

const Textarea = ({ id, label, register, ...props }: ITextareaProps) => {
  return (
    <div>
      {label && id && <Label id={id} text={label} />}
      <textarea className={styles.textarea} id={id} {...register} {...props} />
    </div>
  );
};

export default Textarea;
