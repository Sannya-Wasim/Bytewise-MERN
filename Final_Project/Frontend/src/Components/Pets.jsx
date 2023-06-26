import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import "./Products.css";

function Pets() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getPets = async () => {
      setLoading(true);
    //   const response = await fetch("http://localhost:5000/pets");
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

    getPets();
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

  const filterPets = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowPets = () => {
    return (
      <>
        <div class="productsButtons">
          <button class="Button" onClick={() => setFilter(data)}>
            All Products
          </button>
          <button
            class="Button"
            onClick={() => filterPets(1)}
          >
            Men's Clothing
          </button>
          <button
            class="Button"
            onClick={() => filterPets(2)}
          >
            Women's Clothing
          </button>
          <button class="Button" onClick={() => filterPets(3)}>
            Jewellery
          </button>
          <button class="Button" onClick={() => filterPets(4)}>
            Electronics
          </button>
        </div>

        <div className="productsContainer">
          {filter.map((pet) => {
            return (
              <div key={pet.id} className="productCard">
                <img
                  src={pet.image}
                  alt={pet.title}
                />
                <div>
                  <h5>{pet.title.substring(0, 12)}...</h5>
                  <p style={{marginBottom : '1rem'}}>${pet.price}</p>
                  <NavLink className="productLink" to={`${pet.id}`}>Buy Now</NavLink>
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
      <div>
        <div>
          <h1 style={{ textAlign: "center", margin: "1rem" }}>
            Latest Pets
          </h1>
          <hr />
        </div>
        <div>{loading ? <Loading /> : <ShowPets />}</div>
      </div>
    </div>
  );
}

export default Pets;
