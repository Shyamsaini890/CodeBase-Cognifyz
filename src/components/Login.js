import React, { useEffect, useState } from "react";
import { signInWithEmailAndPassword as signin } from "firebase/auth";
import { AiOutlineGoogle } from "react-icons/ai";
import "./Login.css";
import { auth, provider } from "../firebaseconfig";
import { signInWithPopup } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

function login() {}
const Login = () => {
  const [value, setvalue] = useState("");
  const handleclick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setvalue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };
  useEffect(() => {
    setvalue(localStorage.getItem("email"));
  });
  const nav = useNavigate();
  const [email, changeemail] = useState();
  const [password, changepassword] = useState();
  function showtoast(t) {
    return toast(t);
  }
  function submitHandler(email, password) {
    signin(auth, email, password)
      .then((full) => {
        showtoast("Successfuly Login");
        setTimeout(() => {
          nav("/Dashboard");
        }, 1000);
      })
      .catch((err) => {
        if (err.code == "auth/wrong-password") {
          showtoast("Wrong Password");
          console.log("Wrong Password");
        } else if (err.code == "auth/user-not-found") {
          showtoast("User Not Found");
          console.log("User Not Found");
        } else {
          console.log(err.code);
        }
      });
  }
  return (
    <div className="login">
      <ToastContainer hideProgressBar="true" autoClose={1000} />
      <form
        className="signin"
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler(email, password);
        }}
      >
        <h3>Login</h3>
        <input
          type="email"
          placeholder="Enter Email/Username"
          value={email}
          onChange={(e) => {
            // console.log(e.target.value);
            changeemail(e.target.value);
          }}
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
          type="password"
          placeholder="Password"
          value={password}
          onChange={(p) => {
            // console.log(p.target.value);
            changepassword(p.target.value);
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
        <button
          type="submit"
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
        {value ? (
          <Dashboard />
        ) : (
          <button
            onClick={handleclick}
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
            <AiOutlineGoogle
              style={{ marginRight: "10px", fontSize: "20px" }}
            />
            Continue with Google
          </button>
        )}
        <div style={{ display: "flex", marginTop: "15px" }}>
          <p>Don’t Have An Account ? </p>
          <Link
            to="/Signup"
            style={{
              fontWeight: "700",
              marginLeft: "3px",
              textDecoration: "none",
              color: "black",
            }}
          >
            {" "}
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
