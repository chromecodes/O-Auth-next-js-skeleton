"use client";
import PrimaryActionButton from "@/components/buttons/PrimaryActionButton";
import EmailInput from "@/components/Inputs/EmailInput";
import PasswordInput from "@/components/Inputs/PasswordInput";
import { errorHandler } from "@/helper/errorHandler";
import { successHandler } from "@/helper/successHandler";
import { useLanguageStore } from "@/store/store";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";

type Props = {};

export default function ResetPassword() {
  const lang = useLanguageStore((state) => state.language);
  const router = useRouter();

  const [data, setData] = React.useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [dataIsValid, setDataIsValid] = React.useState({
    newPassword: false,
    confirmPassword: false,
  });

  const [resetBtn, setResetBtn] = React.useState(0);

  const updatePassword = async () => {
    if (dataIsValid.newPassword && dataIsValid.confirmPassword) {
      try {
        const res = await axios.post("/api/auth/resetPassword", data);
        successHandler(res, lang);
        router.push("/auth/signin");
      } catch (error: any) {
        setResetBtn((p) => p + 1);
        errorHandler(error, lang);
      }
    } else {
      setResetBtn((p) => p + 1);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="forgot-password">
        <div className="sec-cnt">
          <h1>Company Logo</h1>
          <div className="container">
            <div className="heading">
              <h1>{lang.update_password}</h1>
            </div>
            <PasswordInput
              reset={resetBtn}
              label={lang.new_password}
              value={data.newPassword}
              updateValue={(value) => setData({ ...data, newPassword: value })}
              isRequired={true}
              isValid={dataIsValid.newPassword}
              updateIsValid={(value) =>
                setDataIsValid((p) => ({ ...p, password: value }))
              }
            />
            <PasswordInput
              reset={resetBtn}
              label={lang.confirm_password}
              value={data.confirmPassword}
              updateValue={(value) =>
                setData({ ...data, confirmPassword: value })
              }
              isRequired={true}
              isValid={dataIsValid.confirmPassword}
              updateIsValid={(value) =>
                setDataIsValid((p) => ({ ...p, password: value }))
              }
            />

            <div className="btn-cnt">
              {/* <div className="link">
                <Link className="link" href="/auth/signin">
                  {lang.back_to_signin}
                </Link>
              </div> */}
              <PrimaryActionButton
                label="confirm"
                action={updatePassword}
                resetBtn={resetBtn}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
