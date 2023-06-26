import React, { useState } from "react";
import "./contact_style.css";
import us from "./us.png";
import NavBar from "../elements/NavBar";
import Axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleComment = () => {
    Axios.post("http://localhost:5000/comment", { name, email, comment });
    alert("Comment Posted");
  };

  return (
    <>
      <div id="nav-div">
        <h1>Mithoo</h1>
        <NavBar />
      </div>
      <div className="content">
        <div className="image">
          <img src={us} />
          <h1>Contact Us</h1>
        </div>
        <div className="for">
          <form>
            <table>
              <tbody>
                <tr>
                  <td>
                    <input
                      placeholder="Enter your name"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>
                    <input
                      placeholder="Enter your email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>
                    <textarea
                      rows="10"
                      cols="50"
                      placeholder="Describe your pet..."
                      onChange={(e) => {
                        setComment(e.target.value);
                      }}
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button type="submit" onClick={handleComment}>
                      Submit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;