"use client";
import * as React from "react";

export interface IprofileProps {}

export default function profile(props: IprofileProps) {
  return (
    <div>
      <h1>profile</h1>
      <div className="header">
        <div className="profile">
          <div className="profile-img"></div>
          <div className="profile-info">
            <div className="profile-name">name</div>
            <div className="profile-email">email</div>
          </div>
        </div>
      </div>
    </div>
  );
}
