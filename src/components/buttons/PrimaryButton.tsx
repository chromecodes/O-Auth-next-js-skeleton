import * as React from "react";

export interface IPrimaryButtonProps {
  label: string;
  onClick: () => void;
}

export default function PrimaryButton(props: IPrimaryButtonProps) {
  return (
    <div className="primary-button" onClick={() => props.onClick()}>
      <span>{props.label}</span>
    </div>
  );
}
