import React, { useState } from "react";

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
    </div>
  );
}
