import Home from "./Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Contact from "./Components/Contact";
import Products from "./Components/Products";
import About from "./Components/About";
import Pets from "./Components/Pets";
import { Routes, Route } from "react-router-dom";
import Product from "./Components/Product";
import Pet from "./Components/Pet";
import Cart from './Components/Cart';
import Orders from './Components/Orders'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<Product />}></Route>
        <Route path="/pets" element={<Pets />}></Route>
        <Route path="/pets/:id" element={<Pet />}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/orders' element={<Orders/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
