import { NavLink, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import "react-toastify/dist/ReactToastify.css";

// New UI reference : http://stevenkinnear.com/

const useStyles = createUseStyles({
  heading: {
    color: "#2d2654",
    fontWeight: "900",
  },
  navBar: {
    color: "#bbb",
  },
  linkActive: {
    color: "white",
  },
});

const purpleColor = "#2d2654";

const navLinks = [
  { link: "/", label: "About me" },
  { link: "/portfolio", label: "My work" },
  { link: "/contact", label: "Contact" },
  { link: "/hire-me", label: "Hire me" },
];

const App = ({ children }) => {
  const classes = useStyles();

  return (
    <Flex flexDir="column" alignItems="center" bg="gray.100" minH="100vh">
      <ToastContainer />
      <Flex maxW="955px" m="10px 0" w="100%" flexDir="column">
        <Flex bg="white" flexDir="column" border="1px solid #ccc">
          <Heading
            as="h1"
            size="4xl"
            alignSelf="center"
            className={classes.heading}
          >
            Harish Singh
          </Heading>
          <Flex
            bg={purpleColor}
            color="white"
            p="10px 10px 14px"
            justifyContent="center"
            gap="24px"
            className={classes.navBar}
          >
            {navLinks.map((item) => (
              <NavLink
                key={item.link}
                to={item.link}
                className={({ isActive }) =>
                  isActive ? classes.linkActive : ""
                }
              >
                {item.label}
              </NavLink>
            ))}
          </Flex>
          {children ?? <Outlet />}
        </Flex>
        <Flex gap="10px" fontSize="12px" color="#A4A4A4" p="30px 0" m="0 auto">
          <Text>Copyright &copy; 2023</Text>
          <Text color={purpleColor}>Harish Singh.</Text>
          <Text>All rights reserved.</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default App;
