import React from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import { CiSearch } from "react-icons/ci";
import Ellipse4 from "./images/Ellipse 4.png";
import Ellipse5 from "./images/Ellipse 5.png";
import Ellipse6 from "./images/Ellipse 6.png";
import { BiSolidDownload } from "react-icons/bi";
const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="dash-section">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className="search-bar">
            <CiSearch style={{ marginLeft: "10px", marginRight: "10px" }} />
            <input
              type="search"
              placeholder="Search Code .."
              style={{ border: "none" }}
            />
          </div>
          <div className="pythan-dash">
            <img src={Ellipse4} className="images" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h5> Face Machine using Python </h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit....</p>
            </div>
            <BiSolidDownload
              style={{
                width: "100px",
                height: "50px",
                // border: "2px solid black",
                marginTop: "35px",
                marginRight: "5px",
                borderRadius: "10px",
                backgroundColor: "#635DFF",
                color: "white",
              }}
            />
          </div>
          <div className="node-dash">
            <img src={Ellipse5} className="images" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h5> ML/AI Project Steps</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit....</p>
            </div>
            <BiSolidDownload
              style={{
                width: "100px",
                height: "50px",
                // border: "2px solid black",
                marginTop: "35px",
                marginRight: "5px",
                borderRadius: "10px",
                backgroundColor: "#635DFF",
                color: "white",
              }}
            />
          </div>
          <div className="flutter-dash">
            <img src={Ellipse6} className="images" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h5> Flutter Rating App </h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit....</p>
            </div>
            <BiSolidDownload
              style={{
                width: "100px",
                height: "50px",
                // border: "2px solid black",
                marginTop: "35px",
                marginRight: "5px",
                borderRadius: "10px",
                backgroundColor: "#635DFF",
                color: "white",
              }}
            />
          </div>
          <button
            style={{
              backgroundColor: "#FF0000",
              border: "none",
              borderRadius: "20px",
              width: "100px",
              height: "40px",
              color: "white",
              marginTop: "50px",
            }}
          >
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
