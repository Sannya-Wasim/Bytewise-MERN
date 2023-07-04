import React, { useState } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import report from "../assets/images/report.png";

function Stolen() {
  const [name, setName] = useState("");
  const [petName, setPetName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmitReport = async (req, res) => {
    const report = {
      name: name,
      email: email,
      petName: petName,
      location: location,
      description: description,
      date: date,
    };
    try {
      const response = await fetch(`http://localhost:5000/api/report`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(report)
      });
      if (response.ok){
        console.log('Report created successfully')
      }
    } catch (error) {
      console.log('Error creating report', error)
    }
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
                      placeholder="Enter your email"
                      onChange={(e) => {
                        setEmail(e.target.value);
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
                      placeholder="Last day you saw them"
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
                    <Link onClick={handleSubmitReport} to='/reports'>Submit</Link>
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
