import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { gradientLight } from "./utils";
import logoUnrealEngine from "../../../assets/images/landing-pages/vr-page/logos/logo_unreal_engine.png";
import logoUnity from "../../../assets/images/landing-pages/vr-page/logos/logo_unity.png";
import logoOculus from "../../../assets/images/landing-pages/vr-page/logos/logo_oculus.png";
import logoVive from "../../../assets/images/landing-pages/vr-page/logos/logo_vive.png";
import image from "../../../assets/images/landing-pages/vr-page/tech_section_image.png";

const TechSection = () => {
  return (
    <Flex mt="60px" flexDir="column">
      <Flex
        bg="gray"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        borderRadius="160px"
        p="108px 0 96px"
        pos="relative"
        backgroundImage={image}
        backgroundPosition="center"
      >
        <Text fontSize="36px" fontWeight="bold">
          TECHNOLOGIES & HARDWARE
        </Text>
        <Text fontSize="36px">USED BY HYDRA VR</Text>
        <Button
          pos="absolute"
          bottom="-30px"
          w="60px"
          h="60px"
          borderRadius="50%"
          background={gradientLight("90deg")}
          boxShadow="0 0 0 10px rgba(0,0,0,0.3)"
        >
          <ChevronDownIcon boxSize={20} />
        </Button>
      </Flex>
      <Flex justifyContent="space-around">
        <Image objectFit="contain" src={logoUnrealEngine} />
        <Image objectFit="contain" src={logoUnity} />
        <Image objectFit="contain" src={logoOculus} />
        <Image objectFit="contain" src={logoVive} />
      </Flex>
    </Flex>
  );
};

export default TechSection;
