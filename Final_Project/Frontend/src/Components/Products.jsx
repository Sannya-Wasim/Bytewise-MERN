import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import "./Products.css";
import Navbar from '../elements/NavBar'

function Products({ type }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
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
          <button
            class="Button"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            class="Button"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button class="Button" onClick={() => filterProduct("jewelery")}>
            Jewellery
          </button>
          <button class="Button" onClick={() => filterProduct("electronics")}>
            Electronics
          </button>
        </div>

        <div className="productsContainer">
          {filter.map((product) => {
            return (
              <div key={product.id} className="productCard">
                <img src={product.image} alt={product.title} />
                <div>
                  <h5>{product.title.substring(0, 12)}...</h5>
                  <p style={{ marginBottom: "1rem" }}>${product.price}</p>
                  <NavLink className="productLink" to={`${product.id}`}>
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
