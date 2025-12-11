


import styles from "./styles.module.css";

interface IProps {
    children?: React.ReactNode | React.ReactNode[];
    claassName?: string;
}

export default function Container({ children }: IProps) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}