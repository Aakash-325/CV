import React from 'react';
import { Flex, chakra, Icon } from '@chakra-ui/react';
import { BsFillSuitHeartFill } from "react-icons/bs";

const Footer = () => {
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
        alignItems="center" // Align icon and text vertically
        gap={1} // Add some space between icon and text
      >
        Made with <Icon as={BsFillSuitHeartFill} color="#EF4444" boxSize={6} /> by Aakash
      </chakra.p>
    </Flex>
  );
};

export default Footer;
