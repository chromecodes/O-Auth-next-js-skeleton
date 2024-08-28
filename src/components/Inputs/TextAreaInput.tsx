"use client";

import * as React from "react";
import { validationCheck } from "../../helper/validationCheck";

export interface ITextAreaInputProps {
  label?: string;
  value?: string;
  updateValue: (value: string) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid?: boolean;
  isRequired?: boolean;
}

export default function TextAreaInput(props: ITextAreaInputProps) {
  const [isValid, setIsValid] = React.useState(false);
  const [isEmpty, setIsEmpty] = React.useState(false);
  const [value, setValue] = React.useState(props.value as string);

  return (
    <>
      <label htmlFor="text">{props.label}</label>
      <textarea
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
