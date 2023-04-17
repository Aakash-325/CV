import { Text, Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import Card from './Card';

const Skills = () => {
    return (
        <Box id="skills" margin={{ base: '2rem', md: '2.5rem', lg: '4rem' }}>
            <Text my="5rem" sx={{ textAlign: 'center', fontSize: '2.8rem', fontWeight: 'bold' }}>
                My <span style={{ color: '#FF7F00' }}>Skills</span>
            </Text>
            <Box>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="0.5rem" justifyContent="center" flexWrap="wrap">
                    <Card
                        icon="ImHtmlFive"
                        title="HTML"
                        text="<strong>Hyper Text Markup Language</strong> (HTML) is a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages."
                        link="https://developer.mozilla.org/en-US/docs/Web/HTML"
                    />
                    <Card
                        icon="ImCss3"
                        title="CSS"
                        text="<strong>Cascading Style Sheets</strong> (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS describes how elements should be . . ."
                        link="https://developer.mozilla.org/en-US/docs/Web/CSS"
                    />
                    <Card
                        icon="IoLogoJavascript"
                        title="JavaScript"
                        text="<strong>JavaScript</strong> is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there . . ."
                        link="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript"
                    />
                    <Card
                        icon="FaReact"
                        title="React"
                        text="<strong>React</strong> is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a . . ."
                        link="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
                    />
                    <Card
                        icon="SiNodedotjs"
                        title="Node.js"
                        text="<strong>Node.js</strong> is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser."
                        link="https://nodejs.org/en/docs/"
                    />
                    <Card
                        icon="DiMongodb"
                        title="MongoDB"
                        text="<strong>MongoDB</strong> is a document database used to build scalable internet applications. With its flexibility, it's popular with development teams using agile methodologies."
                        link="https://www.mongodb.com/docs/manual/core/document/"
                    />

                    <Card
                        icon="SiExpress "
                        title="Express"
                        text="<strong>Express</strong> is a node js web framework that provides features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application."
                        link="https://expressjs.com/en/5x/api.html"
                    />
                    <Card
                        icon="SiChakraui "
                        title="Chakra UI"
                        text="<strong>Chakra UI</strong> is a layout-focused library that provides developers with UI components similar to Material UI, but has a greater focus on the creation of flexible and scalable code."
                        link="https://chakra-ui.com/docs/components"
                    />
                </SimpleGrid>
            </Box>
        </Box>
    )
}

export default Skills;