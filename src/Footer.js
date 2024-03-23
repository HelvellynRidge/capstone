import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './Main';
import About from './About';
import Reservations from './Reservations';
import Socials from './Socials';

function Footer() {
    return (
      <div className="footerSection">
        <div className="footerSegmentImage">
              <img src="restaurantchefB.jpg" alt="Chef B"/>
        </div>
        <nav className='footerSegmentMenu'>
        <ul>
            <li>
              <Link to="/" className="nav-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/About" className="nav-item" aria-label="Read more about the Little Lemon Restaurant">
                About
              </Link>
            </li>
            <li>
              <Link to="/Reservations" className="nav-item" aria-label="Make a reservation">
                Reservations
              </Link>
            </li>
          </ul>
        </nav>
        <address className="footerSegment">
            <p>
                123 Main Street<br/>
                Chicago, IL 60601<br/>
                United States
            </p>
        </address>
        <div className="footerSegment">
            <Socials/>
        </div>
      </div>
    );
  }
  
  export default Footer;
  