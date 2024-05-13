import { Avatar, Box, Button, Link, Text } from "@chakra-ui/react";
import React from "react";
import about from "../image/about.jpg";

const About = () => {
  return (
    <Box
      id="about"
      margin={{ base: "2rem", md: "5rem", lg: "5rem" }}
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      gap="4rem"
      alignItems={{ md: "center" }}
      justifyContent={{ md: "center" }}
    >
      <Box my={{ base: "2rem", md: "8rem" }} ml="70px">
        <Avatar
          src={about}
          name="Meow Meow"
          boxSize={{ base: "11rem", md: "xs" }}
        />
      </Box>
      <Box>
        <Text sx={{ fontSize: "3.2rem", fontWeight: "bold" }}>
          About <span style={{ color: "#FF7F00" }}>Me</span>
        </Text>
        <Text sx={{ fontSize: "1.6rem", fontWeight: "bold" }}>
          Full Stack Developer!
        </Text>
        <br />
        <Text fontSize={{ md: "lg" }}>
          I'm a{" "}
          <span style={{ color: "#FF7F00", fontWeight: "bold" }}>
            FullStack Web Developer
          </span>
          , using cutting edge technologies to develop clean and elegant
          websites. I'm currently working on different projects. I love doing
          research and solving problems, especially with my colleagues. I'm
          always curious to learn, work and gain more experience as a FullStack
          Developer.
        </Text>
        <br />
        <Link href="#contact" style={{ textDecoration: "none" }}>
          <Button
            src="#about"
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
            Let's Talk
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
export default About;
