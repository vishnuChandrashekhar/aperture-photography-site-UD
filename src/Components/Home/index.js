import './index.css';
import MainLogo from '../../Assets/images/Logo/MainLogo.svg'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

const Home = () => {
  return (
    <div className='container home-page'>
      <div className='main-box main'>
        <img src={MainLogo} alt="main-logo" />
      </div>
      <div className='main-box portfolio'>
        <h2>PORTFOLIO</h2>
        <Link to="/portfolio" className="white-border-btn btn-link">View</Link>
      </div>
      <div className='main-box services'>
        <h2>SERVICES</h2>
        <Link to="/services" className="white-border-btn btn-link">View</Link>
      </div>
      <div className='main-box about'>
        <h2>ABOUT US</h2>
        <Link to="/about" className="white-border-btn btn-link">View</Link>
      </div>
      <div className='main-box contact'>
        <h2>CONTACT US</h2>
        <Link to="/contact" className="white-border-btn btn-link">View</Link>
      </div>
      <div className='main-box blog'>
        <h2>BLOG</h2>
        <Link to="/blog" className="white-border-btn btn-link">View</Link>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Home