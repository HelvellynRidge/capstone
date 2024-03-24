import {useState} from "react"; 
import  {submitAPI} from "./Api.js";
import { useNavigate } from "react-router-dom";


function BookingForm(props) {
    const [numberGuests, setNumberGuests] = useState("");
    const [reservationDate, setReservationDate] = useState(""); 
    const [reservationTime, setReservationTime] = useState(""); 
    const [occasion, setOccasion] = useState(""); 
    const availableTimes=props.availableTimes;
    const navigate=useNavigate();
    
    const getIsFormValid = () => { 
        return ( 
          numberGuests && 
          reservationDate && 
          reservationTime &&
          (numberGuests<11) 
        ); 
      }; 

    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.submitForm(e.target) === 1) {
            navigate("/ConfirmedBooking");
        };
    }

    return (
    <form className="form" 
        onSubmit={handleSubmit}>
    <div className="formLine">
    <label htmlFor="res-date">Choose date</label>
    <input type="date" id="res-date" aria-required="true" data-testid="res-date"
        value={reservationDate}
        onChange={(e) => { 
            setReservationDate(e.target.value);
            props.dispatchAvailableTimes(reservationDate);
        }}
    />
    </div>
    <div className="formLine">
    <label htmlFor="res-time">Choose time</label>
    <select id="res-time" aria-required="true"
        value={reservationTime}
        onChange={(e) => { 
            setReservationTime(e.target.value); 
    }}>
        {availableTimes.map((availableTime, index) => (
          <option key={index} value={availableTime}>{availableTime}</option>
        ))}
    </select>
    {!reservationTime ? ( 
   <div>
   <p>Specify a time.</p>
   </div>
   ) : null}
    </div>
    <div className="formLine">
    <label htmlFor="guests">Number of guests</label>
    <input type="number" placeholder="1" min="1" max="10" id="guests" aria-required="true"
        value={numberGuests}
        onChange={(e) => { 
            setNumberGuests(e.target.value); 
          }}
    />
    {numberGuests > 10 ? ( 
   <div>
   <p>No more than 10 guests.</p>
   </div> 
 ) : null}
    {!numberGuests ? ( 
   <div>
   <p>Specify the number of guests.</p>
   </div> 
 ) : null}


    </div>
    

    
    <div className="formLine"> 
    <label htmlFor="occasion">Occasion</label>
    <select id="occasion" aria-required="true"
        value={occasion}
        onChange={(e) => { 
            setOccasion(e.target.value); 
        }}>
        <option>No occasion</option>
        <option>Birthday</option>
        <option>Anniversary</option>
    </select>
    </div>
    <div className="formButton">
    <button className="button" type="submit" disabled={!getIsFormValid()}>
        Make your reservation
    </button>
    </div>
    </form>)
}
export default BookingForm;