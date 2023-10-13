import {
  Button,
  Flex,
  FormControl,
  Grid,
  GridItem,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { gradientLight } from "./utils";

const OptInSection = () => {
  const inputStyle = {
    padding: "27px 42px",
    borderRadius: "40px",
    fontSize: "14px",
  };

  return (
    <Flex
      mt="70px"
      flexDir="column"
      p="90px 110px"
      alignItems="center"
      background="radial-gradient(circle, rgba(58,52,86,1) 0%, rgba(33,30,46,1) 100%);"
      borderRadius="100px"
    >
      <Heading fontSize="36px">JOIN HYDRA</Heading>
      <hr
        style={{
          height: "1px",
          minWidth: "300px",
          background: `linear-gradient(55deg, rgba(52,48,69,1) 0%,
             rgba(192,183,232,1) 25%, rgba(129,118,175,1) 75%,
              rgba(52,48,69,1) 100%)`,
        }}
      />
      <Text fontSize="36px">Let's Build Your VR Experience</Text>
      <form style={{ width: "100%", marginTop: "35px" }}>
        <Grid
          w="100%"
          templateRows="1fr 1fr 1fr auto 1fr"
          templateColumns="repeat(2, 1fr)"
          columnGap="10px"
          rowGap="40px"
        >
          <GridItem>
            <FormControl>
              <Input
                style={inputStyle}
                type="text"
                placeholder="First Name"
                required
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <Input
                style={inputStyle}
                type="text"
                placeholder="Last Name"
                required
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <Input
                style={inputStyle}
                type="email"
                placeholder="Email"
                required
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <Input
                style={inputStyle}
                type="tel"
                placeholder="Phone Number"
                required
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <Input
                style={inputStyle}
                type="text"
                placeholder="Subject"
                required
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <Textarea
                style={inputStyle}
                rows={5}
                placeholder="Tell Us Something..."
                required
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2} display="flex" justifyContent="center">
            <Button
              mt="14px"
              p="20px 40px"
              w="fit-content"
              borderRadius="40px"
              type="submit"
              background={gradientLight("90deg")}
            >
              SEND TO HYDRA
            </Button>
          </GridItem>
        </Grid>
      </form>
    </Flex>
  );
};

export default OptInSection;
