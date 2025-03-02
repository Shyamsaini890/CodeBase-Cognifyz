import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="first-footer">
          <h1>{"{CodeBase}"}</h1>
          <p>
            With iMeet's robust collaboration features, you can easily connect
            with fellow developers, share code snippets, and brainstorm ideas in
            real-time.
          </p>
        </div>
        <div className="sec-footer">
          <h3>Quick Links</h3>
          <a href="#" style={{ textDecoration: "none" }}>
            Home
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            About
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Contact us
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Terms & Condition
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Privicy & policy
          </a>
        </div>
        <div className="third-footer">
          <h3>Contact</h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <BsFillTelephoneFill style={{ marginRight: "20px" }} />
            +91 0000000000
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <BiLogoGmail style={{ marginRight: "20px" }} />
            Shyamsundersaini71@gmail.com
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <MdLocationOn style={{ marginRight: "20px" }} />
            Amity University Rajasthan, Jaipur
          </div>
          <div
            style={{ marginTop: "10px", marginLeft: "50px", fontSize: "25px" }}
          >
            <AiOutlineInstagram style={{ marginRight: "10px" }} />
            <CiFacebook style={{ marginRight: "10px" }} />
            <AiOutlineYoutube style={{ marginRight: "10px" }} />
          </div>
        </div>
      </div>
      <div className="footer-end">copyright @ 2023 iMeet</div>
    </div>
  );
};

export default Footer;
