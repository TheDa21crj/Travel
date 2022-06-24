import React, { useState } from "react";
import User from "./../Components/User";
import Auto from "./../Components/Auto";

export default function Home() {
  const { showUser, setUser } = useState(false);

  return (
    <div>
      <div>
        <div onClick={setUser(true)}>Filled by the User</div>
        <div onClick={setUser(false)}>
          Extract automatically from the document
        </div>
      </div>
      <div>{showUser ? <User /> : <Auto />}</div>
    </div>
  );
}
