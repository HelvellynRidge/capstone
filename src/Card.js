import { Box,Stack, VStack, HStack, Image, Heading, Text,useBreakpointValue } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCar } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {

    const cardStyle = {
    backgroundColor: "#edefee",
    cursor: "pointer",
    borderRadius: "16",
    overflow: "hidden", // Ensure the border-radius applies to the image
    margin: "4px 16px 16px", // Adjust the margin as needed
    width: "200px",
    display: "flex",
    flexDirection:"column",
  };

  const imageStyle = {
    boxSize: "95%", // Adjust the box size and margin
    objectFit: "cover", // Maintain aspect ratio while covering the box
    borderRadius: "16",
    margin: "4px 4px 4px 4px", // Adjust the margin as needed
    alignItems: "center"
  };

  const descriptionStyle = {
    boxSize: "90%", // Adjust the box size and margin
    objectFit: "cover", // Maintain aspect ratio while covering the box
    borderRadius: "16",
    margin: "0 8px", // Adjust the margin as needed
  };

  return (
    <Box {...cardStyle}>
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