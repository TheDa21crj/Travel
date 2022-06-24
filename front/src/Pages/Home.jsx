import React, { useState } from "react";

export default function Home() {
  const { showUser, setUser } = useState(false);
  const { showAuto, setAuto } = useState(true);

  return (
    <div>
      <div>
        <div>Filled by the User</div>
        <div>Extract automatically from the document</div>
      </div>
    </div>
  );
}
