// react
import {
  ChangeEvent,
  CSSProperties,
  FC,
  HTMLInputTypeAttribute,
  ReactNode,
  useState,
} from "react";
// libs
import clsx from "clsx";
// styles
import styles from "./Input.module.scss";

interface InputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
  type: HTMLInputTypeAttribute;

  inputSize: "extrasmall" | "medium" | "large" | "extralarge";
  maxWidth?: CSSProperties["maxWidth"];
  label: string;
  helperText: string;
}

export const Input: FC<InputProps> = ({
  onChange,
  placeholder,
  type,
  value,
  helperText,
  label,
  inputSize = "medium",
  maxWidth = "323px",
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const onFocusedToggle = () => {
    setIsFocused(!isFocused);
  };

  return (
    <div className={styles.inputContent} style={{ maxWidth: maxWidth }}>
      {label && (
        <label
          htmlFor="input"
          className={clsx(styles.label, {
            [styles.labelSmall]:
              inputSize === "extrasmall" || inputSize === "medium",

            [styles.labelLarge]:
              inputSize === "large" || inputSize === "extralarge",
          })}
        >
          {label}
        </label>
      )}
      <div
        className={clsx(styles.inputWrapper, {
          [styles.inputWrapperExtraSmall]: inputSize === "extrasmall",
          [styles.inputWrapperMedium]: inputSize === "medium",
          [styles.inputWrapperLarge]: inputSize === "large",
          [styles.inputWrapperExtraLarge]: inputSize === "extralarge",
          [styles.inputFocused]: isFocused,
        })}
      >
        <input
          onFocus={onFocusedToggle}
          onBlur={onFocusedToggle}
          id="input"
          className={clsx(styles.input, {
            [styles.inputTextSmall]:
              inputSize === "extrasmall" || inputSize === "medium",
            [styles.inputTextLarge]:
              inputSize === "large" || inputSize === "extralarge",
          })}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          value={value}
        />
      </div>
      {helperText && (
        <div className={clsx(styles.helperText, {})}>{helperText}</div>
      )}
    </div>
  );
};
