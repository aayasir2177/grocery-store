import React from "react";
import CardApp from "./CardApp";
import {
  Box,
  Center,
  Heading,
  VStack,
  Wrap,
  WrapItem,
  useMediaQuery,
} from "@chakra-ui/react";

export default function Products({title, products}) {
  const [isLargerThanLG] = useMediaQuery("(min-width: 62em)");

  return (
    <div>
      <Center
        as="section"
        alignItems="center"
        my={5}
        py={16}
        bgColor={"gray.50"}
        px={isLargerThanLG ? "16" : "6"}
      >
        <VStack direction="column">
          <Box mb={6}>
            <Heading color={"gray.700"} fontSize="3xl">{title}</Heading>
          </Box>

          <Box>
            <Wrap
              justifyContent={"space-around"}
              alignItems="center"
              mx={"auto"}
              display="flex"
            >
              <WrapItem gap={6}>
                {products.map((product) => {
                  return (
                    <CardApp
                      price={product.price}
                      title={product.title}
                      img={product.img}
                    />
                  );
                })}
              </WrapItem>
            </Wrap>
          </Box>
        </VStack>
      </Center>
    </div>
  );
}
