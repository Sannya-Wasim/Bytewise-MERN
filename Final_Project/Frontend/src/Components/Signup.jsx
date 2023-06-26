import React, { useState } from "react";
import "./singup_styles.css";
import copy from "../assets/images/logo copy.png";
import NavBar from "../elements/NavBar";
import Axios from "axios";

function SignUp() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSignup = () => {
    Axios.post(`http://localhost:5000/signup`, {
      // Axios.post(`${process.env.BASE_URL}/signup`, {
      name,
      password,
      email,
      address,
      phone,
    }).then((e) => {
      //TODO: Store in local storage
    });
    localStorage.setItem("user", "loggedIn");
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
                    placeholder="Enter your Name"
                    onChange={(e) => {
                      setName(e.target.value);
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
                <div className="input">
                  <input
                    type="text"
                    placeholder="Enter your address"
                    onChange={(e) => {
                      setAddress(e.target.value);
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
                    placeholder="Contact Number"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
                {/* <div className="input">
                  <input type="file" id="imageFile" accept="image/*" />
                </div> */}

                <div className="labels">
                  <div id="checkbox">
                    <input type="checkbox" name="remember_me" id="" /> Remember
                    Me{" "}
                  </div>
                  <div id="btn">
                    <button onClick={handleSignup}>Sign Up</button>{" "}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
}

export default SignUp;