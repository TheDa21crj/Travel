import React, { useState } from "react";

export default function Particulars() {
  const [showData, setData] = useState({
    name: "",
    age: "",
    sex: "",
    address: "",
    From: "",
    To: "",
  });

  const DataInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...showData, [name]: value });
    console.log(showData);
  };

  const PostData = async () => {
    console.log(showData);

    setData({
      ...showData,
      name: "",
      age: "",
      sex: "",
      address: "",
      From: "",
      To: "",
    });
  };
  return (
    <div>
      <p className="Particulars">Particulars</p>
      <input
        type="text"
        name="name"
        className="PartInp"
        placeholder="Enter Your Name"
        value={showData.name}
        onChange={DataInp}
      />
      <input
        type="text"
        name="age"
        className="PartInp"
        placeholder="Enter Your Age"
        value={showData.age}
        onChange={DataInp}
      />
      <input
        type="text"
        name="sex"
        className="PartInp"
        placeholder="Enter Your Sex"
        value={showData.sex}
        onChange={DataInp}
      />
      <input
        type="text"
        name="address"
        className="PartInp"
        placeholder="Enter Your Address"
        value={showData.address}
        onChange={DataInp}
      />

      <input
        type="text"
        name="address"
        className="PartInp"
        placeholder="Enter your Travel Destination"
      />

      <button className="btn btn-primary btn-block mt-4" onClick={PostData}>
        Submit
      </button>
    </div>
  );
}
