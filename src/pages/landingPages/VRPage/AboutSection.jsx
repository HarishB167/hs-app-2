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
import image from "../../../assets/images/landing-pages/vr-page/pexels-shvets-production-7562014 1.png";
import { gradientLight } from "./utils";

const AboutSection = () => {
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
            <Heading fontSize="40px">INTRODUCTION</Heading>
            <Heading fontSize="40px" fontWeight="light">
              TO HYDRA VR <LongRightArrowIcon w="100px" h="45px" ml="15px" />
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
        <GridItem>
          <Image borderRadius="240px 100px 240px 100px" src={image} />
        </GridItem>
        <GridItem>
          <Flex flexDir="column" justifyContent="center" h="100%">
            <Heading fontSize="40px">ABOUT</Heading>
            <Heading fontSize="40px" fontWeight="light">
              HYDRA VR
            </Heading>
            <Text my="40px">
              Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
              mattis rhoncus urna neque viverra justo. Vivamus at augue eget
              arcu dictum. Ultrices gravida dictum fusce ut placerat orci.
              Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam
              faucibus purus in massa. Est placerat in egestas erat imperdiet
              sed. Consequat semper viverra nam libero justo laoreet sit amet.
              Aliquam etiam erat velit scelerisque in dictum non consectetur a.
              Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor
              orci dapibus. Sem nulla pha retra diam sit amet nisl suscipit
              adipiscing bibendum. Leo a diam sollicitudi n tempor.
            </Text>
            <Button
              p="20px 40px"
              w="fit-content"
              borderRadius="40px"
              background={gradientLight("90deg")}
            >
              LET'S GET IN TOUCH
            </Button>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default AboutSection;
