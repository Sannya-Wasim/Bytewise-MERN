import { Link } from "react-router-dom";
import rightArrow from "../assets/images/right-arrow.png";

var products = [
  {
    image:
      "https://img.freepik.com/free-photo/top-view-food-bowl-with-bone-animal-day_23-2148668889.jpg?size=626&ext=jpg&ga=GA1.1.1822332878.1685375123&semt=ais",
    name: "Premium Dog Food",
    description:
      "High-quality dog food with balanced nutrition for optimal health.",
    link: "products",
  },
  {
    image:
      "https://img.freepik.com/free-photo/cute-dog-playing-with-little-rubber-balls_23-2148366917.jpg?size=626&ext=jpg&ga=GA1.1.1822332878.1685375123&semt=ais",
    name: "Interactive Dog Toy",
    description: "Engage your dog with this fun and durable interactive toy.",
    link: "products",
  },
  {
    image:
      "https://img.freepik.com/free-photo/close-up-sleepy-beautiful-cat_23-2149216375.jpg?size=626&ext=jpg&ga=GA1.1.1822332878.1685375123&semt=ais",
    name: "Cozy Cat Bed",
    description:
      "Provide your cat with a comfortable and warm bed for relaxing.",
    link: "products",
  },
];

const ProductsSection = () => {
  return (
    <section id="products-section">
      <div className="cover-div">
        <h2>Our Products</h2>
        <div id="products">
          {products.map((product) => {
            return (
              <Link to={product.link}>
                <figure className="product-card">
                  <img src={product.image} alt="animal" />
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="arrow-button">
                    <a href="">Get Now</a>
                    <img src={rightArrow} alt="arrow" className="right-arrow" />
                  </div>
                </figure>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
