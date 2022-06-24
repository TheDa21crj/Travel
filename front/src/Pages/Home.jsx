import React, { useState } from "react";
import User from "./../Components/User";
import Auto from "./../Components/Auto";

export default function Home() {
  const { showUser, setUser } = useState(false);
  const { showAuto, setAuto } = useState(true);

  return (
    <div>
      <div>
        <div onClick={setUser(!showUser)}>Filled by the User</div>
        <div onClick={setAuto(!showAuto)}>
          Extract automatically from the document
        </div>
      </div>
      <div>{showUser ? <User /> : <Auto />}</div>
    </div>
  );
}
