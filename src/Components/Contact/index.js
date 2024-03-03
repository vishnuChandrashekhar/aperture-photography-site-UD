import Navbar from '../Navbar';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocation, faMapLocation, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import Form from '../Form';


const Contact = () => {
  return (
    <div className="contact-page">
      <Navbar />
      <div className="contact-hero">
        <h1>Contact</h1>
      </div>
      <div className="contact-details">
        <div className="icon-box">
          <FontAwesomeIcon icon={faPhone} className='contact-icon'/>
          <p>+01292307582</p>
        </div>
        <div className="icon-box">
          <FontAwesomeIcon icon={faEnvelope} className='contact-icon'/>
          <p>Aperture@dotcomestudio.com</p>
        </div>
        <div className="icon-box">
          <FontAwesomeIcon icon={faMapMarkedAlt} className='contact-icon'/>
          <p>+G/2, Nanjibhai Chamber, Bahuchraji Road, Karelibaug</p>
        </div>
      </div>
      <div className="conatct-form">
        <p>IF GOT ANY QUETION <br />
          PLEASE DO NOT HESITATE TO SEND US THE MASSAGE, <br /> WE WILL GET TO YOU AS SOON AS POSSIBLE </p>
       <Form />
      </div>
    </div>
  )
}

export default Contact