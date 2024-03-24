import Hero from "./Hero";
import Footer from "./Footer";

function About() {
    return (
      <div className="aboutSection">
        <div>
        <Hero />
        </div>
        <div className="about">
          <article>
            <h3>About Little Lemon</h3>
            <p>Welcome to Little Lemon, where traditional Italian flavors meet contemporary culinary innovation right in the heart of Chicago. <br/><br/>

Nestled in the vibrant streets of the Windy City, Little Lemon is more than just a restaurant; it's an immersive journey through the rich tapestry of Italian cuisine, infused with a refreshing modern twist. <br/><br/>

Our story begins with a deep-rooted passion for authentic Italian flavors and a commitment to redefining traditional recipes with a creative flair. From the moment you step through our doors, you'll be greeted by the tantalizing aromas of freshly baked focaccia, simmering sauces, and handcrafted pasta. <br/><br/>

At Little Lemon, we take pride in sourcing the finest, locally sourced ingredients, ensuring that every dish bursts with flavor and authenticity. Whether it's our signature wood-fired pizzas, handmade ravioli, or succulent seafood dishes, each plate is a celebration of Italy's culinary heritage.<br/><br/>

But we don't stop there. Our talented chefs are constantly exploring new techniques and ingredients, infusing classic recipes with a modern twist that surprises and delights the palate. From innovative flavor combinations to playful presentations, every dish at Little Lemon is a culinary masterpiece, crafted with love and attention to detail.<br/><br/>

Beyond the food, our inviting atmosphere and attentive service create the perfect backdrop for a memorable dining experience. Whether you're gathering with friends for a leisurely lunch, enjoying a romantic dinner for two, or hosting a special celebration, our team is dedicated to ensuring that every moment spent at Little Lemon is nothing short of extraordinary.<br/><br/>

So come join us and embark on a culinary journey through the flavors of Italy, reimagined for the modern palate. Buon appetito!</p>
          </article>
          <div>
            <img src="restauranfood.jpg" alt="Restaurant Food"></img>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  export default About;