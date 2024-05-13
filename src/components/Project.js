import {
  Box,
  Flex,
  Button,
  chakra,
  SimpleGrid,
  Text,
  Image,
} from "@chakra-ui/react";

const ProjectSection = ({
  title,
  description,
  imageUrl,
  isImageOnRight,
  githubLink,
  liveLink,
}) => (
  <SimpleGrid
    alignItems="start"
    columns={{ base: 1, md: 2 }}
    mb="2rem"
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
      <Flex gap="1.4rem">
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
          onClick={() => window.open(liveLink, "_blank")}
        >
          Live
        </Button>

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
          onClick={() => window.open(githubLink, "_blank")}
        >
          Github
        </Button>
      </Flex>
    </Box>
    <Image borderRadius="10px" src={imageUrl} alt="img" />
  </SimpleGrid>
);

const Project = () => {
  return (
    <Box id="projects" margin={{ base: "2rem", md: "5rem", lg: "5rem" }}>
      <Text
        sx={{
          textAlign: "center",
          fontSize: "3.2rem",
          fontWeight: "bold",
          my: "2rem",
        }}
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
            title="Social Media Application with integrated Socket"
            description="Connect with the people you love through this social media application. Built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, it features real-time chat functionality powered by Socket.IO, allowing users to communicate instantly."
            imageUrl="https://res.cloudinary.com/dnzxyvvqi/image/upload/v1714971425/Portfolio/esxqik4wy9fk2xt683k6.png"
            isImageOnRight={false}
            liveLink="https://ecommerce-beta-wheat.vercel.app/"
            githubLink="https://github.com/Aakash-325/ecommerce"
          />
          <ProjectSection
            title="Music Player built using MERN"
            description="Dive into the world of music with this React-based music player. Leveraging the power of the MERN (MongoDB, Express.js, React.js, Node.js) stack, this application allows you to enjoy your favorite tunes seamlessly. Whether you love coding or not, this player offers a user-friendly experience. "
            imageUrl="https://res.cloudinary.com/dnzxyvvqi/image/upload/v1714971419/Portfolio/kibxhgvaa26g5loiqc93.png"
            isImageOnRight={true}
            liveLink="https://reactplayer.netlify.app/"
            githubLink="https://github.com/Aakash-325/React-Music-Player"
          />
          <ProjectSection
            title="E-commerce Platform with Payment Gateway"
            description="Get the things you need with a single click through this e-commerce platform. Built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, it offers a seamless shopping experience. Integrated with Stripe for secure payments and smart search option make finding products easy."
            imageUrl="https://res.cloudinary.com/dnzxyvvqi/image/upload/v1714327710/Portfolio/Swift_Buy_iehjyr.png"
            isImageOnRight={false}
            liveLink="https://socialsync.vercel.app/"
            githubLink="https://github.com/Aakash-325/SocialSync"
          />
          <ProjectSection
            title="File Sharing Application"
            description="Share large files quickly and easily with this file-sharing application. Built with user convenience in mind, this application simplifies the process of sharing files. Whether it's documents, images, or videos, simply generate a link and share it with anyone you want."
            imageUrl="https://res.cloudinary.com/dnzxyvvqi/image/upload/v1715528760/Portfolio/hnh19uvodlne0zkqnhs2.png"
            isImageOnRight={true}
            liveLink="https://file8share.netlify.app"
            githubLink="https://github.com/Aakash-325/FileShare"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Project;
