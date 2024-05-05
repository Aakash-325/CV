import React from "react";
import { Flex, chakra } from "@chakra-ui/react";

const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      w="full"
      as="footer"
      flexDir={{
        base: "column",
        sm: "row",
      }}
      align="center"
      justify="center"
      px="6"
      py="4"
      bg="#ECF2FF"
      _dark={{
        bg: "#222222",
      }}
    >
      <chakra.p
        py={{
          base: "2",
          sm: "0",
        }}
        color="black"
        _dark={{
          color: "white",
        }}
        textAlign="center"
        display="flex"
        alignItems="center"
        gap={1}
      >
        copyright &copy; {currentYear} | Aakash
      </chakra.p>
    </Flex>
  );
};

export default Footer;
