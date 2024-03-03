import { Outlet } from 'react-router-dom';
import './index.css';
import Navbar from '../Navbar';

const Layout = () => {
  return (
    <div className='App'>
      <div className="page">
        <Outlet />
      </div>
    </div>

    // <div className='App'>
    //     <Outlet />
    // </div>
  )
}

export default Layout