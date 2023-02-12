import Nav from "../components/Nav";
import Home from "../pages/Home";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";
import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";
import CartPage from "../pages/CartPage";
import Foo from "../components/Foo";

import { useRef } from "react";
import { useDisclosure, Box } from "@chakra-ui/react";
import DrawerComponent from "../components/DrawerComponent";

import { Route, Routes } from "react-router";
export default function Layout() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <div>
      <>
        <Nav ref={btnRef} onOpen={onOpen} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="contact" element={<ContactUsPage />} />
          <Route path="SignUpPage" element={<SignUpPage />} />
          <Route path="SignInPage" element={<SignInPage />} />
          <Route path="CartPage" element={<CartPage />} />
        </Routes>

        <DrawerComponent isOpen={isOpen} onClose={onClose} btnRef={btnRef} />

        <Foo />
      </>
    </div>
  );
}
