import { Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import LongRightArrowIcon from "./LongRightArrowIcon";
import { gradientLight } from "./utils";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const cards = [
  { title: "01", text: "3D Conception & Design" },
  { title: "02", text: "Interaction Design" },
  { title: "03", text: "VR World User Testing" },
  { title: "04", text: "Hydra VR Deploy" },
];

const ProcessSection = () => {
  return (
    <Flex>
      <Grid
        w="100%"
        templateRows="auto 1fr"
        templateColumns="repeat(2, 1fr)"
        gap="40px"
        columnGap="80px"
      >
        <GridItem>
          <Flex flexDir="column" pl="50px">
            <Heading fontSize="40px">HOW WE BUILD</Heading>
            <Heading fontSize="40px" fontWeight="light">
              WITH HYDRA VR? <LongRightArrowIcon w="100px" h="45px" ml="15px" />
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
          <Flex justifyContent="space-around">
            {cards.map((item, idx) => (
              <Flex flexDir="column" alignItems="center" gap="45px">
                <Flex
                  w="150px"
                  h="150px"
                  borderRadius="100%"
                  background={gradientLight("90deg")}
                  alignItems="center"
                  justifyContent="center"
                  boxShadow="0 0 0 20px rgba(0,0,0,0.3)"
                >
                  <Text m="0" fontSize="64px" fontWeight="bold" color="#343045">
                    {item.title}
                  </Text>
                </Flex>
                <Flex alignItems="center">
                  <ArrowForwardIcon boxSize="30px" />
                  <Text
                    textAlign="center"
                    maxW="200px"
                    fontSize="24px"
                    fontWeight="bold"
                  >
                    {item.text}
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default ProcessSection;
