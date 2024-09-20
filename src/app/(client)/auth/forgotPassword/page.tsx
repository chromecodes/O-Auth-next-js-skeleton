"use client";
import PrimaryActionButton from "@/components/buttons/PrimaryActionButton";
import EmailInput from "@/components/Inputs/EmailInput";
import { useLanguageStore } from "@/store/store";
import Link from "next/link";
import * as React from "react";

type Props = {};

export default function ForgotPassword() {
  const lang = useLanguageStore((state) => state.language);
  const [data, setData] = React.useState({
    email: "",
  });
  const [dataIsValid, setDataIsValid] = React.useState({
    email: false,
  });
  const [resetBtn, setResetBtn] = React.useState(0);

  return (
    <div className="auth-wrapper">
      <div className="forgot-password">
        <div className="sec-cnt">
          <h1>Company Logo</h1>
          <div className="container">
            <div className="heading">
              <h1>Reset your password</h1>
              <p>Enter the email address you used to register.</p>
            </div>
            <EmailInput
              reset={resetBtn}
              value={data.email}
              label={lang.email}
              updateValue={(value) => setData((p) => ({ ...p, email: value }))}
              isRequired={true}
              isValid={dataIsValid.email}
              updateIsValid={(value) =>
                setDataIsValid((p) => ({ ...p, email: value }))
              }
            />

            <div className="btn-cnt">
              <div className="link">
                <Link className="link" href="/auth/signin">
                  {lang.back_to_signin}
                </Link>
              </div>
              <PrimaryActionButton
                label="send"
                action={() => {}}
                resetBtn={resetBtn}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
