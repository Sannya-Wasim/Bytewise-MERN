import React, { useState, useEffect } from "react";
import "./Cart.css";
import Navbar from "../elements/NavBar";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Orders = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  const username = useSelector((state) => state.user.username);

  useEffect(() => {
    const getReports = async () => {
      setLoading(true);
      // const response = await fetch(`http://localhost:5000/api/report/reports`);
      const response = await fetch(`http://localhost:5000/api/report/reports`);
      const data = await response.json();

      if (componentMounted) {
        setData(data);
        setLoading(false);
      }
    };

    getReports();

    return () => {
      componentMounted = false;
    };
  }, []);

  console.log(loading);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const ShowReports = () => {
    return (
      <>
        {data.map((report) => (
          <div className="item-details" key={report._id}>
            <ul>
              <li>{report.name}</li>
              <li>{report.email}</li>
              <li>{report.petName}</li>
              <li>{report.description}</li>
              <li>{report.location}</li>
              <li>{report.date}</li>              
            </ul>
            <hr />
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div id="nav-div">
            <h1>Mithoo</h1>
            <Navbar />
          </div>
          <h2 style={{ textAlign: "center", margin: "3rem" }}>
            Stolen Pets Reports
          </h2>
          <div className="cart container" style={{width : '70rem'}}>
            <div className="cart-items">
              <div className="item-headers">
                <ul>
                  <li style={{ margin: "0 1.5rem 0 1.5rem" }}>
                    <h3>Owner's Name</h3>
                  </li>
                  <li style={{ margin: "0 1.5rem 0 1.5rem" }}>
                    <h3>Owner's Email</h3>
                  </li>
                  <li style={{ margin: "0 1.5rem 0 1.5rem" }}>
                    <h3>Pet Name</h3>
                  </li>
                  <li style={{ margin: "0 1.5rem 0 1.5rem" }}>
                    <h3>Pet Description</h3>
                  </li>
                  <li style={{ margin: "0 1.5rem 0 1.5rem" }}>
                    <h3>Location</h3>
                  </li>
                  <li style={{ margin: "0 1.5rem 0 1.5rem" }}>
                    <h3>Lost on</h3>
                  </li>
                </ul>
                <hr />
              </div>
              <ShowReports />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Orders;
