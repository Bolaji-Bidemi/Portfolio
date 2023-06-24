import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";
import img1 from "./images/smoozemusic.png";
import img2 from "./images/ecommerce.png";
import img3 from "./images/Japa-Travel.png";
import img4 from "./images/smoozemovie.png";
import swift from "./images/swift.png"

export const Experience = [
  {
    id: 1,
    date: "April 2022 - March 2023",
    iconsSrc: <IoCodeWorking />,
    title: "PHARMARUN AFRICA, Frontend Developer.",
    location: "LAGOS, NIGERIA",
    description:
      `• Developed and maintained the company's website, ensuring high performance and optimal user experience
      • Collaborated with the design team to create visually appealing and responsive web pages. 
      • Utilize various frontend frameworks such as React to build scalable and maintainable codebase
      • Implement frontend best practices to ensure cross-browser compatibility and accessibility 
      • Continuously optimize website load times and user interactions `,
  },
  {
    id: 2,
    date: "August 2020 - March 2022",
    iconsSrc: <IoCodeWorking />,
    title: "DECAGON INSTITUTE, Software Engineer. ",
    location: "EDO, NIGERIA",
    description:
      `• Built and maintained a variety of client websites, ranging from small businesses to large corporations
      • Worked closely with project managers and designers to create visually stunning and functional websites
      • Utilized various frontend frameworks such as React and Chakra UI to streamline development processes
      • Implemented frontend best practices to ensure cross-browser compatibility and accessibility
      • Ensured optimal website performance and user experience through responsive design and efficient coding practices .`,
  },
  {
    id: 3,
    date: " January 2019 - March 2020",
    iconsSrc: <IoCodeWorking />,
    title: "DIFFERENCE MAKER CENTER, Software Developer",
    location: "LAGOS, NIGERIA",
    description:
    `• Built and maintained a variety of client websites, ranging from small businesses to large corporations
    • Worked closely with project managers and designers to create visually stunning and functional websites
    • Utilized various frontend frameworks such as React and Chakra UI to streamline development processes
    • Implemented frontend best practices to ensure cross-browser compatibility and accessibility
    • Ensured optimal website performance and user experience through responsive design and efficient coding practices .`
  },

];

export const Projects = [
  {
    id: 1,
    name: "Swift Rider",
    imageSrc: swift,
    techs: "NodeJS, Typescript, ExpressJS, Postgres and React",
    github: "",
    link: "https://swift-rider.netlify.com/ "

  },
  {
    id: 2,
    name: "Smooze Music",
    imageSrc: img1,
    techs: "ReactJs,Typescript, ContextApi, React Icon, Firebase, Postgres",
    github: "https://github.com/Bolaji-Bidemi/Music-App",
    link: "https://smooze.netlify.app/"
  },
  {
    id: 3,
    name: "Smooze Movie",
    imageSrc: img4,
    techs: "ReactJs,Typescript, Redux, React Icon, Firebase",
    github: "https://github.com/Bolaji-Bidemi/Smooze-movie",
    link: "https://smooze-movie.netlify.app/"
  },
  {
    id: 4,
    name: "Ecommerce App ",
    imageSrc: img2,
    techs: "React Js, Sanity, Tailwind CSS",
    github: "https://github.com/Bolaji-Bidemi/Ecommerce-website",
    link: "https://faithy-store.netlify.app/"
  },
  {
    id: 5,
    name: "Travel Page",
    imageSrc: img3,
    techs: "HTML, CSS, Javascript",
    github: "https://github.com/Bolaji-Bidemi/Travel-website",
    link: "https://travell-site.netlify.app/"
  },
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "GitHub",
    link: "https://github.com/Bolaji-Bidemi?tab=repositories",
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
    link: "https://www.linkedin.com/in/bidemi-bolaji-a7682518b/",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />
    ),
    name: "Whatsapp",
    link: "https://wa.me/2347039770676?text="
  },
];
