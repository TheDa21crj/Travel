import React from "react";
import FileUpload from "./UploadFile/FileUpload";
import "./Css/Auto.css";

export default function Auto() {
  return (
    <div>
      <p>Auto</p>

      <div className="FileUploadDiv">
        <div className="FileUploadPDiv">
          <FileUpload />
        </div>
      </div>
    </div>
  );
}
