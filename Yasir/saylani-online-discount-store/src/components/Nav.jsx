import React, { useState } from "react";
import Logo from "../assets/logo.png";

import {
  Flex,
  Spacer,
  IconButton,
  useMediaQuery,
  Menu,
  MenuButton,
  Button,
  Image,
} from "@chakra-ui/react";
import { FaAlignJustify } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";

const Nav = ({ onOpen, ref }) => {
  const [scroll, setScroll] = useState(false);
  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");

  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  window.addEventListener("scroll", changeScroll);

  return (
    <Flex
      h="12vh"
      alignItems="center"
      p="6"
      boxShadow={scroll ? "base" : "none"}
      position="sticky"
      top="0"
      zIndex="sticky"
      w="full"
      bg={"white"}
    >
      <Image w={60} src={Logo} />

      <Spacer />

      <Flex alignItems="center" gap={3}>
        {isLargerThanMD ? (
          <>
            <Menu>
              <MenuButton
                as={Button}
                variant="ghost"
                colorScheme="green"
                size="sm"
              >
                Home
              </MenuButton>
              <MenuButton
                as={Button}
                variant="ghost"
                colorScheme="green"
                size="sm"
              >
                Grocery
              </MenuButton>
              <MenuButton
                as={Button}
                variant="ghost"
                colorScheme="green"
                size="sm"
              >
                About
              </MenuButton>
              <MenuButton
                as={Button}
                variant="ghost"
                colorScheme="green"
                size="sm"
              >
                Contact
              </MenuButton>
              <MenuButton
                as={Button}
                variant="outline"
                colorScheme="green"
                size="sm"
              >
                Sign Up
              </MenuButton>
              <MenuButton
                as={Button}
                variant="solid"
                colorScheme="green"
                size="sm"
              >
                Login
              </MenuButton>
            </Menu>
          </>
        ) : (
          <IconButton ref={ref} onClick={onOpen}>
            <Icon as={FaAlignJustify} />
          </IconButton>
        )}
      </Flex>
    </Flex>
  );
};

export default Nav;
