import React, { useState } from "react";
import "./Css/User.css";

export default function User() {
  const [showData, setData] = useState({
    name: "",
    age: "",
    sex: "",
    address: "",
    travel: "",
  });

  const DataInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...showData, [name]: value });
  };

  const PostData = async () => {
    console.log(showData);

    setData({ ...showData, name: "", age: "", sex: "", address: "" });
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
          onChange={DataInp}
        />
        <input
          type="text"
          name="age"
          id=""
          placeholder="Enter your Age"
          className="InpField"
          value={showData.age}
          onChange={DataInp}
        />
        <input
          type="text"
          name="sex"
          id=""
          placeholder="Enter your Sex"
          className="InpField"
          value={showData.sex}
          onChange={DataInp}
        />
        <input
          type="text"
          name="address"
          id=""
          placeholder="Enter your Address"
          className="InpField"
          value={showData.address}
          onChange={DataInp}
        />
        <input
          type="text"
          name="travel"
          id=""
          placeholder="Enter your Travel Destination"
          className="InpField"
          value={showData.travel}
          onChange={DataInp}
        />
        <p>Duration of Travel</p>
        <div>
          <input
            type="text"
            name="DurationStart"
            id=""
            placeholder="From"
            className="InpField"
            value={showData.From}
            onChange={DataInp}
          />
          <input
            type="text"
            name="DurationStart"
            id=""
            placeholder="To"
            className="InpField"
            value={showData.From}
            onChange={DataInp}
          />
        </div>

        <button className="UserSubmit" onClick={PostData}>
          Submit
        </button>
      </div>
    </div>
  );
}
