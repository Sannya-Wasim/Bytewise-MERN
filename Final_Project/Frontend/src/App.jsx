import Home from './Home'
import Login from './Components/Login';
import Signup from './Components/Signup';
import Contact from './Components/Contact'
import Products from './Components/Products'
import About from './Components/About'
import Pets from './Components/Pets'
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/about' element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/pets' element={<Pets/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
