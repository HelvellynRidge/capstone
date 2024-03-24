import { Link } from "react-router-dom";
import Hero from "./Hero";
import Footer from "./Footer";


function OnlineMenu() {
    return (
      <div className="aboutSection">
        <div>
        <Hero />
        </div>
        <div className="about">
          <article>
            <h1>Online Menu</h1>
            <p>We are sorry but the online menu is under construction.</p>
            <Link to="/">
              <button className="button">Back</button>
            </Link>
          </article>
          <div>
            <img src="restauranfood.jpg" alt="Restaurant Food"></img>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  export default OnlineMenu;