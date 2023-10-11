import { Button, Flex, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { gradientLight } from "./utils";
import logo from "../../../assets/images/landing-pages/vr-page/vr-landing-page-logo.svg";

const NavBar = () => {
  return (
    <Flex
      // border="1px solid white"
      w="100%"
      h="fit-content"
      justifyContent="space-between"
      alignItems="center"
      p="10px"
    >
      <Image src={logo} maxH="103px" margin="0 10px" />
      <Flex gap="41px" margin="initial auto">
        <NavLink to="about">ABOUT</NavLink>
        <NavLink to="services">SERVICES</NavLink>
        <NavLink to="technologies">TECHNOLOGIES</NavLink>
        <NavLink to="how-to">HOW TO</NavLink>
      </Flex>
      <Flex gap="38px" margin="0 10px">
        <Button
          p="17px 35px"
          variant="outline"
          color="lightgray"
          borderRadius="40px"
          borderWidth="2px"
          _hover={{ bg: "white", color: "black" }}
          _active={{ bg: "white", color: "black" }}
        >
          CONTACT US
        </Button>
        <Button
          p="17px 35px"
          borderRadius="40px"
          background={gradientLight("90deg")}
        >
          JOIN HYDRA
        </Button>
      </Flex>
    </Flex>
  );
};

export default NavBar;
