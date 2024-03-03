import Navbar from '../Navbar'
import './index.css'
import { Link } from 'react-router-dom';
import { animateScroll as scroll} from 'react-scroll'
import { easeInOutQuart, easeInOutExpo  } from 'easing-functions';

const Services = () => {

   const scrollToServices = () => {
    scroll.scrollToBottom({
      duration: 800,
      delay: 0,
      smooth: easeInOutExpo
    })
   }

  return(
    <div className="service-page">
      <Navbar />
      <div className="service-hero">
        <h1>Services</h1>
        <a href="#service-container" onClick={scrollToServices} smooth={true}><button className='white-border-btn'>View Plans</button></a>
      </div>
      <div className="services-box" id='service-container'>
        <h1>PLANS</h1>
        {/* <hr /> */}
        <div className='plan-container'>
          <div className="plans">
            <div className="plan-box">
              <h3>Silver Plan</h3>
            </div>
            <div className="plan-box">
            <h3>Gold Plan</h3>
            </div>
            <div className="plan-box">
            <h3>Platinum Plan</h3>
            </div>
          </div>
        </div>
        <Link to="/contact"><button className='black-border-btn'>Contact Us</button></Link>
      </div>
    </div>
  )
}

export default Services