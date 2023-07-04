import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import "./Products.css";
import Navbar from "../elements/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      // const response = await fetch("http://localhost:5000/api/products/products");
      const response = await fetch("/api/products/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  console.log(loading);

  const Loading = () => {
    return (
      <>
        <div class="col-md-3">
          <Skeleton height={350} />
        </div>
        <div class="col-md-3">
          <Skeleton height={350} />
        </div>
        <div class="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const renderStars = (rating) => {
    const filledStars = Math.floor(rating); // Number of filled stars
    const hasHalfStar = rating % 1 !== 0; // Check if there is a half star

    const starStyle = {
      color: "gold",
      marginRight: "2px",
    };

    const stars = [];
    for (let i = 0; i < filledStars; i++) {
      stars.push(<FontAwesomeIcon icon={faStar} style={starStyle} />);
    }
    if (hasHalfStar) {
      stars.push(<FontAwesomeIcon icon={faStarHalfAlt} style={starStyle} />);
    }

    return stars;
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div class="productsButtons">
          <button class="Button" onClick={() => setFilter(data)}>
            All Products
          </button>
          <button class="Button" onClick={() => filterProduct("Food")}>
            Food
          </button>
          <button class="Button" onClick={() => filterProduct("Toys")}>
            Toys
          </button>
          <button class="Button" onClick={() => filterProduct("Beds")}>
            Beds
          </button>
          <button class="Button" onClick={() => filterProduct("Leashes")}>
            Leashes
          </button>
        </div>

        <div className="productsContainer">
          {filter.map((product) => {
            return (
              <div key={product.id} className="productCard">
                <img src={product.image} alt={product.title} />
                <div>
                  <h3>{product.title}</h3>
                  <p>{product.description.substring(0,20)}</p>
                  <p style={{ marginBottom: "1rem" }}>${product.price}</p>
                  <div className="ratings">{renderStars(product.rating.rate)}</div>
                  <NavLink
                    className="productLink"
                    to={`/products/${product._id}`}
                  >
                    Buy Now
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div>
      <div id="nav-div">
        <h1>Mithoo</h1>
        <Navbar />
      </div>
      <div>
        <div>
          <h1 style={{ textAlign: "center", margin: "1rem" }}>
            Latest Products
          </h1>
          <hr />
        </div>
        <div>{loading ? <Loading /> : <ShowProducts />}</div>
      </div>
    </div>
  );
}

export default Products;
