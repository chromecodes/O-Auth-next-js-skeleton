"use client";

import OauthButton from "@/components/buttons/OauthButton";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import ErroTextCnt from "@/components/Inputs/components/ErrorTextCnt";
import EmailInput from "@/components/Inputs/EmailInput";
import PasswordInput from "@/components/Inputs/PasswordInput";
import TextFieldInput from "@/components/Inputs/TextFieldInput";
import { useLanguageStore } from "@/store/store";
import Link from "next/link";
import * as React from "react";

export interface IsignUpProps {}

export default function SignUp(props: IsignUpProps) {
  const [data, setData] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  const [dataIsValid, setDataIsValid] = React.useState({
    username: false,
    email: false,
    password: false,
  });
  const lang = useLanguageStore((state) => state.language);

  const signUp = () => {};

  return (
    <div className="auth-wrapper">
      <div className="img-cnt"></div>
      <div className="cred-form">
        <h1>Sign Up</h1>
        <div className="inputs-wrapper">
          <TextFieldInput
            label={lang.username}
            value={data.username}
            updateValue={(value) => setData({ ...data, username: value })}
            isRequired={true}
            isValid={dataIsValid.username}
            updateIsValid={(value) =>
              setDataIsValid((p) => ({ ...p, username: value }))
            }
          />

          <EmailInput
            value={data.email}
            label={lang.email}
            updateValue={(value) => setData((p) => ({ ...p, email: value }))}
            isRequired={true}
            isValid={dataIsValid.email}
            updateIsValid={(value) =>
              setDataIsValid((p) => ({ ...p, email: value }))
            }
          />

          <PasswordInput
            label={lang.password}
            value={data.password}
            updateValue={(value) => setData({ ...data, password: value })}
            isRequired={true}
            isValid={dataIsValid.password}
            updateIsValid={(value) =>
              setDataIsValid((p) => ({ ...p, password: value }))
            }
          />

          <div className="link-cnt">
            <span>{lang.already_have_an_account}</span>

            <Link className="link" href="/auth/signin">
              Login
            </Link>
          </div>

          <PrimaryButton label="sign_up" action={signUp} />
          <OauthButton label="sign_up_with_google" action={signUp} />
        </div>
      </div>
    </div>
  );
}
