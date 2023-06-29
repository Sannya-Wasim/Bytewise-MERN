import PetCard from "./PetCard";
import Products from "../Components/Products";

var pets = [
  {
    image: "src/assets/images/adoptPet.jpg",
    name: "Tom",
    description: "A blue and white naughty cat",
  },
  {
    image: "src/assets/images/adoptPet.jpg",
    name: "Tom",
    description: "A blue and white naughty cat",
  },
  {
    image: "src/assets/images/adoptPet.jpg",
    name: "Tom",
    description: "A blue and white naughty cat",
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
              <a href={<Products />}>
                <PetCard pet={pet} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PetsSection;
