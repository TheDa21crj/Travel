import React from "react";
import FileUpload from "./UploadFile/FileUpload";
import "./Css/Auto.css";
import Particulars from "./UploadFile/Particulars";

export default function Auto() {
  return (
    <div>
      <div className="FileUploadDiv">
        <div className="FileUploadPDiv">
          <FileUpload />
          <br />
          <Particulars />
        </div>
      </div>
    </div>
  );
}
