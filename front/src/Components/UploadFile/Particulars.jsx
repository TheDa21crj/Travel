import React, { useState } from "react";

export default function Particulars() {
  const [showData, setData] = useState({
    name: "",
    age: "",
    sex: "",
    address: "",
  });

  const DataInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...showData, [name]: value });
    console.log(showData);
  };

  const PostData = async () => {
    const { name, age, sex, address } = showData;

    let data = await fetch(
      "https://travel-511c1-default-rtdb.firebaseio.com/data.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          age,
          sex,
          address,
        }),
      }
    );

    setData({
      ...showData,
      name: "",
      age: "",
      sex: "",
      address: "",
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

      <input
        type="text"
        name="address"
        className="PartInp"
        placeholder="From"
      />

      <input type="text" name="address" className="PartInp" placeholder="To" />

      <button className="btn btn-primary btn-block mt-4" onClick={PostData}>
        Submit
      </button>
    </div>
  );
}
