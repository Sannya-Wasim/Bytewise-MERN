import Products from "../Components/Products";
import {Link} from 'react-router-dom';
import rightArrow from '../assets/images/right-arrow.png'

var pets = [
  {
    image: "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Golden Retriever",
    description: "Friendly and intelligent dog breed. Great family companion.",
    link : 'pets',
  },
  {
    image: "https://images.pexels.com/photos/1644767/pexels-photo-1644767.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Persian Cat",
    description: "Beautiful and calm cat breed. Known for its long fur.",
    link : 'pets',
  },
  {
    image: "https://images.pexels.com/photos/2880405/pexels-photo-2880405.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "African Grey Parrot",
    description:
      "Highly intelligent parrot species. Known for their ability to mimic sp…",
      link : 'pets',
  },
];

const PetsSection = () => {
  return (
    <section id="pets-section">
      <div className="cover-div">
        <h2>Our Pets</h2>
        <div id="pets">
          {pets.map((pet) => {
            return (
              <Link to={pet.link}>
                <figure className="pet-card">
                  <img src={pet.image} alt="animal" />
                  <h3>{pet.name}</h3>
                  <p>{pet.description}</p>
                  <div className="arrow-button">
                    <a href={pets.link}>Buy Now</a>
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

export default PetsSection;
