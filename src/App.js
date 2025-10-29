import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp"; // ✅ correct import
import Footer from "./pages/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/signup' element={<SignUp />} /> {/* ✅ fixed name */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
