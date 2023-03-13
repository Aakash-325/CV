import { Text, Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import Card from './Card';

const Skills = () => {
    return (
        <Box id="skills">
            <Text my="5rem" sx={{ textAlign: "center", fontSize: "2.8rem", fontWeight: "bold" }}>
                My <span style={{ color: "#ffae00" }}>Skills</span>
            </Text>
            <Box>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="1rem" display="flex" justifyContent="space-around" flexWrap="wrap">
                    <Card
                        icon="ImHtmlFive"
                        title="HTML"
                        text="<strong>Hyper Text Markup Language</strong> (HTML) is a standardized system for tagging text files to achieve font,colour, graphic, and hyperlink effects on World Wide Web pages."
                        link="https://developer.mozilla.org/en-US/docs/Web/HTML"
                    />
                    <Card
                        icon="ImCss3"
                        title="CSS"
                        text=" <strong>Cascading Style Sheets</strong>(CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS describes how elements should be . . ."
                        link="https://developer.mozilla.org/en-US/docs/Web/CSS"
                    />
                    <Card
                        icon="IoLogoJavascript"
                        title="Javascript"
                        text="<strong>Javascript</strong>(HTML)  is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there . . ."
                        link="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript"
                    />
                    <Card
                        icon="FaReact"
                        title="React"
                        text="<strong>React</strong> is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a . . ."
                        linl="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
                    />
                    <Card
                        icon="SiNodedotjs"
                        title="Node"
                        text="<strong>Node.js</strong>What is NodeJS used for? Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009."
                        link="https://nodejs.org/en/docs/"
                    />
                    <Card
                        icon="DiMongodb"
                        title="mongoDB"
                        text="<strong>MongoDB</strong> is a document database used to build highly available and scalable internet applications. With its flexible schema approach, it's popular with development teams using agile methodologies."
                        link="https://www.mongodb.com/docs/manual/core/document/"
                    />
                    <Card
                        icon="SiExpress "
                        title="Express"
                        text="<strong>Express</strong> is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application."
                        link="https://expressjs.com/en/5x/api.html"
                    />
                    <Card
                        icon="SiChakraui "
                        title="Chakra UI"
                        text="<strong>Chakra UI</strong> is a more robust, layout-focused library that also provides developers with UI components similar to those that Material UI provides, but has a greater focus on the creation of flexible, composable, and scalable code."
                        link="https://chakra-ui.com/docs/components"
                    />
                </SimpleGrid>
            </Box>
        </Box>
    )
}

export default Skills;