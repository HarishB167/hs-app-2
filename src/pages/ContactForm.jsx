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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
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
            <Input type="text" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Your Email (required)</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Subject</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea rows="6" />
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
