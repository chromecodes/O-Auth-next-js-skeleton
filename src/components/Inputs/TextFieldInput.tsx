"use client";

import * as React from "react";
import { validationCheck } from "../../helper/validationCheck";

export interface ITextFieldInputProps {
  label?: string;
  value?: string;
  updateValue: (value: string) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid?: boolean;
  isRequired?: boolean;
}

export default function TextFieldInput(props: ITextFieldInputProps) {
  const [isValid, setIsValid] = React.useState(false);
  const [isEmpty, setIsEmpty] = React.useState(false);
  const [value, setValue] = React.useState(props.value as string);

  return (
    <>
      <label htmlFor="text">{props.label}</label>
      <input
        type="text"
        id="text"
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
            if (validationCheck(value, "text")) {
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
