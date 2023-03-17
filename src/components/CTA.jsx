import {
  Flex,
  Spacer,
  Image,
  Text,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";

const CTA = () => {
  const [isLargerThanLG] = useMediaQuery("(min-width: 62em)");

  return (
    <Flex
      width="full"
      minHeight="70vh"
      alignItems="center"
      px={isLargerThanLG ? "16" : "6"}
      py="16"
      justifyContent="center"
      flexDirection={isLargerThanLG ? "row" : "column"}
    >
      <Flex
        w={isLargerThanLG ? "40%" : "full"}
        mb={isLargerThanLG ? "0" : "6"}
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={
            "https://unsplash.com/photos/XjnUkLNM6O0/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjF8fGZvb2QlMjBpdGVtc3xlbnwwfDB8fHwxNjc2MTkzNTk2&force=true&w=1920"
          }
          alt="Chakra Team"
          w="full"
        />
      </Flex>
      <Spacer />
      <Flex
        w={isLargerThanLG ? "60%" : "full"}
        flexDirection="column"
        ml={isLargerThanLG ? "7" : "0"}
      >
        <Text
          fontSize={isLargerThanLG ? "5xl" : "4xl"}
          fontWeight="bold"
          color={"green.400"}
        >
          We sell, We deliver
        </Text>

        <Text mb="6" opacity="0.8" color={"gray.600"}>
          Saylani is a customer oriented e-commerce platform that aims to take
          care of shopping needs in a SMART way; making life easier for all
          customers. We are Pakistan’s premier online grocery store with
          services initially in Karachi. Our aim is to enhance the online
          community by becoming the nations favorite e commerce platform through
          our very own SMART fundamentals.
        </Text>

        <Button width="200px" size="lg" colorScheme="green">
          Order Now
        </Button>
      </Flex>
    </Flex>
  );
};

export default CTA;
