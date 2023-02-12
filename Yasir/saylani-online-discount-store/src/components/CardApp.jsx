import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { HiShoppingCart } from "react-icons/hi";

export default function CardApp({ price, title, img }) {
  return (
    <Box maxW="220px" bg="white" p="4" bgColor={"gray.100"} borderRadius="md">
      <Image
        src={img}
        alt="Meat"
        borderRadius="lg"
        objectFit="cover"
        mx="auto"
      />

      <Heading my="4" size="sm">
        {price}
      </Heading>
      <Text fontSize={"sm"}>{title}</Text>

      <Button
        rightIcon={<HiShoppingCart />}
        colorScheme="green"
        variant="solid"
        size={"sm"}
        w="full"
        mt={5}
      >
        Add to Cart
      </Button>
    </Box>
  );
}
