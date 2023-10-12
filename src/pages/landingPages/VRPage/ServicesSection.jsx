import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import LongRightArrowIcon from "./LongRightArrowIcon";
import { gradientLight } from "./utils";
import imageCardEducation from "../../../assets/images/landing-pages/vr-page/card_education.png";
import imageCardOutdoor from "../../../assets/images/landing-pages/vr-page/card_outdoor.png";
import imageCardSelfCare from "../../../assets/images/landing-pages/vr-page/card_self_care.png";
import imageCardSimulation from "../../../assets/images/landing-pages/vr-page/card_simulation.png";

const Card = ({ image, title, text }) => {
  return (
    <Flex
      flexDir="column"
      maxW="250px"
      alignItems="center"
      p="24px 24px 40px"
      background="radial-gradient(circle, rgba(58,52,86,1) 0%, rgba(33,30,46,1) 100%);"
      borderRadius="40px"
    >
      <Image
        m="10px"
        boxShadow="0 0 0 10px rgba(0,0,0,0.3)"
        borderRadius="190px"
        src={image}
      />
      <hr style={{ borderColor: "white", width: "154px" }} />
      <Text fontSize="24px" fontWeight="bold">
        {title}
      </Text>
      <Text>{text}</Text>
      <Button
        mt="14px"
        p="20px 40px"
        w="fit-content"
        borderRadius="40px"
        background={gradientLight("90deg")}
      >
        TRY IT NOW
      </Button>
    </Flex>
  );
};

const ServicesSection = () => {
  const cards = [
    {
      image: imageCardSimulation,
      title: "SIMULATION",
      text: `Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae`,
    },
    {
      image: imageCardEducation,
      title: "EDUCATION",
      text: `Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae`,
    },
    {
      image: imageCardSelfCare,
      title: "SELF-CARE",
      text: `Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae`,
    },
    {
      image: imageCardOutdoor,
      title: "OUTDOOR",
      text: `Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae`,
    },
  ];

  return (
    <Flex mt="60px">
      <Grid
        w="100%"
        templateRows="auto 1fr"
        templateColumns="repeat(2, 1fr)"
        gap="40px"
        columnGap="80px"
      >
        <GridItem>
          <Flex flexDir="column" pl="50px">
            <Heading fontSize="40px">WHY BUILD</Heading>
            <Heading fontSize="40px" fontWeight="light">
              WITH HYDRA? <LongRightArrowIcon w="100px" h="45px" ml="15px" />
            </Heading>
          </Flex>
        </GridItem>
        <GridItem>
          Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae.
        </GridItem>
        <GridItem colSpan={2}>
          <Flex justifyContent="space-between" gap="10px">
            {cards.map((card) => (
              <Card {...card} />
            ))}
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default ServicesSection;
