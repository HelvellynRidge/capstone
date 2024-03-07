import { Box, HStack } from "@chakra-ui/react";

const specialsList = [
  {
    image: "greeksalad.jpg",
    name: "Greek Salad",
    price: 9.99,
    description: "blabla",
  },
  {
    image: "bruchetta.svg",
    name: "Bruschetta",
    price: 9.99,
    description: "blabla",
  },
];

const SpecialsList = () => {
  return (
    <HStack spacing={8}>
      {specialsList.map(({ image, name, price, description }) => (
        <Box key={name} maxW="20%" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <img src={image} alt={name} width="100%" height="auto" />
          <Box p="4">
            <Box fontWeight="semibold" fontSize="lg" mt="1">
              {name}
            </Box>
            <Box>{description}</Box>
            <Box>
              <strong>${price.toFixed(2)}</strong>
            </Box>
          </Box>
        </Box>
      ))}
    </HStack>
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
          <button className="button">Online Menu</button>
        </div>
      </div>
      <div className="specials">
        <SpecialsList />
      </div>
    </div>
  );
}

export default Specials;   