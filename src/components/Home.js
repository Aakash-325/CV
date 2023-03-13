import { Box, Text, Button, Flex, Icon, Link, Image } from '@chakra-ui/react';
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import TextTypingAnimation from './TextTypingAnimation';
import home2 from "../image/home2.png"

const Home = () => {

    return (

        <Box id="home" display="flex" margin={{ base: "2rem", md: "2.5rem", lg: "5rem" }} flexDirection={{ base: "column", md: "row" }} justifyContent="space-between">
            <Box>
                <Text sx={{ fontSize: { base: "2.6rem", md: "3.2rem", sm: "2.2rem" }, fontWeight: 700 }}>
                    Hello, I'm
                </Text>
                <Text sx={{ fontSize: { base: "4.8rem", md: "5rem", sm: "3.7rem" }, fontWeight: 700, lineHeight: 0.8 }}>
                    Just Akash
                </Text>
                <Text sx={{ fontSize: { base: "2.6rem", md: "3.2rem", sm: "2.2rem" }, fontWeight: 700 }}>
                    And I am a <span style={{ color: "#ffae00" }}><TextTypingAnimation text="FFull Stack Developer"/></span>
                </Text>
                <br />
                <Text>
                    Full Stack web developer using cutting edge technologies to develop clean, elegant, and fast websites.
                </Text>
                <br />
                <Flex gap={6}>
                    <Link href='https://github.com/Aakash-325' target="_blank">
                        <Icon as={FaGithub} color="#ffae00" boxSize={10} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/chaurasiya-akash-3b7512254/" target="_blank" >
                        <Icon as={FaLinkedinIn} color="#ffae00" boxSize={10} />
                    </Link>
                    <Link href="https://twitter.com/Akash_x_01" target="_blank" >
                        <Icon as={FaTwitterSquare} color="#ffae00" boxSize={10} />
                    </Link>
                    <Link href="https://www.instagram.com/i_a_m_curse/" target="_blank">
                        <Icon as={FaInstagramSquare} color="#ffae00" boxSize={10} />
                    </Link>
                </Flex>
                <br />
                <Button colorScheme="gray" size='lg' sx={{ border: "1px solid #434242", transition: "transform 0.3s ease-out", _hover: { transform: "scale(1.1)" } }}>
                    Download CV
                </Button>
            </Box>
            <Box my="1rem" flexShrink="0" maxW="100%">
                <Image
                    src={home2}
                    name="Meow Meow"
                    boxSize='lg'
                />
            </Box>
        </Box>

    )
}

export default Home;