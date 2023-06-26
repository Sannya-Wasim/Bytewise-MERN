import ProductCard from "./ProductCard";

var products = [
  {
    image: "src/assets/images/petFood.png",
    name: "Pet Food",
    description: "Pet Food Description",
  },
  {
    image: "src/assets/images/petFood.png",
    name: "Pet Food",
    description: "Pet Food Description",
  },
  {
    image: "src/assets/images/petFood.png",
    name: "Pet Food",
    description: "Pet Food Description",
  },
];

const ProductsSection = () => {
  return (
    <section id="products-section">
      <div className="cover-div">
        <h2>Our Products</h2>
        <div id="products">
          {products.map((product) => {
            return <ProductCard product={product} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
