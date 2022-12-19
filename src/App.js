import Contact from "./Component/Contact/Contact.js";
import Hero from "./Component/Hero/Hero"
import About from "./Component/About/About.js"
import Qualification from "./Component/Qualification/Qualification.js";
import Navbar from "./Component/Navbar.js";
import {Routes,Route} from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./Component/Footer/Footer.js";



function App() {
  return (
    <>
    
    <Navbar/>
    <Routes>
    <Route path="/" element={<Hero/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/qualification" element={<Qualification/>}/>
    </Routes>
    <Footer/>
    
    </>
    
  );
}

export default App;
