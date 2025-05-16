import styles from "./label.module.css";

interface ILabelProps {
  id: string;
  text: string;
}

const Label = ({ id, text }: ILabelProps) => {
  return (
    <label className={styles.label} htmlFor={id}>
      {text}
    </label>
  );
};

export default Label;
