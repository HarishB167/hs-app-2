import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { ArrowForwardIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";

import image from "../../../assets/images/landing-pages/vr-page/pexels-michelangelo-buonarroti.png";
import LocationIcon from "./LocationIcon";
import { gradientLight } from "./utils";

const Hr = () => {
  return (
    <hr
      style={{
        height: "auto",
        borderLeft: "2px solid #C0B7E8",
        margin: "0",
      }}
    />
  );
};

const TextWithGradient = ({ children, gradient }) => {
  return (
    <span
      style={{
        background: gradient,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        display: "inline-block",
      }}
    >
      {children}
    </span>
  );
};

const HeroSection = () => {
  return (
    <Flex pt="20px" flexDir="column">
      <Flex justifyContent="space-between">
        <Flex flexDir="column" flex="1 0" gap="36px" maxW="40%">
          <Heading fontSize="40px">
            <TextWithGradient gradient={gradientLight("55deg")}>
              Dive
            </TextWithGradient>{" "}
            into The Depths Of{" "}
            <TextWithGradient gradient={gradientLight("55deg")}>
              Virtual Reality
            </TextWithGradient>
          </Heading>
          <Text fontSize="16px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
            Lectus mauris eros in vitae .
          </Text>
          <Flex gap="40px" alignItems="center">
            <Button
              p="20px 40px"
              borderRadius="40px"
              background={gradientLight("90deg")}
            >
              BUILD YOUR WORLD
            </Button>
            <ArrowForwardIcon boxSize="40px" />
          </Flex>
        </Flex>
        <Image
          objectFit="scale-down"
          w="33%"
          margin="0 50px"
          src={image}
          borderRadius="100px 100px 100px 240px"
          boxShadow="0px 0px 16px rgba(0,0,0,0.80)"
          height="fit-content"
        />
      </Flex>
      <Flex
        borderRadius="90px"
        p="25px 40px"
        background="radial-gradient(circle, rgba(58,52,86,1) 0%, rgba(33,30,46,1) 100%);"
        my="auto"
        mt="30px"
        justifyContent="space-around"
        gap="30px"
        minH="50px"
      >
        <Flex alignItems="center">
          <LocationIcon boxSize="70px" />
          <Flex ml="10px" flexDir="column">
            <Text as="h3">Pay Us a Visit</Text>
            <Text>Union St, Seattle, WA 98101, United States</Text>
          </Flex>
        </Flex>
        <Hr />
        <Flex alignItems="center">
          <PhoneIcon boxSize="70px" />
          <Flex ml="10px" flexDir="column">
            <Text as="h3">Give Us a Call</Text>
            <Text>(110) 1111-1010</Text>
          </Flex>
        </Flex>
        <Hr />
        <Flex alignItems="center">
          <EmailIcon boxSize="70px" />
          <Flex ml="10px" flexDir="column">
            <Text as="h3">Send Us a Message</Text>
            <Text>Contact@HydraVTech.com</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HeroSection;
