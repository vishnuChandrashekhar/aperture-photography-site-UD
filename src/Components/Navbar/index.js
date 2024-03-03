import './index.css'
import { Link } from 'react-router-dom'
import LogoW from '../../Assets/images/Logo/ApertureLogo-W.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'

const Navbar = () => {
  
  const navRef = useRef()
  const showRefBtn = useRef()
  const showNav = () => {
    navRef.current.classList.toggle("responsive-nav")
    showRefBtn.current.classList.toggle('showBtn')
  }

  return (
    <header>
      <Link to="/"><img src={LogoW} alt="logoW" /></Link>
      <nav ref={navRef}>
        <Link to="/" className='nav-link'><li>Home</li></Link>
        <Link to="/portfolio" className='nav-link'><li>Portfolio</li></Link>
        <Link to="/services" className='nav-link'><li>Services</li></Link>
        <Link to="/about" className='nav-link'><li>About Us</li></Link>
        <Link to="/blog" className='nav-link'><li>Blog</li></Link>
        <Link to="/contact" className='nav-link flat-button'><li>Contact Us</li></Link>
      
        <FontAwesomeIcon ref={showRefBtn} icon={faTimes} className='iconTime'  onClick={showNav} />

      </nav>
        <FontAwesomeIcon ref={showRefBtn} icon={faBars}  className='iconBar'  onClick={showNav}/>

    </header>
  
  )
}

export default Navbar