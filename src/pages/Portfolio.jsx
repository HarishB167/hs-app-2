import { Flex, Heading, Image, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import appService from "../services/appService";
import { Link } from "react-router-dom";

const inbuiltApps = [
  {
    link: "/apps/calculator",
    name: "Calc - A Modern Calculator App",
    logo_url:
      "https://drive.google.com/uc?export=download&id=1TvJbZMl7wVKoFICdZts0UZIoSz5FctdY",
    description: `Calc is a sleek and user-friendly calculator 
      application built using the power of React.js. It's designed
       to provide a seamless and intuitive calculation experience 
       for users of all skill levels. Whether you're a student 
       working on math homework or a professional needing to 
       perform complex calculations, Calc has you covered.`,
  },
  {
    link: "/apps/rock-paper-scissor",
    name: "RPS Challenge - Rock, Paper, Scissors Game",
    logo_url:
      "https://drive.google.com/uc?export=download&id=1UyjuVVzWddM1aOqJX7A-nI9HFaPm3p-k",
    description: `RPS Challenge is an exciting and interactive Rock, 
    Paper, Scissors game app built using the popular React.js framework. 
    Challenge your friends or test your luck against the computer in this
     classic hand game that's now brought to life on your screen.`,
  },
  {
    link: "/apps/stopwatch",
    name: "ReactStopwatch - Precision Timer App",
    logo_url:
      "https://drive.google.com/uc?export=download&id=1zenDwtrPhpNV_YGp14tZlCjhqGjB56Si",
    description: `ReactStopwatch is a versatile and precise stopwatch application
     crafted using the power of React.js. It offers a feature-rich 
     experience for tracking time intervals with precision and ease`,
  },
  {
    link: "/apps/password-generator",
    name: "ReactPassGen - Secure Password Generator",
    logo_url:
      "https://drive.google.com/uc?export=download&id=10UV4_QOwRJELCMRS_pYcOi02FVN8ExPC",
    description: `ReactPassGen is a powerful and user-friendly password generator
     application built using React.js. It's designed to help you
      create strong and secure passwords for your online accounts,
       ensuring your digital life remains safe from potential threats. `,
  },
  {
    link: "/apps/tic-tac-toe",
    name: "ReactTacToe - Classic Tic-Tac-Toe Game",
    logo_url:
      "https://drive.google.com/uc?export=download&id=1JhIefV9ATJ7YkOU1gzqnPoYPJsDvXnP_",
    description: `ReactTacToe is a classic and engaging Tic-Tac-Toe game app
     built using the power of React.js. It offers a nostalgic and
      fun gaming experience for players of all ages. Whether you 
      want to challenge a friend, sharpen your strategic thinking,
       or simply pass the time, ReactTacToe is the perfect choice`,
  },
  {
    link: "/apps/note-app",
    name: "Note App",
    logo_url:
      "https://drive.google.com/uc?export=download&id=1N5UoXIjgJp-pzQnLH6vl_b25Lc-AX564",
    description: "Note App",
  },
  {
    link: "/apps/weather-app",
    name: "RWeather - Your Personal Weather Forecast",
    logo_url:
      "https://drive.google.com/uc?export=download&id=19AYQ5jd-KEKv7Y9YWGgN_Xg4WRG_KmzH",
    description: `ReactWeather is a feature-rich and user-friendly weather
     application built using the power of React.js. It's designed to provide
      you with up-to-date and accurate weather information for any location,
       making it your go-to resource for planning your day and staying
        informed about the weather conditions around you.`,
  },
];

const Portfolio = () => {
  const [apps, setApps] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadAppsDetails = async () => {
      setIsLoading(true);
      const apps = await appService.getApps();
      console.log("apps :>> ", apps);
      setApps([...inbuiltApps, ...apps]);
      setIsLoading(false);
    };
    loadAppsDetails();
  }, []);

  if (isLoading)
    return (
      <Flex w="100%" justifyContent="center" m="30px">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="purple.500"
          size="xl"
        />
      </Flex>
    );

  return (
    <Flex m="30px" flexDir="column" gap="20px">
      <Heading as="h2">Portfolio of apps</Heading>
      {apps.map((item, index) => (
        <Flex key={index} flexDir="column" border="1px solid black" p="20px">
          <Link to={item.link}>
            <Heading as="h3">{item.name}</Heading>
          </Link>
          <Flex justifyContent="space-between" alignItems="center" mr="20px">
            <Text>{item.description}</Text>
            {item.logo_url && (
              <Link to={item.link}>
                <Image
                  boxSize="100px"
                  minW="100px"
                  m="10px"
                  border="1px solid lightgray"
                  objectFit="contain"
                  src={item.logo_url}
                />
              </Link>
            )}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default Portfolio;
