// react
import {
  ChangeEvent,
  CSSProperties,
  FC,
  HTMLInputTypeAttribute,
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

  isDisabled?: boolean;
  isError?: boolean;
  isRequired?: boolean;
  isBorderDisabled?: boolean;
  inputSize?: "extrasmall" | "medium" | "large" | "extralarge";
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
  isDisabled = false,
  isError = false,
  isRequired = false,
  isBorderDisabled = false,
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
            [styles.labelDisabled]: isDisabled,
          })}
        >
          {label}
          {isRequired && <span className={styles.required}>*</span>}
        </label>
      )}
      <div
        className={clsx(styles.inputWrapper, {
          [styles.inputWrapperExtraSmall]: inputSize === "extrasmall",
          [styles.inputWrapperMedium]: inputSize === "medium",
          [styles.inputWrapperLarge]: inputSize === "large",
          [styles.inputWrapperExtraLarge]: inputSize === "extralarge",
          [styles.inputWrapperFocused]: isFocused && !isError,
          [styles.inputWrapperborderDisabled]: isBorderDisabled,
          [styles.inputWrapperError]: isError && !isDisabled,
          [styles.inputWrapperErrorFocused]: isError && isFocused,
          [styles.inputWrapperDisabled]: isDisabled,
        })}
      >
        <input
          onFocus={onFocusedToggle}
          onBlur={onFocusedToggle}
          disabled={isDisabled}
          id="input"
          className={clsx(styles.input, {
            [styles.inputTextSmall]:
              inputSize === "extrasmall" || inputSize === "medium",
            [styles.inputTextLarge]:
              inputSize === "large" || inputSize === "extralarge",
            [styles.inputDisabled]: isDisabled,
          })}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          value={value}
        />
      </div>
      {helperText && (
        <div
          className={clsx(styles.helperText, {
            [styles.helperTextDisabled]: isDisabled,
          })}
        >
          {helperText}
        </div>
      )}
    </div>
  );
};
