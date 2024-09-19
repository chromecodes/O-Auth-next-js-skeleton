"use client";
import * as React from "react";

export interface IprofileProps {}

export default function profile(props: IprofileProps) {
  return (
    <div>
      <p>profile</p>
      <div className="header">
        <div className="profile">
          <div className="profile-img"></div>
        </div>
      </div>
    </div>
  );
}
