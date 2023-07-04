import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const username = useSelector((state) => state.user.username);
  // console.log(username)
  const navigate = useNavigate();

  const { cartTotalQuantity } = useSelector((item) => item.cart);

  const handleLogout= ()=>{
    const confirmLogout = window.confirm("Do you want to logout?");
    if (confirmLogout) {
      dispatch(logout());
      navigate('/')
    }
  }

  return (
    <nav id="navigation-bar">
      <ul id="nav-ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/pets">Pets</Link>
        </li>
        <li>
          <Link to="/reports">Stolen Pets</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        {username === "User" ? (
          <>
            <li>
              <Link className="button" to="/login">
                Sign In
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link className="button" onClick={()=>handleLogout()}>{username}</Link>
            </li>
            <li><Link to='/orders'>Orders</Link></li>
            <li>
              <Link to="/cart">
                Cart <span id="cart-span">{cartTotalQuantity}</span>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
