import { useState } from "react";
import DropDown from "./Dropdown";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const productItems = ["Food Products", "Accessories", "Toys"];
  const petItems = ["Cats", "Dogs", "Parrots"];
  const username = useSelector((state) => state.user.username);
  // console.log(username)

  const [showProductsDropDown, setProductsDropDown] = useState(false);
  const [showPetsDropDown, setPetsDropDown] = useState(false);

  const { cartTotalQuantity } = useSelector((item) => item.cart);

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
              <Link className="button">{username}</Link>
            </li>
            <li>
              <Link to="/cart">
                Cart <span id="cart-span">{cartTotalQuantity}</span>
              </Link>
            </li>
          </>
        )}
        <li><Link to='/orders'>Orders</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
