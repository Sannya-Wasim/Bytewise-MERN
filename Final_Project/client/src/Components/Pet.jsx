import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import './Product.css'
import Navbar from '../elements/NavBar'
import { useDispatch } from "react-redux";
import {addToCart} from "../redux/cartSlice.js";

const Pet = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPet = async () => {
      // const response = await fetch(`http://localhost:5000/api/products/pets/${id}`);
      const response = await fetch(`/api/products/pets/${id}`);
      const petData = await response.json();
      setPet(petData);
      // console.log(pet);
    };

    fetchPet();
  }, [id]);

  const handleAddToCart = (item) => {
    // e.preventDefault();
    dispatch(addToCart(item));
    console.log(item);
  };

  return (
    <div>
        <div id="nav-div">
        <h1>Mithoo</h1>
        <Navbar />
      </div>
      {pet && (
        <div className="product" key={pet._id}>
          <div className="left">
            <img src={pet.image} alt={pet.title} />
          </div>
          <div className="right">
            <h2>{pet.title}</h2>
            <p>{pet.description}</p>
            <br />
            <h3>Price: ${pet.price}</h3>
            <p>No. of animals sold{product.rating.count}</p>
            <br/><br/>
            <Link onClick={() => handleAddToCart(pet)} to='/pets'>
              Add to Cart
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pet;
