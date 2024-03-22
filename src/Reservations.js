import Hero from "./Hero";
import Footer from "./Footer";
import BookingForm from "./BookingForm";
import { BrowserRouter } from "react-router-dom";

function Reservations(props) {
    return (
    <div className="reservationsSection">
        <Hero />
        <div>
          <h1>Make a Booking</h1>
        </div>
        <BookingForm availableTimes={props.availableTimes} dispatchAvailableTimes={props.dispatchAvailableTimes} submitForm={props.submitForm} />
        <Footer />
      </div>
    );
  }
  export default Reservations;