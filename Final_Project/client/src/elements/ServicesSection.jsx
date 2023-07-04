import Products from "../Components/Products";
import { Link } from "react-router-dom";
import petFood from "../assets/images/petFood.png";
import adoptPet from "../assets/images/adoptPet.jpg";
import accessories from "../assets/images/accessories.jpg";
import stolen from "../assets/images/stolen.jpg";

const services = [
  {
    image: accessories,
    title: "Accessories",
    subtitle: "Toys and accessories for your pets care",
    type: "products",
  },
  {
    image: adoptPet,
    title: "Buy Pets",
    subtitle: "Adorable animals waiting for a new home",
    type: "pets",
  },
  {
    image: stolen,
    title: "Lost Pets",
    subtitle: "Report for your lost or stolen pets",
    type: "reports",
  },
];

const ServicesSection = () => {
  return (
    <section>
      <div className="cover-div" id="service-div">
        <h2>Our Services</h2>
        <div id="services">
          {services.map((service) => {
            return (
              // <Link to="">
              <Link to={service.type}>
                <figure id="service-element">
                  <img
                    style={{ width: "10rem", height: "10rem" }}
                    src={service.image}
                  />
                  <figcaption>
                    <h3>{service.title}</h3>
                    <p>{service.subtitle}</p>
                  </figcaption>
                </figure>
              </Link>
              // </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
