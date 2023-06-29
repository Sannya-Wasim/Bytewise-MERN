import React from "react";
import Navbar from "../elements/NavBar";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  resetCart
} from "../redux/cartSlice.js";

const Cart = () => {
  const { cartItems, cartTotalAmount, cartTotalQuantity } = useSelector(
    (item) => item.cart
  );
  // console.log(cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector((state)=> state.user.username)

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
    console.log(cartItems);
  };

  const handleIncreaseQuantity = (item) => {
    dispatch(increaseQuantity(item));
    console.log(cartItems);
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseQuantity(item));
    console.log(cartItems);
  };

  const handleCheckout = async(item) => {
    try {
      const orderData = {
        user: username,
        items: cartItems.map((item) => ({
          product: item._id,
          quantity: item.cartTotalQuantity,
        })),
        totalPrice: cartTotalAmount,
        date: new Date().toISOString(),
      };
      // console.log('Order data', orderData)

      const response = await fetch('http://localhost:5000/api/order', {
        headers : {
          'Content-Type':'application/json',
        },
        method : 'POST',
        body : JSON.stringify(orderData)
      })
      if (response.ok) {
        // Order created successfully
        console.log("Order created successfully");
        // const data = await response.json()
        // console.log(data)
        // Dispatch actions to reset the cart or perform any other necessary tasks
        dispatch(resetCart());
        navigate("/"); // Redirect to success page or any other page
      } else {
        console.log("Failed to create order");
        // Handle error case
      }
    } catch (error) {
      console.log("Error creating order", error);
      // Handle error case
    }
  }

  return (
    <div>
      <div id="nav-div">
        <h1>Mithoo</h1>
        <Navbar />
      </div>
      <h2 style={{ textAlign: "center", margin: "3rem" }}>My Shopping Cart</h2>
      <div className="cart container">
        <div className="cart-items">
          <div className="item-headers">
            <ul>
              <li>
                <h3>Description</h3>
              </li>
              <li style={{ margin: "1rem 0 0 8rem" }}>
                <h3>Quantity</h3>
              </li>
              <li style={{ margin: "1rem 0 0 3rem" }}>
                <h3>Remove</h3>
              </li>
              <li style={{ margin: "1rem 0 0 2rem" }}>
                <h3>Price</h3>
              </li>
            </ul>
            <hr />
          </div>

          {cartItems.map((item) => {
            return (
              <div className="item-details">
                <ul>
                  <li>
                    <img src={item.image} />
                  </li>
                  <li>
                    <h4>{item.title}</h4>
                    <p>{item.description.slice(0, 30)}...</p>
                  </li>
                  <li style={{ display: "flex" }}>
                    <button
                      className="cart-button"
                      onClick={() => handleDecreaseQuantity(item)}
                    >
                      -
                    </button>
                    <p>{item.cartTotalQuantity}</p>
                    <button
                      className="cart-button"
                      onClick={() => handleIncreaseQuantity(item)}
                    >
                      +
                    </button>
                  </li>
                  <li>
                    <button
                      className="cart-button"
                      onClick={() => handleRemove(item)}
                    >
                      x
                    </button>
                  </li>
                  <li>${item.price}</li>
                </ul>
                <hr />
              </div>
            );
          })}
          <div className="cart-summary">
            <div className="summary-items">
              <p>Discount</p>
              <p>
                <b>$0.00</b>
              </p>
            </div>
            <div className="summary-items">
              <p>Delivery</p>
              <p>
                <b>$0.00</b>
              </p>
            </div>
            <div className="summary-items">
              <p>Total Quantity</p>
              <p>
                <b>{cartTotalQuantity}</b>
              </p>
            </div>
            <div className="summary-items">
              <p>Total</p>
              <p>
                <b>${cartTotalAmount.toFixed(2)}</b>
              </p>
            </div>
          </div>
          <button className="checkout-button" onClick={()=>handleCheckout(cartItems)}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
