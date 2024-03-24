import { Box,Stack, VStack, HStack, Image, Heading, Text,useBreakpointValue, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCar } from "@fortawesome/free-solid-svg-icons";
import { hover } from "@testing-library/user-event/dist/hover";
import { useNavigate } from "react-router-dom";

const Card = ({ title, description, imageSrc }) => {

    const cardStyle = {
    backgroundColor: "#edefee",
    cursor: "pointer",
    borderRadius: "16",
    overflow: "hidden", 
    margin: "4px 16px 16px", 
    width: "200px",
    display: "flex",
    flexDirection:"column",
    _hover:   {
      backgroundColor: "#f4ce14"   },
  };

  const imageStyle = {
    boxSize: "95%", 
    objectFit: "cover", 
    borderRadius: "16",
    margin: "4px 4px 4px 4px", 
    alignItems: "center"
  };

  const descriptionStyle = {
    boxSize: "90%", 
    objectFit: "cover", 
    borderRadius: "16",
    margin: "0 8px", 
  };

  const navigate=useNavigate();

  const handleClick = () => {
    navigate("/OnlineMenu");
  }

  return (
   <Box {...cardStyle}  onClick={handleClick}>
      <Image
        src={imageSrc}
        alt={title}
        {...imageStyle}
      />
      <VStack spacing={4} p={4} alignItems="flex-start">
        <HStack justifyContent="space-between" alignItems="center">
          <Heading as="h3" size="md">
            {title}
          </Heading>
        </HStack>
        <Text {...descriptionStyle}>
          {description}
        </Text>
        <HStack spacing={2} alignItems="center">
          <Text fontSize="sm">Order a delivery</Text>
          <FontAwesomeIcon icon={faCar} size="1x" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;