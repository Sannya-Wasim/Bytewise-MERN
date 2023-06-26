const ProductCard = ({ product }) => {
  return (
    <figure className="product-card">
      <img src={product.image} alt="animal" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="arrow-button">
        <a href="">Get Now</a>
        <img
          src="src/assets/images/right-arrow.png"
          alt="arrow"
          className="right-arrow"
        />
      </div>
    </figure>
  );
};

export default ProductCard;
