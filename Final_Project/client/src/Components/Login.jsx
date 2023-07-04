import React, { useState } from "react";
import "./login_styles.css";
import copy from "../assets/images/logo copy.png";
import NavBar from "../elements/NavBar";
import Axios from "axios";
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setUser} from '../redux/userSlice.js'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch()

  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      // const res = await fetch("http://localhost:5000/auth/login", {
        const res = await fetch(`/auth/login`, {
        headers: {
          'Content-Type' : 'application/json'
        },
        method: "POST",
        body : JSON.stringify({email, password})
      })
      const data = await res.json();
      dispatch(setUser(data.others.username))

      if (res.status === !200){
        throw new Error("Wrong Credentials")
      }
      else{
        setUsername(()=>data.others.username)
      }      
      navigate('/');

    } catch (error) {
      setError(prev => true)
      setTimeout(()=>{
        setError(prev => true)
      }, 2500)
      console.log(error)
    }
  };

  return (
    <div>
      <div id="nav-div">
        <h1>Mithoo</h1>
        <NavBar name={username}/>
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
              {
              error && 
              <div className="error">
                Wrong Credentials! Try different ones.
              </div>
            }
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
              <div><p>Haven't registered yet? Click here to <Link to='/signup'>Sign Up!</Link></p></div>

            </form>
            
          </div>
        </section>
      </section>
    </div>
  );
}

export default Login;
