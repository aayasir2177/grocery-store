import Products from "./components/Products";
import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import CTA from "./components/CTA";
import React, { useRef } from "react";
import { useDisclosure, Box } from "@chakra-ui/react";
import DrawerComponent from "./components/DrawerComponent";
import Gallery from "./components/Gallery";
import Foo from "./components/Foo";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <Box>
      <Nav ref={btnRef} onOpen={onOpen} />

      <Hero />
      <Gallery />
      <Products title={"Groceries"}/>
      <Products title={"Beverages"} />

      <CTA />

      <Foo />

      <DrawerComponent isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </Box>
  );
}

export default App;
