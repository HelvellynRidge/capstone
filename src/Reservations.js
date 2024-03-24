import Hero from "./Hero";
import Footer from "./Footer";
import BookingForm from "./BookingForm";
import { BrowserRouter } from "react-router-dom";

function Reservations(props) {
    return (
    <div>
        <Hero />
        <div className="bookingFormContainer">
            <div>
              <h1>Make a Booking</h1>
              <BookingForm availableTimes={props.availableTimes} dispatchAvailableTimes={props.dispatchAvailableTimes} submitForm={props.submitForm} />            </div>
            <div>
            <img src="restauranfood.jpg" alt="Restaurant Food"></img>
            </div>
        </div>    
        <Footer />
      </div>
    );
  }
  export default Reservations;