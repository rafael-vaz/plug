import styles from "./title.module.css";

interface ITitleProps {
  text: string;
  orientation?: "left" | "center";
}

const Title = ({ text, orientation = "left" }: ITitleProps) => {
  return (
    <h1 className={styles.title} data-orientation={orientation}>
      {text}
    </h1>
  );
};

export default Title;
