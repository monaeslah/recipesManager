import { PropsWithChildren } from "react";

interface InputFieldProps {
  className?: string;
  label?: string;
  iconBefore?: string;
  iconAfter?: string;
}

export const InputFieldContainer = (
  props: PropsWithChildren<InputFieldProps>
) => {
  return (
    <div className="inputContainer">
      {props.label && <p>{props.label}</p>}
      <div className={props.className}>
        {props.iconBefore && <img src={props.iconBefore} alt="Input icon" />}
        {props.children}
        {props.iconAfter && <img src={props.iconAfter} alt="Input icon" />}
      </div>
    </div>
  );
};
