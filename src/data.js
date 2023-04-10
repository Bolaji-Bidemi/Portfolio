import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";
import img1 from "./images/smoozemusic.png";
import img2 from "./images/thumb-fullstack-socialmedia-app-react-sanity.png";
import img3 from "./images/thumb-google-map-clone-nextjs-feb22.png";

export const Experience = [
  {
    id: 1,
    date: "2022 - present",
    iconsSrc: <IoCodeWorking />,
    title: "ASSOCIATE FRONTEND DEVELOPER/DECAGON.",
    location: "LAGOS, NIGERIA",
    description:
      "Built projects with Nodejs, React.js, Typescript, and Javascript. ",
  },
  {
    id: 2,
    date: "JAN 2022 - AUG 2022",
    iconsSrc: <IoCodeWorking />,
    title: "FRONTEND INTERN/HOPEWELL ENGINEERING COMPANY. ",
    location: "LAGOS, NIGERIA",
    description:
      "Assisting with the development of webpages and web-based applications using HTML, CSS, JavaScript and React.",
  },
  {
    id: 3,
    date: "2012 - 2014",
    iconsSrc: <IoCodeWorking />,
    title: "CUSTOMER SERVICE/GTBANK",
    location: "LAGOS, NIGERIA",
    description:
      "Key individual to providing expert knowledge relating to products and services to new and existing clients. Providing customer services, to resolve and answer various banking questions.",
  },

];

export const Projects = [
  {
    id: 1,
    name: "Smooze Music",
    imageSrc: img1,
    techs: "React,Typescript, ContextApi, React Icon, Postgres",
    github: "https://smooze.netlify.app/",
  },
  {
    id: 2,
    name: "Full Stack Social Media App ",
    imageSrc: img2,
    techs: "React Js, Sanity, Tailwind CSS",
    github: "#",
  },
  {
    id: 3,
    name: "Travel Advisor",
    imageSrc: img3,
    techs: "React Js, Chakra UI, Google API",
    github: "#",
  },
  
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "GitHub",
    link: "https://github.com/hakynbayo?tab=repositories",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
    ),
    name: "Twitter",
    link: "",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/akinwande-akinbayo-8b18a0143/",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />
    ),
    name: "Whatsapp",
    link: "07061511468",
  },
];
