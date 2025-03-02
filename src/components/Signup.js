import React from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import "./Signup.css";
import { createUserWithEmailAndPassword as signup } from "firebase/auth";
import { auth } from "../firebaseconfig";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, changeemail] = useState("");
  const [password, changepassword] = useState("");

  function showToast(asd) {
    return toast(asd);
  }
  function signuphandler(email, password) {
    signup(auth, email, password)
      .then((uC) => {
        showToast("succesful");
        console.log("Signup Successful");
      })
      .catch((err) => {
        if (err.code == "auth/email-already-in-use") {
          console.log("User already exist in database");
          showToast("User already exist");
        }
        // toast("signup successfull");
      });
  }

  return (
    <div className="sign">
      <ToastContainer />
      <form
        className="signup"
        onSubmit={(p) => {
          p.preventDefault();
          signuphandler(email, password);
        }}
      >
        <h3>Reigister</h3>
        <input
          placeholder="Enter Name"
          style={{
            width: "350px",
            height: "40px",
            borderRadius: "5px",
            border: "1px solid gray",
            paddingLeft: "10px",
            marginBottom: "10px",
            marginTop: "20px",
          }}
        />
        <input
          type="email"
          placeholder="Enter Your email"
          value={email}
          onChange={(e) => {
            changeemail(e.target.value);
          }}
          style={{
            width: "350px",
            height: "40px",
            borderRadius: "5px",
            border: "1px solid gray",
            paddingLeft: "10px",
            marginBottom: "10px",
          }}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(p) => {
            changepassword(p.target.value);
          }}
          style={{
            width: "350px",
            height: "40px",
            borderRadius: "5px",
            border: "1px solid gray",
            paddingLeft: "10px",
          }}
        />
        <button
          style={{
            width: "350px",
            height: "40px",
            borderRadius: "5px",
            backgroundColor: "#0E2A47",
            color: "white",
            marginTop: "10px",
          }}
        >
          Submit
        </button>
        <button
          style={{
            width: "350px",
            height: "40px",
            borderRadius: "5px",
            backgroundColor: "black",
            color: "white",
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AiOutlineGoogle style={{ marginRight: "10px", fontSize: "20px" }} />
          Continue with Google
        </button>
        <div style={{ display: "flex", marginTop: "15px" }}>
          <p>Already Have An Account ? </p>
          <Link
            to="/Login"
            style={{
              fontWeight: "700",
              marginLeft: "3px",
              textDecorationLine: "none",
              color: "black",
            }}
          >
            {" "}
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
