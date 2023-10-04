import { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { useToast } from "@chakra-ui/react";
import { saveResponse } from "../services/contactFormService";

const useStyles = createUseStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1em",
    "& *": {
      fontSize: "1em",
    },
  },
});

const dividerBorder = "1px dashed lightgray";

const ContactForm = () => {
  const classes = useStyles();
  const toast = useToast();
  const [response, setResponse] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (type, value) => {
    setResponse((prevResponse) => ({ ...prevResponse, [type]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const saveResponseAndClearForm = async () => {
      await saveResponse(response);
      setResponse({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    };
    const task = saveResponseAndClearForm();

    toast.promise(task, {
      success: {
        title: "Success",
        description: "Your response have been submitted.",
      },
      error: {
        title: "Failed",
        description: "Unknown error occured",
      },
      loading: { title: "Sending..." },
    });
  };
  return (
    <Flex p="20px 10px 32px" fontFamily="'Ubuntu', sans-serif;" gap="24px">
      <Flex flex="2 0" flexDir="column">
        <Heading
          w="100%"
          pb="30px"
          as="h2"
          size="2xl"
          borderBottom={dividerBorder}
        >
          Contact
        </Heading>
        <Flex
          pt="9px"
          gap="2em"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text>You can get a hold of me by using the contact form below.</Text>
        </Flex>
        <Heading as="h3" m="25px 0 20px">
          Contact Form
        </Heading>
        <form className={classes.form} onSubmit={handleFormSubmit}>
          <FormControl isRequired>
            <FormLabel>Your Name (required)</FormLabel>
            <Input
              type="text"
              value={response.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Your Email (required)</FormLabel>
            <Input
              type="email"
              value={response.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Subject</FormLabel>
            <Input
              type="text"
              value={response.subject}
              onChange={(e) => handleChange("subject", e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea
              rows="6"
              value={response.message}
              onChange={(e) => handleChange("message", e.target.value)}
            />
          </FormControl>
          <Button type="submit" size="lg" w="fit-content" colorScheme="purple">
            Send
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};

export default ContactForm;
