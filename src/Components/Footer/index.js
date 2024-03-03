import './index.css';
import { Link } from 'react-router-dom';

const Footer = ()=>{
  return (
    <div className="footer-container">
      <p><span>©All Rights Reserved:</span> @vishnu_chandrashekhar</p>
      <Link to="/privacypolicy" className='privacypolicy'>Privacy policy</Link>
    </div>
  )
}

export default Footer