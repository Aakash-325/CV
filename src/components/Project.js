import React, { useState } from 'react';
import { Box, Flex, Text, Image, Stack, HStack, Button, useDisclosure, Link } from '@chakra-ui/react';
import comingsoon from "../image/comingsoon.png";
import social from "../image/social.gif"
import blogimg from "../image/blogimg.png"

const Project = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const arrowStyles = {
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "white",
    _dark: {
      backgroundColor: "white",
      color: "black"
    },
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.3s ease",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    },
  };
  const slides = [
    {
      img: blogimg,
      label: "BlogApp",
      description: "A complete Blog Application with User Aothentication.",
      link: "https://animekayo.netlify.app/"
    },
    {
      img: social,
      label: "Second Slide",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: ""
    },
    {
      img: comingsoon,
      label: "Third Slide",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: ""
    },
    {
      img: comingsoon,
      label: "Fourth Slide",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: ""
    },
    {
      img: "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      label: "Fifth Slide",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: ""
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <Box id='projects'>
      <Text my="5rem" sx={{ textAlign: "center", fontSize: "2.8rem", fontWeight: "bold" }}>
        Latest <span style={{ color: "#FF7F00" }}>Project</span>
      </Text>
      <Box display="flex" margin={{ base: "2rem", md: "2.5rem", lg: "5rem" }} flexDirection={{ base: "column", md: "row" }} justifyContent="center">
        <Flex w={{ base: "xs", lg: "4xl", sm: "sm", md: "md" }} pos="relative" overflow="hidden">
          <Flex onMouseOver={onOpen} onMouseOut={onClose} transition="filter 0.01s"
            _hover={{ filter: "brightness(70%)" }} h={{ base: "240px", md: "280px", lg: "500px" }} w="full" {...carouselStyle}>
            {slides.map((slide, sid) => (
              <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none" position="relative">
                <Image src={slide.img} alt="carousel image" boxSize="full" backgroundSize="cover" />
                <Link href={slide.link} target="_blank">
                  <Button
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    colorScheme="yellow"
                    visibility={isOpen ? 'visible' : 'hidden'}
                    size='lg'
                    borderRadius="full"
                    width="8rem">
                    Visit
                  </Button>
                </Link>
                <Text color="white" fontSize="xs" p="8px 12px" pos="absolute" top="0">
                  {sid + 1} / {slidesCount}
                </Text>
                <Stack p="8px 12px" pos="absolute" bottom={{ base: "0", md: "24px" }} textAlign="center" w="full" mb="8" color="white">
                  <Text fontSize={{ base: "xl", md: "2xl", lg: "3xl" }} fontWeight="bold">
                    {slide.label}
                  </Text>
                  <Text fontSize={{ base: "sm", md: "lg", lg: "xl" }}>
                    {slide.description}
                  </Text>

                </Stack>
              </Box>
            ))}
          </Flex>
          <Text {...arrowStyles} left="0" onClick={prevSlide}>
            &#10094;
          </Text>
          <Text {...arrowStyles} right="0" onClick={nextSlide}>
            &#10095;
          </Text>
          <HStack justify="center" pos="absolute" bottom="8px" w="full">
            {Array.from({
              length: slidesCount,
            }).map((_, slide) => (
              <Box
                key={`dots-${slide}`}
                cursor="pointer"
                boxSize={["7px", null, "15px"]}
                m="0 2px"
                bg={currentSlide === slide ? "white" : "whiteAlpha.400"}
                rounded="50%"
                display="inline-block"
                transition="background-color 0.6s ease"
                _hover={{
                  bg: "whiteAlpha.700",
                }}
                onClick={() => setSlide(slide)}
              ></Box>
            ))}
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Project;