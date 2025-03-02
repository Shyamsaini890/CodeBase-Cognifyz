import React from "react";
import "./Home.css";
import img1 from "./images/Screenshot (4).png";
import img2 from "./images/Screenshot (5).png";
import { FaAngleDown } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home-left">
          <h1
            style={{
              font: "Reem Kufi Fun",
              fontSize: "60px",
              marginTop: "80px",
            }}
          >
            iMeet CodeBase
          </h1>
          <p style={{ fontSize: "17.5px", marginTop: "10px" }}>
            Unlock the potential of seamless collaboration and efficient coding
            with iMeet, the leading codebase platform. Designed by developers
            for developers, iMeet is here to revolutionize the way you work,
            collaborate, and create.
          </p>
          <div style={{ marginTop: "40px" }}>
            <button
              style={{
                width: "130px",
                height: "44px",
                border: "none",
                background: "#635DFF",
                borderRadius: "20px",
                marginLeft: "50px",
                color: "white",
              }}
            >
              Join us
            </button>
            <button
              style={{
                width: "130px",
                height: "44px",
                border: "1px solid #635DFF",
                background: "white",
                borderRadius: "20px",
                marginLeft: "50px",
              }}
            >
              Upload Code
            </button>
          </div>
        </div>
        <div className="home-right">
          <img
            src={img1}
            alt=""
            style={{ width: "300px", marginTop: "150px", marginLeft: "20px" }}
          />
        </div>
      </div>
      <div className="home">
        <div className="home-right">
          <img
            src={img2}
            alt=""
            style={{ width: "400px", marginTop: "150px", marginLeft: "200px" }}
          />
        </div>
        <div className="home-left">
          <h3
            style={{
              font: "Reem Kufi Fun",
              // fontSize: "60px",
              marginTop: "80px",
              marginLeft: "11%",
            }}
          >
            Welcome to iMeet for MERN
          </h3>
          <p style={{ fontSize: "20px", marginTop: "10px", fontWeight: "500" }}>
            Unlock the potential of seamless collaboration and efficient coding
            with iMeet, the leading codebase platform. Designed by developers
            for developers, iMeet is here to revolutionize the way you work,
            collaborate, and create.
          </p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="home-box">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
              paddingLeft: "45px",
              paddingRight: "45px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              borderRadius: "10px",
              marginBottom: "25px",
            }}
          >
            <h5>Why Mern ? It is Good Technology</h5>
            <FaAngleDown />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
              paddingLeft: "45px",
              paddingRight: "45px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              borderRadius: "10px",
              marginBottom: "25px",
            }}
          >
            <h5>Here My source code is secure or not ? </h5>
            <FaAngleDown />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
              paddingLeft: "45px",
              paddingRight: "45px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              borderRadius: "10px",
              marginBottom: "25px",
            }}
          >
            <h5>Why Mern Stack is Famous ?</h5>
            <FaAngleDown />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
              paddingLeft: "45px",
              paddingRight: "45px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              borderRadius: "10px",
              marginBottom: "25px",
            }}
          >
            <h5>What is iMeet ? </h5>
            <FaAngleDown />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
              paddingLeft: "45px",
              paddingRight: "45px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              borderRadius: "10px",
              marginBottom: "25px",
            }}
          >
            <p>
              Join us at iMeet and unlock a world of opportunities! Engage with
              industry experts, collaborate with like-minded peers, and gain
              hands-on experience in cutting-edge technologies. Our platform
              fosters a community of growth, where students can expand their
              knowledge, sharpen their skills, and explore their passions.
            </p>
            {/* <FaAngleDown /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
