import React from "react";
import { Text, Box, Grid, Textarea, Button } from "@chakra-ui/react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("working");

    emailjs
      .sendForm("gmail", "template_ls9f888", e.target, "FwcfmY5Y2E2SFNwVz")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form onSubmit={sendEmail}>
      <Box id="contact">
        <Text
          my="5rem"
          sx={{ textAlign: "center", fontSize: "3.2rem", fontWeight: "bold" }}
        >
          Contact <span style={{ color: "#FF7F00" }}>us</span>
        </Text>
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap="5rem"
          margin={{ base: "2rem", md: "5rem", lg: "5rem" }}
        >
          <Box>
            <Text
              my="2rem"
              sx={{
                fontSize: { base: "2.4rem", md: "2.8rem" },
                fontWeight: 700,
              }}
            >
              Get in touch
            </Text>
            <Text
              sx={{
                fontSize: { base: "1.2rem", md: "1.4rem" },
                fontWeight: 700,
              }}
            >
              aakashchaurasiya033@gmail.com
            </Text>
            <br />
            <Text fontSize={{ md: "lg" }}>
              We love to hear from our{" "}
              <span style={{ color: "#FF7F00", fontWeight: "bold" }}>
                visitors!
              </span>{" "}
              Whether you have a question about our services, a suggestion for
              improving our website, or just want to say hello, please feel free
              to reach out to us using one of the methods below.
            </Text>
            <br />
            <Text sx={{ fontSize: { base: "0.8rem", md: "1rem" } }}>
              Alternatively, you can use the contact form below to send us a
              message. We will do our best to respond to your inquiry within 24
              hours.
            </Text>
          </Box>
          <Box>
            <Grid templateRows="repeat(3, auto)" gap="3">
              <InputGroup>
                <InputLeftElement>
                  <FaUserAlt />
                </InputLeftElement>
                <Input
                  variant="filled"
                  placeholder="Name"
                  name="name"
                  focusBorderColor="grey"
                  size="lg"
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement>
                  <FaEnvelope />
                </InputLeftElement>
                <Input
                  variant="filled"
                  placeholder="Email"
                  name="email"
                  focusBorderColor="grey"
                  size="lg"
                />
              </InputGroup>
              <Textarea
                placeholder="What can we help you with?"
                height="16rem"
                focusBorderColor="grey"
                size="lg"
                name="message"
              />
            </Grid>
            <Button
              type="submit"
              my="1rem"
              colorScheme="gray"
              size={{ base: "md", md: "lg" }}
              sx={{
                border: "2px solid #434242",
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
              SUBMIT
            </Button>
          </Box>
        </Grid>
      </Box>
    </form>
  );
};

export default ContactUs;
