// import coverPhoto from "src/assets/images/cover.jpg";

const IntroSection = () => {
  return (
    <section id="intro-section">
      <div className="cover-div">
        <div id="intro-text">
          <div>
            <h2>Welcome to Mithoo</h2>
            <h3>Your all in one solution for your pets</h3>
          </div>
          <div>
            <a href="" className="button" id="get-started-button">
              Get Started
            </a>
          </div>
        </div>
        <div id="cover-photo">
          <img src="./src/assets/images/cover.jpg" alt="Pet Image" />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
