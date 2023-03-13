import { Avatar, Box, Button, Link, Text } from '@chakra-ui/react';
import React from 'react';
import about from "../image/about.jpg"

const About = () => {
    return (
        <Box id="about" margin={{ base: "2rem", md: "2.5rem", lg: "8rem" }} display="flex" flexDirection={{ base: "column", md: "row" }} gap="4rem" alignItems={{ md: "center" }} justifyContent={{ md: "center" }}>
            <Box my={{ base: "2rem", md: "0" }}>
                <Avatar
                    src={about}
                    name="Meow Meow"
                    boxSize={{ base: "11rem", md: "xs" }}
                />
            </Box>
            <Box>
                <Text sx={{ fontSize: "2.8rem", fontWeight: "bold" }}>About<span style={{ color: "#ffae00" }}>Me</span></Text>
                <Text sx={{ fontSize: "1.6rem", fontWeight: "bold" }}>Full Stack Developer!</Text>
                <br />
                <Text sx={{ fontSize: "1rem" }}>I'm a FullStack Web Developer, using cutting edge technologies to develop clean and elegant website. I'm currently working on the Diffrent projects. I love doing research and solving problems especially with my colleagues. I'm more curious to learn, work and have more experience as a FullStack Developer.</Text>
                <br />
                <Button src="#about" colorScheme="gray" size={{ base: "md", md: "lg" }} sx={{ border: "1px solid #434242", transition: "transform 0.3s ease-out", _hover: { transform: "scale(1.1)" } }}>
                    <Link href="#contact" style={{ textDecoration: 'none' }}>Let's Talk</Link>
                </Button>
            </Box>
        </Box>
    )
}

export default About;
