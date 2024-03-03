import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route index element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
