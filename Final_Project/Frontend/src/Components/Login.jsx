import React, { useState } from "react";
import "./login_styles.css";
import copy from "../assets/images/logo copy.png";
import NavBar from "../elements/NavBar";
import Axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    Axios.get("http://localhost/5000/login", { email, password }).then(
      (response) => {
        console.log(response);
      }
    );
    localStorage.setItem("user", "loggedIn");
  };

  return (
    <div>
      <div id="nav-div">
        <h1>Mithoo</h1>
        <NavBar />
      </div>
      <section id="bg">
        <section className="logo">
          <div id="content">
            <img src={copy} alt="Not Found" />
            <h2 id="head2" style={{ color: "white" }}>
              Welcome Back!
            </h2>
            <p style={{ color: "white" }}>Log In to your account.</p>
          </div>
        </section>

        <section className="login">
          <div id="content1">
            <h2>Login Form</h2>
            <hr />
            <form action="">
              <div className="form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="form">
                <input
                  type="text"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              <div className="labels">
                <div id="checkbox">
                  <input type="checkbox" name="remember_me" id="" /> Remember Me{" "}
                </div>
                <div id="btn">
                  <button onClick={handleLogin}>Log In</button>{" "}
                </div>
              </div>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Login;