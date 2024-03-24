import { Box, Stack,VStack, Hstack } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import Card from "./Card";

const specialsList = [
  {
    image: "greeksalad.jpg",
    name: "Greek Salad",
    price: 12.99,
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
  },
  {
    image: "bruchetta.svg",
    name: "Bruschetta",
    price: 9.99,
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
  },
  {
   image: "lemondessert.jpg",
   name: "Lemon Dessert",
   price: 9.99,
   description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
 },
];

const SpecialsList = () => {
  return (
    <div className="specialsList">
      {specialsList.map((special) => (
        <Card
        title={special.name}
        description={special.description}
        imageSrc={special.image}
        />
        ))}
    </div>
  );
};

function Specials() {
  return (
    <div className="specialsSection">
      <div className="specialsTitle">
        <div>
          <h1>This Week's Specials</h1>
        </div>
        <div>
        <Link to="/OnlineMenu">
          <button className="button">Online Menu</button>
        </Link>
        </div>
      </div>
      <div className="specials">
        <SpecialsList />
      </div>
    </div>
  );
}

export default Specials;   