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
            <p>We are expecting you at the Little Lemmon Restaurant</p>
          </article>
          <div>
            <img src="restauranfood.jpg" alt="Restaurant Food"></img>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  export default ConfirmedBooking;