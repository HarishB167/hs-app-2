import { Flex } from "@chakra-ui/react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import TechSection from "./TechSection";
import ProcessSection from "./ProcessSection";
import OptInSection from "./OptInSection";

const bgColor = "#302C42";

const VRPage = () => {
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
        <ProcessSection />
        <OptInSection />
      </Flex>
    </Flex>
  );
};

export default VRPage;
