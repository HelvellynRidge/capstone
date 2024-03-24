import Hero from "./Hero";
import Footer from "./Footer";

function ConfirmedBooking() {
    return (
      <div className="bookingConfirmedSection">
        <div>
        <Hero />
        </div>
        <div className="about">
          <article>
            <h3>Your booking has been confirmed</h3>
            <p>Thank you for your booking. We are expecting you at the Little Lemmon Restaurant.</p>
            <address className="footerSegment">
            <p>
                123 Main Street<br/>
                Chicago, IL 60601<br/>
                United States
            </p>
        </address>
          </article>
          <div>
            <img src="restaurant.jpg" alt="Restaurant inside"></img>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  export default ConfirmedBooking;