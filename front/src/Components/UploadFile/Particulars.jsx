import React, { useState } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

export default function Particulars() {
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
    const { name, age, sex, address, travel, From, To } = showData;

    if (
      name !== "" ||
      age !== "" ||
      sex !== "" ||
      address !== "" ||
      travel !== "" ||
      From !== "" ||
      To !== ""
    ) {
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

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();

      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        console.log("📍 Coordinates: ", { lat, lng });
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

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

      <div ref={ref}>
        <input
          value={value}
          onChange={() => {
            handleInput();
            DataInp();
          }}
          name="address"
          disabled={!ready}
          className="PartInp"
          placeholder="Enter Your Address"
        />
        {status === "OK" && <ul>{renderSuggestions()}</ul>}
      </div>

      <input
        type="text"
        name="Destination"
        className="PartInp"
        placeholder="Enter your Travel Destination"
      />

      <div className="DurationofTravel">
        <input type="text" name="From" className="PartInp" placeholder="From" />

        <input type="text" name="To" className="PartInp" placeholder="To" />
      </div>

      <button className="btn btn-primary btn-block mt-4" onClick={PostData}>
        Submit
      </button>
    </div>
  );
}
