import {
  Flex,
  Heading,
  Image,
  Text,
  useDimensions,
  useMediaQuery,
} from "@chakra-ui/react";
import { useRef } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  vr: {
    borderLeft: "1px dashed lightgray",
    margin: "0 10px",
  },
  hr: {
    borderTop: "1px dashed lightgray",
  },
});

const dividerBorder = "1px dashed lightgray";

const links = [
  { name: "linkedin", url: "https://www.linkedin.com/in/harishb167/" },
  { name: "github", url: "https://github.com/HarishB167" },
  { name: "email", url: "mailto:harishb167@gmail.com" },
];

const AboutMe = () => {
  const classes = useStyles();

  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");
  const containerRef = useRef();
  const containerDimensions = useDimensions(containerRef);

  const handleConnectLink = (linkName) => {
    const { url } = links.find((item) => item.name === linkName);
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Flex
      p="20px 10px 32px"
      fontFamily="'Ubuntu', sans-serif;"
      gap="24px"
      flexDir={isSmallerThan768 ? "column-reverse" : ""}
      ref={containerRef}
    >
      <Flex flex="2 0" flexDir="column">
        <Heading
          w="100%"
          pb="30px"
          as="h2"
          size="2xl"
          borderBottom={dividerBorder}
        >
          About Me
        </Heading>
        <Flex
          pt="9px"
          gap="2em"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text>
            Hello there! My name is Harish Singh. I'm a full stack developer.
          </Text>
          <Image
            borderRadius="full"
            boxSize="150px"
            objectFit="cover"
            src="https://drive.google.com/uc?export=download&id=1__itfpxMzly4aJsdtW9ACI7YT2Br3CQl"
            alt="Harish Singh"
          ></Image>
        </Flex>
        <Heading as="h3">Skills</Heading>
        <Text>
          React.js, Javascript, HTML, CSS, Basic bootstrap, GIT, Design
          patterns, Python, Django, Django Rest Framework, SQL, Communication
          skills, Team work, Leadership skills, Adaptability
        </Text>
        <Heading as="h3">Profile</Heading>
        <Text>
          Exceptional skills in adapting to multiple working environments.
          Strong ability to work under pressure and remain attentive to detail.
        </Text>
        <Heading as="h3">Full stack developer</Heading>
        <Text>
          I've created a number of personal projects to demonstrate my
          abilities. A weather app, a resume builder, Mas Helper, a password
          generator, a note app, a timer, a calculator, and games are a few of
          my efforts. I am always happy to offer my expertise, attention to
          detail, and problem-solving skills. I'm constantly prepared to immerse
          myself in a work setting in order to advance my technological
          abilities and produce top-notch user experiences. I am confident in my
          potential to be a successful full-stack developer because of my
          excellent work ethic and desire to learn.
        </Text>
        <Heading as="h3">Project : Portfolio site</Heading>
        <Text>
          This site includes apps - weather app, password generator, note app,
          stopwatch, calculator, rock-paper-scissors and tic-tac-toe game. UI
          for these apps were taken from free figma templates. Built using
          React.js.
          <br />
          Link :{" "}
          <a href="https://hsapp.onrender.com/inbuiltapps" target="_blank">
            https://hsapp.onrender.com/inbuiltapps
          </a>{" "}
          <br />
          Github :{" "}
          <a href="https://github.com/HarishB167/hs-app-2" target="_blank">
            https://github.com/HarishB167/hs-app-2
          </a>
          <br />
          <strong>Weather App :</strong> Uses openweather api as data source.
          User types location on search bar, auto-complete helps to select
          location. Predictions till next 7 days are shown.
          <br />
          <strong>Password Generator :</strong>
          User can select combination of uppercase, lowercase, numbers, symbols.
          List of generated passwords is shown, which can be cleared by clicking
          button. Copy button copies password to clipboard.
        </Text>
        <Heading as="h3">Project : Mas Helper application</Heading>
        <Text>
          A sample project for tracking consumption of material at site, backend
          implemented using Python Django Framework and frontend using React.js.
          User can enter new material consumption on the main page.
          <br />
          Data can be downloaded in csv format for any date range.
          <br />
          Data can be viewed on the view page. Accordion bootstrap element is
          used to display more info for an item.
          <br />
          <em>Github :-</em>
          <br />
          Backend :{" "}
          <a
            href="https://github.com/HarishB167/mashelper-backend"
            target="_blank"
          >
            https://github.com/HarishB167/mashelper-backend
          </a>
          <br />
          Frontend :{" "}
          <a
            href="https://github.com/HarishB167/mashelper-frontend"
            target="_blank"
          >
            https://github.com/HarishB167/mashelper-frontend
          </a>
          <br />
          <em>Test Link :-</em>
          <br />
          Backend :{" "}
          <a href="https://appsurges.alwaysdata.net/api" target="_blank">
            https://appsurges.alwaysdata.net/api
          </a>
          <br />
          Frontend :{" "}
          <a href="https://mashelper.onrender.com/" target="_blank">
            https://mashelper.onrender.com/
          </a>
        </Text>
        <Heading as="h3">Project : Resume App</Heading>
        <Text>
          A sample web app to create resume profiles. Backend implemented using
          Python Django Framework and frontend using React.js. <br />
          Github :-
          <br />
          Backend :{" "}
          <a
            href="https://github.com/HarishB167/resume-builder-backend"
            target="_blank"
          >
            https://github.com/HarishB167/resume-builder-backend
          </a>
          <br />
          Frontend :{" "}
          <a
            href="https://github.com/HarishB167/resume-builder-frontend"
            target="_blank"
          >
            https://github.com/HarishB167/resume-builder-frontend
          </a>
          <br />
          Test Link :-
          <br />
          Backend :{" "}
          <a
            href="https://resume-builder-backend.onrender.com/api/"
            target="_blank"
          >
            https://resume-builder-backend.onrender.com/api/
          </a>
          <br />
          Frontend :{" "}
          <a href="https://resume-builder-hs.netlify.app/" target="_blank">
            https://resume-builder-hs.netlify.app/
          </a>
          <br />
        </Text>
      </Flex>
      {!isSmallerThan768 && (
        <hr
          className={classes.vr}
          style={{ height: containerDimensions?.contentBox?.height }}
        />
      )}
      <Flex flex="1 0" flexDir="column">
        <Text color="gray">CONNECT WITH ME</Text>
        <Flex fontSize="2em" gap="0.5em">
          <span
            onClick={() => handleConnectLink("linkedin")}
            className="fa-brands fa-linkedin"
          ></span>
          <span
            onClick={() => handleConnectLink("github")}
            className="fa-brands fa-github"
          ></span>
          <span
            onClick={() => handleConnectLink("email")}
            className="fa-regular fa-envelope"
          ></span>
        </Flex>
        <hr className={classes.hr} />
      </Flex>
    </Flex>
  );
};

export default AboutMe;
