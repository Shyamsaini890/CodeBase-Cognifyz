import React from "react";
import { Link } from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";
import { AiOutlineCloudUpload } from "react-icons/ai";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/Dashboard" className="dash-btn">
        <BiSolidDashboard />
        Dashboard
      </Link>
      <Link to="/Upload" className="upload-btn">
        <AiOutlineCloudUpload />
        Upload
      </Link>
    </div>
  );
};

export default Sidebar;
