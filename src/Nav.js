import {useEffect, useReducer} from "react"; 
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import Main from './Main';
import About from './About';
import Reservations from './Reservations';
import fetchApi, { submitAPI } from './Api.js';
import ConfirmedBooking from "./ConfirmedBooking.js";
import OnlineMenu from "./OnlineMenu.js";


function updateTimes(state, action) //reducer function (state, action)
{
  return(fetchApi(action));
};

function initialiseTimes()
{
  return(fetchApi("01/01/2024"));
};



function Nav() {
  const initialState = initialiseTimes();
  const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes,initialState); //reducer, initial state


  const submitForm = (formData) => {
    try {
      const response =  submitAPI(formData);
      if (response > 0.5) {
        // Submission successful.
        return (1);
      } else {
        // Submission error, display an alert
        alert("Submission error. Please try again");
        return(9);
      }
    } catch (error) {
      // Handle any errors
      alert("Submission error. Please try again");
      return(0);
    }
  };

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
            <Link to="/About" className="nav-item" aria-label="Read more about the Little Lemon Restaurant" >
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
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/About" element={<About />} />
        <Route path="/Reservations" element={<Reservations availableTimes={availableTimes} dispatchAvailableTimes={dispatchAvailableTimes} submitForm={submitForm}/>} />
        <Route path="/ConfirmedBooking" element={<ConfirmedBooking/>} />
        <Route path="/OnlineMenu" element={<OnlineMenu/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Nav;
export {initialiseTimes};
export {updateTimes};
