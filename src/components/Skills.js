import { Text, Box, SimpleGrid, Icon } from "@chakra-ui/react";
import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPreact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiChakraui,
} from "react-icons/si";

const SkillItem = ({ icon, title }) => (
  <Box
    textAlign="center"
    py={6}
    transition="transform 0.3s ease-in-out" // Added transition
    _hover={{ transform: "scale(1.1)" }} // Added hover effect
  >
    <Icon as={icon} boxSize={24} color="#ff7f00" mb={4} />
    <Text fontSize="lg" fontWeight="bold">
      {title}
    </Text>
  </Box>
);

const Skills = () => {
  return (
    <Box id="skills" margin={{ base: "2rem", md: "5rem", lg: "5rem" }}>
      <Text
        my="5rem"
        sx={{ textAlign: "center", fontSize: "2.8rem", fontWeight: "bold" }}
      >
        My <span style={{ color: "#FF7F00" }}>Skills</span>
      </Text>
      <SimpleGrid
        columns={{ base: 2, md: 4, lg: 8 }}
        gap="4"
        justifyContent="center"
        flexWrap="wrap"
      >
        <SkillItem icon={SiHtml5} title="HTML" />
        <SkillItem icon={SiCss3} title="CSS" />
        <SkillItem icon={SiJavascript} title="JavaScript" />
        <SkillItem icon={SiPreact} title="React" />
        <SkillItem icon={SiNodedotjs} title="Node.js" />
        <SkillItem icon={SiMongodb} title="MongoDB" />
        <SkillItem icon={SiExpress} title="Express" />
        <SkillItem icon={SiChakraui} title="Chakra UI" />
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
