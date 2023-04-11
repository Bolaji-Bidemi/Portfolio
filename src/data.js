import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";
import img1 from "./images/smoozemusic.png";
import img2 from "./images/ecommerce.png";
import img3 from "./images/Japa-Travel.png";

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
    date: "JAN 2022 - MAR 2022",
    iconsSrc: <IoCodeWorking />,
    title: "FRONTEND INTERN/HOPEWELL ENGINEERING COMPANY. ",
    location: "LAGOS, NIGERIA",
    description:
      "Assisting with the development of webpages and web-based applications using HTML, CSS, JavaScript and React.",
  },
  {
    id: 3,
    date: " JAN 2020 - DEC 2022",
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
    techs: "ReactJs,Typescript, ContextApi, React Icon, Firebase, Postgres",
    github: "https://github.com/hakynbayo/Music-App",
    link: "https://smooze.netlify.app/"
  },
  {
    id: 2,
    name: "Ecommerce App ",
    imageSrc: img2,
    techs: "React Js, Sanity, Tailwind CSS",
    github: "https://github.com/hakynbayo/Ecommerice-Website-in-React",
    link: "https://faithy-store.netlify.app/"
  },
  {
    id: 3,
    name: "Travel Page",
    imageSrc: img3,
    techs: "HTML, CSS, Javascript",
    github: "https://github.com/hakynbayo/Travel-website",
    link: "https://travell-site.netlify.app/"
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
    link: "https://api.whatsapp.com/send?phone=+2347061511468&text&app_absent=0"
  },
];
