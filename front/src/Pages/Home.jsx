import React, { useState } from "react";
import User from "./../Components/User";
import Auto from "./../Components/Auto";
import "./Css/Home.css";

export default function Home() {
  const [showDetails, setDetails] = useState(false);

  return (
    <div>
      <div className="containerMDIV">
        <div
          onClick={() => setDetails(true)}
          className={showDetails ? "showDetailsT" : "false"}
        >
          Filled by the User
        </div>
        <div
          onClick={() => setDetails(false)}
          className={showDetails ? "false" : "showDetailsF"}
        >
          Extract automatically from the document
        </div>
      </div>
      <div>{showDetails ? <User /> : <Auto />}</div>
    </div>
  );
}
