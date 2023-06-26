const ServiceComponent = ({ service }) => {
  return (
    <figure id="service-element">
      <img style={{width : '10rem', height : '10rem'}} src={service.image} />
      <figcaption>
        <h3>{service.title}</h3>
        <p>{service.subtitle}</p>
      </figcaption>
    </figure>
  );
};

export default ServiceComponent;
