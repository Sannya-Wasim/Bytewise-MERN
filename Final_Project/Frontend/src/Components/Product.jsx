import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./Product.css";
import Navbar from "../elements/NavBar";
import { useDispatch } from "react-redux";
import {addToCart} from "../redux/cartSlice.js";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`http://localhost:5000/api/products/products/${id}`);
      const productData = await response.json();
      setProduct(productData);
    };

    fetchProduct();
  }, [id]);

  // console.log(product)

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    console.log(dispatch);
  };

  return (
    <div>
      <div id="nav-div">
        <h1>Mithoo</h1>
        <Navbar />
      </div>
      {product && (
        <div className="product" key={product._id}>
          <div className="left">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="right">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <br />
            <h3>Price: ${product.price}</h3>
            <br />
            <br />
            <Link onClick={() => handleAddToCart(product)} to='/products'>
              Add to Cart
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
