import { HTMLAttributes } from "react";
import styles from "./Button.module.css";
type TProps = HTMLAttributes<HTMLButtonElement> & {
  variety?: "primary" | "secondary";
  isDisabled?: boolean;
};

export const Button = ({
  children,
  variety = "primary",
  isDisabled = false,
  className,
  style,
  ...props
}: TProps) => {
  return (
    <button
      style={style}
      className={`${styles.btn} ${
        variety === "secondary" && styles.secondaryBtn
      } ${className}`}
      disabled={isDisabled}
      {...props}>
      {children}
    </button>
  );
};
