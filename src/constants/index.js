import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphics Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Technical Support Engineer",
    company_name: "Tulcan Exploration and Production Ltd",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2022 - Current",
    points: [
      "Provide technical support by troubleshooting, diagnosing and resolving a wide variety of problems identified in applications, operating systems, networking and systems hardware.",
      "Installation and configuration of computer hardware, operating systems and applications.",
      "Assist with onboarding and offboarding of users, device enrollment and system configuration.",
      "Offer technical advice to different administrators and respond to questions efficiently and effectively.",
      "Monitor and maintain computer systems and networks for performance issues.",	
    ],
  },
  {
    title: "Techincal Support Engineer",
    company_name: "Tulcan Energy Resources Limited",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Provide proper documentation on all assigned cases, while following and complying with established procedures and policies.",
      "Knowledge of support and ticketing tools such as Jira, and Dynamics 365.",
      "Manage and configure staffs records on relational database management systems.",
      "Perform software upgrade on servers, personal computers and install latest anti-virus program on a regular basis.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Freelance",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - Jan 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer / Graphics Designer",
    company_name: "Freelance",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2019 - Jan 2020",
    points: [
      "Create engaging and on-brand graphics for a variety of media.",
      "Design, code, and maintain responsive websites and web applications using HTML, CSS, JavaScript, and relevant frameworks.",
      "Troubleshoot and resolve website issues, ensuring high availability and user satisfaction.",
      "Write efficient, well-designed and reusable code.",
      "Stay up-to-date with emerging technologies and industry trends to enhance our web offerings.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but i was proved wrong.",
    name: "Sara Olaniyi",
    designation: "CFO",
    company: "CurricumSoft Solutions",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like he does.",
    name: "Engineer Famakin",
    designation: "Principal",
    company: "Kingsgate Schools",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After optimizing our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Esther Chidinma",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
