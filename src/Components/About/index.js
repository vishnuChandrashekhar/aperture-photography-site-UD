import { Link } from 'react-router-dom'
import Navbar from '../Navbar';
import CrewDetails from './crewDetails'
import './index.css';
import { useState } from 'react';

const About = () => {

  const [details, setDetails] = useState(CrewDetails)

  return (
    <div className='about-page'>
      <Navbar />
      <div className="hero-about">
        <h1>About us</h1>
        <Link to="/contact"><button className='white-border-btn' >Contact Us</button></Link>
      </div>
      <div className="about-details">
        <h2>Aperture: Capturing Moments, Creating Memories</h2>
        <p>Founded on January 25, 2017
            At Aperture, we don't just take photographs; we capture moments, emotions, and stories that last a lifetime. We understand the power of a single image and the profound impact it can have. That's why we've dedicated ourselves to providing top-notch photography and videography services since our inception in 2017.
        </p>
        <h2>Our Passion for Photography</h2>
        <p>
          Photography is not just a profession for us; it's a passion that drives our team at Aperture. With an unwavering commitment to excellence, we have evolved into one of Karnataka's most trusted photography service providers. We believe that each click should tell a unique story and leave a lasting impression.
        </p>
        <h2>Our Services</h2>
        <p><span>1. Wedding Photoshoot: </span>Your special day deserves to be immortalized in the most beautiful way possible. Our wedding photography services are designed to capture every precious moment, from the candid smiles to the emotional tears.</p>
        <p><span>2. Personal Photoshoot: </span>Whether it's a family portrait, a maternity shoot, or a solo adventure, we specialize in personal photoshoots that reflect your personality and style.</p>
        <p><span>3. Wildlife Photography: </span>Whether it's a family portrait, a maternity shoot, or a solo adventure, we specialize in personal photoshoots that reflect your personality and style.</p>
        <p><span>4. Videoshoots:</span>Videos can tell a story like no other medium. From event coverage to promotional videos, we offer comprehensive video services that bring your vision to life.</p>
        <Link to="/services"><button className='black-border-btn'>View Services</button></Link>
        <h2>We Go Where You Go</h2>
        <p>Aperture is not bound by location, we provide our services all over Karnataka. Whether you're in the bustling city of Bangalore, the tranquil hills of Coorg, or anywhere in between, our team is ready to capture your special moments.</p>
        <h2>Contact Us</h2>
        <p>At Aperture, we believe that every picture tells a story, and we are eager to tell yours. Contact us today to discuss your photography and videography needs. Let's create memories together.</p>
        <Link to="/contact"><button className='black-border-btn'>Contact Us</button></Link>
      </div>
      <div className="crew-details">
        <h2>OUR CREW</h2>
        <div className="crew-image-box">
          {
            details.map((element) => {
              const { id, name, image } = element

              return (
                <div className="imgCard">
                  <img src={image} alt="crew image" />
                  <h4>{name}</h4>
                </div>
              )
            })
          }
        </div>
        <Link to="/contact"><button className='black-border-btn' >Contact Us</button></Link>
      </div>
    </div>
  )
}

export default About