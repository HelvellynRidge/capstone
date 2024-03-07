import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './Main';
import About from './About';
import Reservations from './Reservations';

function Nav() {
  return (
    <div>
      <BrowserRouter>
      <nav className="nav">
        <ul>
          <li>
            <img src="Logo.svg" alt="Logo" />
          </li>
          <li>
            <Link to="/" className="nav-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className="nav-item">
              About
            </Link>
          </li>
          <li>
            <Link to="/Reservations" className="nav-item">
              Reservations
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/About" element={<About />} />
        <Route path="/Reservations" element={<Reservations />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Nav;
