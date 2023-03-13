import { Box, Button, Icon, Link, Text } from '@chakra-ui/react'
import React from 'react';
import { ImHtmlFive } from "react-icons/im";
import { ImCss3 } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiNodedotjs } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiChakraui } from "react-icons/si";

const Card = (props) => {
    const iconMap = {
        ImHtmlFive,
        ImCss3,
        IoLogoJavascript,
        FaReact,
        SiNodedotjs,
        DiMongodb,
        SiExpress,
        SiChakraui
    };

    const IconComponent = iconMap[props.icon];

    return (
        <Box
            w="xs"
            bg="#1f242d"
            _dark={{
                bg: "#222222",
            }}
            shadow="lg"
            flexShrink={1}
            minW="200px"
            rounded="3xl"
            overflow="hidden"
            justifyContent="center"
            padding="30px"
            margin="10px"
            textAlign="center"
            transition="transform 0.3s ease-out"
            _hover={{
                transform: "translateY(-10px)",
            }}
        >
            <Icon as={IconComponent} color="#ffae00" boxSize={16} />
            <Text color="white" sx={{ fontSize: { base: "1.4rem", md: "1.4rem" }, fontWeight: 700 }}>{props.title}</Text>
            <Text color="white" my="4px" dangerouslySetInnerHTML={{ __html: props.text }} />
            <Button background="#434242" color='white' size='lg' sx={{ border: "1px solid #434242", transition: "transform 0.3s ease-out", borderRadius: "full", _hover: { transform: "scale(1.1)" } }}>
                <Link href={props.link} target="_blank" style={{ textDecoration: 'none' }}>
                    Read More
                </Link>
            </Button>
        </Box>
    )
}

export default Card;
