import "./Home.css";
import NavBar from "./elements/NavBar";
import IntroSection from "./elements/IntroSection";
import ServicesSection from "./elements/ServicesSection";
import PetsSection from "./elements/PetsSection";
import ProductsSection from "./elements/ProductsSection";
import StolenPetsSection from "./elements/StolenPetsSection";
import Footer from './elements/Footer'

function App() {
  return (
    <div id="main-div">
      <div id="nav-div">
        <h1>Mithoo</h1>
        <NavBar />
      </div>
      <IntroSection />
      <ServicesSection />
      <PetsSection />
      <ProductsSection />
      <StolenPetsSection />
      <Footer/>
    </div>
  );
}

export default App;
