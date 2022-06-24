import React, { useState } from "react";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";

export default function Particulars() {
  const { isLoading } = useJsApiLoader({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

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

    if (name === "" || age === "" || sex === "" || address === "") {
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
    }
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

      <Autocomplete>
        <input
          type="text"
          name="address"
          className="PartInp"
          placeholder="Enter Your Address"
          value={showData.address}
          onChange={DataInp}
        />
      </Autocomplete>

      <input
        type="text"
        name="Destination"
        className="PartInp"
        placeholder="Enter your Travel Destination"
      />

      <input type="text" name="From" className="PartInp" placeholder="From" />

      <input type="text" name="To" className="PartInp" placeholder="To" />

      <button className="btn btn-primary btn-block mt-4" onClick={PostData}>
        Submit
      </button>
    </div>
  );
}
