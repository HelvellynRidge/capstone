import Hero from "./Hero";

function About() {
    return (
      <div className="aboutSection">
        <div>
        <Hero />
        </div>
        <div className="about">
          <div>
            <h3>About Little Lemon</h3>
            <p>The little Lemon Restaurant is a family-owned Italian restaurant in Chicago.</p>
          </div>
          <div>
            <img src="MarioandAdrianA.jpg" alt="Mario and Adrian" style={{ width: '50%', height: 'auto' }}></img>
          </div>
        </div>
      </div>
    );
  }
  export default About;