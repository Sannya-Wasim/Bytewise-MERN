const PetCard = ({ pet }) => {
  return (
    <figure className="pet-card">
      <img src={pet.image} alt="animal" />
      <h3>{pet.name}</h3>
      <p>{pet.description}</p>
      <div className="arrow-button">
        <a href="">Buy Now</a>
        <img
          src="src/assets/images/right-arrow.png"
          alt="arrow"
          className="right-arrow"
        />
      </div>
    </figure>
  );
};

export default PetCard;
