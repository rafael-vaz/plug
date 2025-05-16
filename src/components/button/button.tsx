import styles from "./button.module.css";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  styleType?: "flat" | "gradient";
}

const Button = ({ text, styleType = "flat", ...props }: IButtonProps) => {
  return (
    <button className={styles.button} data-type={styleType} {...props}>
      {text}
    </button>
  );
};

export default Button;
