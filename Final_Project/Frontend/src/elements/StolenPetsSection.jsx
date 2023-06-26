import React, { useState } from "react";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";
import report from "../assets/images/report.png";
import Axios from "axios";

function Stolen() {
  const [name, setName] = useState("");
  const [petName, setPetName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmitReport = () => {
    Axios.post(`http://localhost:5000/stolen`, {
      name,
      petName,
      phone,
      location,
      date,
      description,
    });
  };

  return (
    <div>
      
      <div id="background">
        <section className="logo" style={{ width: "22%" }}>
          <div id="content">
            <img src={report} alt="Picture not Found" />
          </div>
        </section>
        <section className="login" style={{ width: "72%", height: "406px" }}>
          <div id="content1">
            <h2>Report Here</h2>
            <hr />
            <form action="" style={{ height: "240px", display: "flex" }}>
              <div className="row">
                <div className="col">
                  <div className="form">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Name"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your phone number"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your pet name"
                      onChange={(e) => {
                        setPetName(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Location where they got lost from"
                      onChange={(e) => {
                        setLocation(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form">
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Last day you them"
                      onChange={(e) => {
                        setDate(e.target.value);
                        console.log(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div class="form">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Describe your pet...."
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  ></textarea>
                </div>

                <div className="labels">
                  <div id="btn">
                    <button onClick={handleSubmitReport}>Submit</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Stolen;