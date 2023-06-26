import Products from "../Components/Products";
import ServiceComponent from "../Components/ServiceComponent";
import { Link } from "react-router-dom";

const services = [
  {
    image: "./src/assets/images/adoptPet.jpg",
    title: "Adopt Pets",
    subtitle: "Adorable animals waiting for your adoption",
    type: "pets",
  },
  {
    image: "./src/assets/images/petFood.png",
    title: "Pet Food",
    subtitle: "Get high quality food for your pets",
    type: "food",
  },
  {
    image: "./src/assets/images/accessories.jpg",
    title: "Accessories",
    subtitle: "Toys and accessories for your pets care",
    type: "accessories",
  },
  {
    image: "./src/assets/images/stolen.jpg",
    title: "Stolen or Lost",
    subtitle: "Report for your lost or stolen pets",
    type: "stolen",
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
              <Link href={<Products type={service.type} />}>
                <ServiceComponent service={service} />
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
