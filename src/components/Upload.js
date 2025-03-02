import React from "react";
import Sidebar from "./Sidebar";
import "./Upload.css";
import { BiCloudUpload } from "react-icons/bi";
const Upload = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="upload">
        <div
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "100%",
            // border: "2px solid black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 0px 8px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div
            style={{
              width: "240px",
              height: "240px",
              borderRadius: "100%",
              // border: "2px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 0px 8px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <BiCloudUpload style={{ paddingTop: "0", fontSize: "150px" }} />
              <a>Upload</a>
              <a>Max 20MB</a>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Upload;
