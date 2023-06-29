import React, { useState } from "react";
import "./singup_styles.css";
import copy from "../assets/images/logo copy.png";
import NavBar from "../elements/NavBar";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice.js";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      if (confirmPassword !== password)
        throw new Error("Passwords are not the same");
      const res = await fetch("http://localhost:5000/auth/signup", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ username, email, password }),
      });
      if (res.status !== 200) throw new Error("Wrong Credentials!");
      
      const data = await res.json();
      console.log(data.others.username);

      dispatch(setUser(data.others.username));

      navigate("/");
    } catch (error) {
      setError((prev) => true);
      setTimeout(() => {
        setError((prev) => true);
      }, 2500);
      console.log(error);
    }
  };

  return (
    <div>
      <div id="nav-div">
        <h1>Mithoo</h1>
        <NavBar />
      </div>
      <section id="background">
        <section className="logo">
          <div id="content">
            <img src={copy} alt="Not Found" />
            <h2 id="head2" style={{ color: "white" }}>
              Welcome!
            </h2>
            <p style={{ color: "white" }}>
              Create your free account and get yourself lost in the world of
              pets.
            </p>
          </div>
        </section>

        <section className="sign">
          <div id="content1">
            <h2>Sign Up</h2>
            <hr />
            <form action="" className="container">
              <div className="left-container">
                <div className="input">
                  <input
                    type="text"
                    placeholder="Enter your Username"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </div>
                <div className="input">
                  <input
                    type="text"
                    placeholder="Enter your Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="right-container">
                <div className="input">
                  <input
                    type="text"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="input">
                  <input
                    type="text"
                    placeholder="Confirm Password"
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="labels">
                  <div id="checkbox">
                    <input type="checkbox" name="remember_me" id="" /> Remember
                    Me{" "}
                  </div>
                  <div id="btn">
                    <button onClick={handleSignup}>Sign Up</button>{" "}
                  </div>
                </div>
                <div>
                  <p>
                    Already a member? Click here to{" "}
                    <Link to="/login">Login!</Link>
                  </p>
                </div>
              </div>
            </form>
            {error && <div>Wrong Credentials! Try different ones.</div>}
          </div>
        </section>
      </section>
    </div>
  );
}

export default SignUp;
