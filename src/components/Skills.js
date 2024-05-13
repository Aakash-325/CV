import { Text, Box, SimpleGrid, Icon } from "@chakra-ui/react";
import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiPreact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiChakraui,
  SiGithub,
  SiJquery,
  SiTailwindcss,
  SiTypescript,
  SiGit,
  SiFirebase,
  SiCanva,
  SiNextdotjs,
  SiMysql,
  SiPython,
} from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";

const SkillItem = ({ icon, title }) => (
  <Box
    textAlign="center"
    py={6}
    transition="transform 0.3s ease-in-out"
    _hover={{ transform: "scale(1.2)" }}
  >
    <Icon as={icon} boxSize={20} color="#ff7f00" mb={4} />
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
        sx={{ textAlign: "center", fontSize: "3.2rem", fontWeight: "bold" }}
      >
        My <span style={{ color: "#FF7F00" }}>Skills</span>
      </Text>
      <SimpleGrid
        columns={{ base: 2, md: 4, lg: 6 }}
        gap="4"
        justifyContent="center"
        flexWrap="wrap"
      >
        <SkillItem icon={SiHtml5} title="HTML" />
        <SkillItem icon={SiCss3} title="CSS" />
        <SkillItem icon={RiJavascriptFill} title="JavaScript" />
        <SkillItem icon={SiPreact} title="ReactJs" />
        <SkillItem icon={SiNodedotjs} title="Node" />
        <SkillItem icon={SiMongodb} title="MongoDB" />
        <SkillItem icon={SiExpress} title="Express" />
        <SkillItem icon={SiChakraui} title="Chakra UI" />
        <SkillItem icon={SiGithub} title="Github" />
        <SkillItem icon={SiJquery} title="JQuery" />
        <SkillItem icon={SiTypescript} title="TypeScript" />
        <SkillItem icon={SiTailwindcss} title="Tailwind" />
        <SkillItem icon={SiFirebase} title="FireBase" />
        <SkillItem icon={SiGit} title="FireBase" />
        <SkillItem icon={SiCanva} title="Canva" />
        <SkillItem icon={SiNextdotjs} title="NextJs" />
        <SkillItem icon={SiMysql} title="Mysql" />
        <SkillItem icon={SiPython} title="Python" />
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
