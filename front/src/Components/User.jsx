import React, { useState } from "react";
import "./Css/User.css";

export default function User() {
  const [showData, setData] = useState({
    name: "",
    age: "",
    sex: "",
    address: "",
    travel: "",
    From: "",
    To: "",
  });

  const DataInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...showData, [name]: value });
  };

  const PostData = async () => {
    console.log(showData);

    setData({
      ...showData,
      name: "",
      age: "",
      sex: "",
      address: "",
      travel: "",
      From: "",
      To: "",
    });
  };

  return (
    <div className="UserMdiv">
      <div className="InpPDiv">
        <input
          type="text"
          name="name"
          id=""
          placeholder="Enter Your Name"
          className="PartInp"
          value={showData.name}
          onChange={DataInp}
        />
        <input
          type="text"
          name="age"
          id=""
          placeholder="Enter your Age"
          className="PartInp"
          value={showData.age}
          onChange={DataInp}
        />
        <input
          type="text"
          name="sex"
          id=""
          placeholder="Enter your Sex"
          className="PartInp"
          value={showData.sex}
          onChange={DataInp}
        />
        <input
          type="text"
          name="address"
          id=""
          placeholder="Enter your Address"
          className="PartInp"
          value={showData.address}
          onChange={DataInp}
        />
        <input
          type="text"
          name="travel"
          id=""
          placeholder="Enter your Travel Destination"
          className="PartInp"
          value={showData.travel}
          onChange={DataInp}
        />
        <p>Duration of Travel</p>
        <div>
          <input
            type="text"
            name="From"
            id=""
            placeholder="From"
            className="PartInp"
            value={showData.From}
            onChange={DataInp}
          />
          <input
            type="text"
            name="To"
            id=""
            placeholder="To"
            className="PartInp"
            value={showData.To}
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
