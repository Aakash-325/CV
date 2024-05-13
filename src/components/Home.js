import { Box, Text, Button, Flex, Icon, Link, Image } from "@chakra-ui/react";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import TextTypingAnimation from "./TextTypingAnimation";
import home2 from "../image/home2.png";
import Resume from "../image/Resume.pdf";

const Home = () => {
  return (
    <Box
      id="home"
      display="flex"
      margin={{ base: "2rem", md: "5rem", lg: "5rem" }}
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-between"
    >
      <Box>
        <Text
          className="home-text1"
          sx={{
            fontSize: { base: "16px", md: "16px", sm: "14px" },
            fontWeight: 700,
            my: "1rem",
          }}
        >
          Hello, there
        </Text>
        <Text
          sx={{
            fontSize: { base: "4.8rem", md: "5rem", sm: "3.7rem" },
            fontWeight: 700,
            lineHeight: 0.8,
          }}
        >
          It's Aakash
        </Text>
        <Text
          sx={{
            fontSize: { base: "2.6rem", md: "3.2rem", sm: "2.2rem" },
            fontWeight: 700,
          }}
        >
          And I am{" "}
          <span style={{ color: "#FF7F00" }}>
            <TextTypingAnimation text="Full Stack Developer" />
          </span>
        </Text>
        <Text mt={4} mb={8} fontSize={{ md: "lg" }}>
          Full Stack web developer using cutting edge technologies to develop{" "}
          <Box as="span" fontWeight="bold" color="#FF7F00">
            clean, elegant, and fast
          </Box>{" "}
          websites.
        </Text>
        <Flex gap={6}>
          <Link
            href="https://github.com/Aakash-325"
            target="_blank"
            _hover={{ transform: "scale(1.2) rotate(360deg)" }}
          >
            <Icon
              as={FaGithub}
              color="#FF7F00"
              boxSize={10}
              borderRadius="full"
              border="2px solid #FF7F00"
              p={1}
            />
          </Link>

          <Link
            href="https://www.linkedin.com/in/chaurasiya-akash-3b7512254/"
            target="_blank"
            _hover={{ transform: "scale(1.2) rotate(360deg)" }}
          >
            <Icon
              as={RxLinkedinLogo}
              color="#FF7F00"
              boxSize={10}
              borderRadius="full"
              border="2px solid #FF7F00"
              p={1}
            />
          </Link>
          <Link
            href="https://twitter.com/Akash_x_01"
            target="_blank"
            _hover={{ transform: "scale(1.2) rotate(360deg)" }}
          >
            <Icon
              as={AiFillTwitterCircle}
              color="#FF7F00"
              boxSize={10}
              borderRadius="full"
              border="2px solid #FF7F00"
              p={1}
            />
          </Link>
          <Link
            href="https://www.instagram.com/i_a_m_curse/"
            target="_blank"
            _hover={{ transform: "scale(1.2)  rotate(360deg)" }}
          >
            <Icon
              as={AiFillInstagram}
              color="#FF7F00"
              boxSize={10}
              borderRadius="full"
              border="2px solid #FF7F00"
              p={1}
            />
          </Link>
        </Flex>

        <br />
        <Button
          colorScheme="gray"
          size={{ base: "md", md: "lg" }}
          sx={{
            borderRadius: "8px",
            transition: "transform 0.3s ease-out",
            _hover: {
              transform: "scale(1.1)",
              bg: "#434242",
              borderColor: "#434242",
              color: "#fff",
            },
          }}
        >
          <Link
            href={Resume}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            Download CV
          </Link>
        </Button>
      </Box>
      <Box
        my="1rem"
        flexShrink={0}
        maxW="100%"
        display={{ base: "none", lg: "block" }}
      >
        <Image
          src={home2}
          name="Meow Meow"
          boxSize={{ base: "22rem", md: "lg" }}
        />
      </Box>
    </Box>
  );
};

export default Home;
