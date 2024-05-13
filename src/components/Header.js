import {
  Button,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  VStack,
  chakra,
  Box,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const bg = useColorModeValue("white", "gray.800");
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  const mobileNav = useDisclosure();

  if (mobileNav.isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          mx={{ base: "2rem", md: "5rem", lg: "5rem" }}
        >
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <Text
                ml="2rem"
                sx={{ fontSize: "2rem", fontWeight: 700 }}
                style={{ color: "#ffae00" }}
              >
                <Text
                  fontFamily="Montserrat, sans-serif"
                  fontWeight="bold"
                  fontSize={{ base: "2xl", md: "4xl" }}
                  color="#FF7F00"
                  letterSpacing="widest"
                  textShadow="2px 2px 0 #5C5C5C"
                >
                  &lt;{" "}
                  <Box
                    className="title"
                    as="span"
                    fontSize="inherit"
                    color="#FF7F00"
                  >
                    AAKASH
                  </Box>{" "}
                  /&gt;
                </Text>
              </Text>
              <Image src="" />
            </chakra.a>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">
                <Link href="#skills" style={{ textDecoration: "none" }}>
                  Skills
                </Link>
              </Button>
              <Button variant="ghost">
                <Link href="#projects" style={{ textDecoration: "none" }}>
                  Projects
                </Link>
              </Button>
              <Button variant="ghost">
                <Link href="#about" style={{ textDecoration: "none" }}>
                  About
                </Link>
              </Button>
              <Button variant="ghost">
                <Link href="#contact" style={{ textDecoration: "none" }}>
                  Contact
                </Link>
              </Button>
            </HStack>
            <IconButton
              size="md"
              fontSize="lg"
              aria-label={`Switch to ${text} mode`}
              variant="ghost"
              color="current"
              ml={{
                base: "0",
                md: "3",
              }}
              onClick={toggleMode}
              icon={<SwitchIcon />}
            />
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button w="full" variant="ghost">
                  Home
                </Button>
                <Button w="full" variant="ghost">
                  About
                </Button>
                <Button w="full" variant="ghost">
                  Skills
                </Button>
                <Button w="full" variant="ghost">
                  Projects
                </Button>
                <Button w="full" variant="ghost">
                  Contact
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};

export default Header;
