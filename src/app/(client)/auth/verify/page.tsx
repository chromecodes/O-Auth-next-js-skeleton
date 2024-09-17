"use client";
import BigTickLoader from "@/components/Loaders/BigTickLoader";
import BigXCrossLoader from "@/components/Loaders/BigXCrossLoader";
import FullPageLoader from "@/components/Loaders/FullPageLoader";
import axios from "axios";
import * as React from "react";

export interface IverifyProps {}

export default function Verify(props: IverifyProps) {
  const [isVerfied, setIsVerfied] = React.useState(false);
  const [gotData, setGotData] = React.useState(false);

  const [errorText, setErrorText] = React.useState("");

  React.useEffect(() => {
    let verifyToken = window.location.search.split("=")[1];

    const verify = async () => {
      try {
        let res = await axios.post("/api/auth/verifyEmail", { verifyToken });
        console.log({ res });
        setGotData(true);
        if (res.status === 200) {
          setIsVerfied(true);
        } else {
        }
      } catch (error: any) {
        console.log(error);
        setGotData(true);
        setErrorText(error.response.data.message as string);
        setIsVerfied(false);
      }
    };
    verify();
  }, []);

  return (
    <div className="verify-card-cnt">
      <div className="verify-card">
        <div className="header">
          <h1>company name</h1>
        </div>
        <div className="body">
          {!gotData ? <h4>Verifing your email</h4> : <></>}
          {gotData && isVerfied ? <h4>User Successfully Verified</h4> : <></>}
          {gotData && !isVerfied ? <h4>{errorText}</h4> : <></>}
          <br />
          <br />
          <br />
          {!gotData ? <FullPageLoader /> : <></>}
          {gotData && isVerfied ? <BigTickLoader /> : <></>}
          {gotData && !isVerfied ? <BigXCrossLoader /> : <></>}
        </div>
      </div>
    </div>
  );
}
