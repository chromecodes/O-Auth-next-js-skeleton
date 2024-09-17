"use client";

import * as React from "react";
import { validationCheck } from "../../helper/validationCheck";
import { useLanguageStore } from "@/store/store";
import ErroTextCnt from "./components/ErrorTextCnt";

export interface IPasswordInputProps {
  label: string;
  value: string;
  updateValue: (value: string) => void;
  updateIsValid: (value: boolean) => void;
  isValid: boolean;
  isRequired: boolean;
}

export default function PasswordInput(props: IPasswordInputProps) {
  const [isValid, setIsValid] = React.useState(false);
  const [isEmpty, setIsEmpty] = React.useState(false);
  const [value, setValue] = React.useState(props.value as string);
  const lang = useLanguageStore((state) => state.language);

  const blurCheck = () => {
    if (validationCheck(value, "password")) {
      props.updateValue(value);
      props.updateIsValid(true);
      setIsValid(false);
    } else {
      props.updateIsValid(false);
      setIsValid(true);
    }
  };
  return (
    <>
      <div className="input-cnt">
        <label htmlFor="password">{props.label}</label>
        <input
          type="password"
          id="password"
          className={isValid || isEmpty ? "error-input" : ""}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => {
            if (props.isRequired) {
              if (value === "") {
                setIsEmpty(true);
              } else {
                setIsEmpty(false);
                blurCheck();
              }
            } else {
              blurCheck();
            }
          }}
        />{" "}
        <ErroTextCnt isValid={isValid} isEmpty={isEmpty} />
      </div>
    </>
  );
}
