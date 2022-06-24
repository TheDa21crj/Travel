import React, { useState } from "react";
import "./Css/User.css";

export default function User() {
  const [showData, setData] = useState({
    name: "",
    age: "",
    sex: "",
    address: "",
  });

  const DataInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...showUser, [name]: value });
  };

  return (
    <div>
      <div className="InpPDiv">
        <input
          type="text"
          name="name"
          id=""
          placeholder="Enter Your Name"
          className="InpField"
          value={showData.name}
        />
        <input
          type="text"
          name="age"
          id=""
          placeholder="Enter your Age"
          className="InpField"
          value={showData.age}
        />
        <input
          type="text"
          name="sex"
          id=""
          placeholder="Enter your Sex"
          className="InpField"
          value={showData.sex}
        />
        <input
          type="text"
          name="address"
          id=""
          placeholder="Enter your Address"
          className="InpField"
          value={showData.address}
        />
        <button className="UserSubmit">Submit</button>
      </div>
    </div>
  );
}
