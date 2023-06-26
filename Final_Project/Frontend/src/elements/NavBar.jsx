import { useState } from "react";
import DropDown from "./Dropdown";
import { Link } from "react-router-dom";

const NavBar = () => {
  const productItems = ["Food Products", "Accessories", "Toys"];
  const petItems = ["Cats", "Dogs", "Parrots"];

  const [showProductsDropDown, setProductsDropDown] = useState(false);
  const [showPetsDropDown, setPetsDropDown] = useState(false);

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
          <Link to='/pets'>Pets</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link className="button" to="/login">
            Sign In
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
