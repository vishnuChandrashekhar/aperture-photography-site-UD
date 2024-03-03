import Gallery from '../Gallery'
import Navbar from '../Navbar'
import './index.css'
// import { Link } from 'react-router-dom'
import { Link, animateScroll as scroll } from 'react-scroll';
import { easeInOutQuart, easeInOutExpo  } from 'easing-functions';


const Portfolio = () => {

  const scrollToGallery = () => {
    scroll.scrollToBottom({
      duration: 800,
      delay: 0,
      smooth: easeInOutExpo
    })
  }
  return(
  <>
    <Navbar />
     <div className='portfolio-page'>
      <div className="hero">
        <h1>Portfolio</h1>
        <Link to="gallery" className='white-border-btn' smooth={true} onClick={scrollToGallery}>Gallery</Link>
      </div>
      <Gallery />
      <button className="black-border-btn">View</button>
    </div>
  </>
  )
}


export default Portfolio