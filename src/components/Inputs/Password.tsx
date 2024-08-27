"use client";

import * as React from "react";
import { validationCheck } from "../../helper/validationCheck";

export interface IEmailInputProps {
  label?: string;
  value?: string;
  updateValue: (value: string) => void;
  isValid?: boolean;
  isRequired?: boolean;
}

export default function EmailInput(props: IEmailInputProps) {
  const [isValid, setIsValid] = React.useState(false);
  const [isEmpty, setIsEmpty] = React.useState(false);
  const [value, setValue] = React.useState(props.value as string);

  return (
    <>
      <label htmlFor="password">{props.label}</label>
      <input
        type="password"
        id="password"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => {
          if (props.isRequired) {
            if (value === "") {
              setIsEmpty(true);
            } else {
              setIsEmpty(false);
            }
          }
          if (props.isValid) {
            if (validationCheck(value, "password")) {
              props.updateValue(value);
              setIsValid(false);
            } else {
              setIsValid(true);
            }
          } else {
            setIsValid(true);
          }
        }}
      />
    </>
  );
}
