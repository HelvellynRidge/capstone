import { Link } from 'react-router-dom';

function Hero() {
    return (
      <header className="header">
       <article>
       <h1>Little Lemon</h1>
       <h2>Chicago</h2>
       <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
       <Link to="/Reservations">
       <button class="button">Reserve a table</button>
       </Link>
       </article>
       <div>
          <img src="MarioandAdrianA.jpg" alt="Mario and Adrian"></img>
       </div>
    </header>
    );
  }
  export default Hero;