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
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e.target);
        navigate("/ConfirmedBooking");
    }

    return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
        onSubmit={handleSubmit}>
    <label htmlFor="res-date">Choose date</label>
    <input type="date" id="res-date" data-testid="res-date"
        value={reservationDate}
        onChange={(e) => { 
            setReservationDate(e.target.value);
            props.dispatchAvailableTimes(reservationDate);
        }}
    />
    <label htmlFor="res-time">Choose time</label>
    <select id="res-time"
        value={reservationTime}
        onChange={(e) => { 
            setReservationTime(e.target.value); 
    }}>
        {availableTimes.map((availableTime, index) => (
          <option key={index} value={availableTime}>{availableTime}</option>
        ))}
    </select>
    <label htmlFor="guests">Number of guests</label>
    <input type="number" placeholder="1" min="1" max="10" id="guests"
        value={numberGuests}
        onChange={(e) => { 
            setNumberGuests(e.target.value); 
          }}
    />
    <label htmlFor="occasion">Occasion</label>
    <select id="occasion"
        value={occasion}
        onChange={(e) => { 
            setOccasion(e.target.value); 
        }}>
        <option>Birthday</option>
        <option>Anniversary</option>
    </select>
    <input type="submit" value="Make Your reservation" />
    </form>)
}
export default BookingForm;