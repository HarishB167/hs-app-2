import { createUseStyles } from "react-jss";
import { Flex } from "@chakra-ui/react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import TechSection from "./TechSection";

const bgColor = "#302C42";

const useStyles = createUseStyles({
  container: {},
});

const VRPage = () => {
  const classes = useStyles();

  return (
    <Flex
      bgColor={bgColor}
      minH="100vh"
      color="white"
      flexDir="column"
      fontSize="12px"
      fontFamily="'Montserrat', sans-serif"
    >
      <Flex w="100%" p="15px 84px" flexDir="column">
        <NavBar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TechSection />
      </Flex>
    </Flex>
  );
};

export default VRPage;
