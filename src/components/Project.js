import {
  Box,
  Flex,
  Button,
  chakra,
  SimpleGrid,
  Text,
  Image,
} from "@chakra-ui/react";

const ProjectSection = ({ title, description, imageUrl, isImageOnRight }) => (
  <SimpleGrid
    alignItems="start"
    columns={{ base: 1, md: 2 }}
    mb="1rem"
    spacingY={{ base: 10, md: 32 }}
    spacingX={{ base: 10, md: 24 }}
  >
    <Box
      order={{
        base: isImageOnRight ? "initial" : "2",
        md: isImageOnRight ? "initial" : "2",
      }}
    >
      <chakra.h2
        mb={4}
        fontSize={{ base: "3xl", md: "5xl" }}
        fontWeight="extrabold"
        letterSpacing="tight"
        textAlign={{ base: "center", md: "left" }}
        lineHeight={{ md: "shorter" }}
        textShadow="2px 0 currentcolor"
        bgGradient="linear(to-r, orange.300, red.500)"
        bgClip="text"
        color="transparent"
      >
        {title}
      </chakra.h2>
      <chakra.p
        mb={5}
        textAlign={{ base: "center", sm: "left" }}
        color="gray.600"
        _dark={{ color: "gray.400" }}
        fontSize={{ md: "lg" }}
      >
        {description}
      </chakra.p>
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
        Learn more
      </Button>
    </Box>
    <Image borderRadius="10px" src={imageUrl} alt="img" />
  </SimpleGrid>
);

const Project = () => {
  return (
    <Box id="projects" margin={{ base: "2rem", md: "5rem", lg: "5rem" }}>
      <Text
        sx={{ textAlign: "center", fontSize: "2.8rem", fontWeight: "bold" }}
      >
        Latest <span style={{ color: "#FF7F00" }}>Projects</span>
      </Text>
      <Flex
        bg="#edf3f8"
        _dark={{ bg: "#3e3e3e" }}
        w="full"
        justifyContent="center"
        alignItems="center"
      >
        <Box bg="white" _dark={{ bg: "gray.800" }} px={8} py={20} mx="auto">
          <ProjectSection
            title="Clear overview for efficient tracking"
            description="Handle your subscriptions and transactions efficiently with the clear overview in Dashboard. Features like the smart search option allow you to quickly find any data you’re looking for."
            imageUrl="https://res.cloudinary.com/dnzxyvvqi/image/upload/v1687667869/Portfolio/Online_Shopping_Colorful_Modern_Facebook_Cover_1_ivclqv.png"
            isImageOnRight={false}
          />
          <ProjectSection
            title="Decide how you integrate Payments"
            description="Love to code? Next to our ready-made and free plugins you can use our expansive yet simple API; decide how you integrate Payments and build advanced and reliable products yourself from scratch."
            imageUrl="https://res.cloudinary.com/dnzxyvvqi/image/upload/v1687667877/Portfolio/Online_Shopping_Colorful_Modern_Facebook_Cover_d0i1pn.png"
            isImageOnRight={true}
          />
          <ProjectSection
            title="Clear overview for efficient tracking"
            description="Handle your subscriptions and transactions efficiently with the clear overview in Dashboard. Features like the smart search option allow you to quickly find any data you’re looking for."
            imageUrl="https://res.cloudinary.com/dnzxyvvqi/image/upload/v1714327710/Portfolio/Swift_Buy_iehjyr.png"
            isImageOnRight={false}
          />
          <ProjectSection
            title="Decide how you integrate Payments"
            description="Love to code? Next to our ready-made and free plugins you can use our expansive yet simple API; decide how you integrate Payments and build advanced and reliable products yourself from scratch."
            imageUrl="https://res.cloudinary.com/dnzxyvvqi/image/upload/v1687667877/Portfolio/Online_Shopping_Colorful_Modern_Facebook_Cover_d0i1pn.png"
            isImageOnRight={true}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Project;
