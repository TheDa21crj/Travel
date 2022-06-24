import React from "react";
import "./Css/User.css";

export default function User() {
  return (
    <div>
      <div className="InpPDiv">
        <input
          type="text"
          name="name"
          id=""
          placeholder="Enter Your Name"
          className="InpField"
        />
        <input
          type="text"
          name="age"
          id=""
          placeholder="Enter your Age"
          className="InpField"
        />
        <input
          type="text"
          name="sex"
          id=""
          placeholder="Enter your Sex"
          className="InpField"
        />
        <input
          type="text"
          name="address"
          id=""
          placeholder="Enter your Address"
          className="InpField"
        />
      </div>
    </div>
  );
}
