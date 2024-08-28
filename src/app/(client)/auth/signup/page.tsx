"use client";

import EmailInput from "@/components/Inputs/EmailInput";
import PasswordInput from "@/components/Inputs/PasswordInput";
import TextFieldInput from "@/components/Inputs/TextFieldInput";
import { useLanguageStore } from "@/store/store";
import * as React from "react";

export interface IsignUpProps {}

export default function SignUp(props: IsignUpProps) {
  const [data, setData] = React.useState({});
  const [dataIsValid, setDataIsValid] = React.useState(false);
  const lang = useLanguageStore((state) => state.language);

  console.log({ lang });

  return (
    <div>
      <h1>Sign Up</h1>

      <TextFieldInput
        label={lang.username}
        updateValue={(value) => setData({ ...data, username: value })}
        isRequired={true}
      />

      <EmailInput
        label={lang.email}
        updateValue={(value) => setData({ ...data, email: value })}
        isRequired={true}
      />

      <PasswordInput
        label={lang.password}
        updateValue={(value) => setData({ ...data, password: value })}
        isRequired={true}
      />
    </div>
  );
}
