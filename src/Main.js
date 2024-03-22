import Hero from "./Hero";
import Specials from "./Specials";
import Footer from "./Footer";


function Main() {
  //const [availableTimes, setAvailableTimes] = useState(["17:00","19:00"]);  
  return (
      <div className="mainSection">
        <Hero />
        <Specials />
        <Footer />
      </div>
    );
  }
  export default Main;