"use client";

import { useLanguageStore } from "@/store/store";
import Image from "next/image";
import * as React from "react";

export interface IOauthButtonProps {
  label: string;
  action: () => void;
}

export default function OauthButton(props: IOauthButtonProps) {
  const lang = useLanguageStore((state) => state.language);

  return (
    <div className="oauth-button" onClick={() => props.action()}>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
        alt="logo"
        width={16}
        height={16}
      />
      <span>{lang[props.label]}</span>
    </div>
  );
}
