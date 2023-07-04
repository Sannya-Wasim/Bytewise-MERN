import React, { useState, useEffect } from "react";
import "./Cart.css";
import Navbar from "../elements/NavBar";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import {useSelector} from 'react-redux';

const Orders = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  const username = useSelector((state)=>state.user.username)
  

  useEffect(() => {
    const getOrders = async () => {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/order/orders");
      const data = await response.json();

      if (componentMounted) {
        setData(data);
        setLoading(false);
      }
    };

    getOrders();

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

  const ShowOrders = () => {
    return (
      <>
        {data.map((order) =>
          order.user === username && (
            <div className="item-details" key={order._id}>
              <ul>
                <li>
                  <p>{order.items[0].product}</p>
                </li>
                <li>{order.items[0].quantity}</li>
                <li>{order.createdAt}</li>
                <li>${order.totalPrice}</li>
              </ul>
              <hr />
            </div>
          )
        )}
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
            My Order History
          </h2>
          <div className="cart container">
            <div className="cart-items">
              <div className="item-headers">
                <ul>
                  <li>
                    <h3>Product Id</h3>
                  </li>
                  <li style={{ margin: "1rem 0 0 3rem" }}>
                    <h3>Quantity</h3>
                  </li>
                  <li style={{ margin: "1rem 0 0 3rem" }}>
                    <h3>Date</h3>
                  </li>
                  <li style={{ margin: "1rem 0 0 7rem" }}>
                    <h3>Price</h3>
                  </li>
                </ul>
                <hr />
              </div>
              <ShowOrders/>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Orders;
