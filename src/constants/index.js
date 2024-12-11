export const navLinks = [
  { id: "home", title: "Home", href: "#home" },
  { id: "about", title: "About", href: "#about" },
  { id: "project", title: "Projects", href: "#project" },
  { id: "work", title: "Work", href: "#work" },
  { id: "contact", title: "Contact", href: "#contact" },
  {
    id: "resume",
    title: "My Resume",
    link: "https://drive.google.com/file/d/1Zhv1BhmKiza7ygHI3C2qny9vMnGbxMbs/view",
  },
];


export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "SnapeShare - Social Media Platform",
    desc: "SnapeShare is a feature-rich platform designed to revolutionize social media interactions. It allows users to post images with Cloudinary integration, engage in real-time chats using WebSockets, and interact with content through likes, dislikes, saves, and comments.",
    subdesc:
      "Built using the MERN stack, SnapeShare also offers profile editing, follow/unfollow functionality, and comprehensive account management features such as login, signup, and logout, providing a seamless and interactive user experience.",
    href: "https://snapesharing.onrender.com/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Xero - Minimalist Front Page Design",
    desc: "Xero is a clean and responsive front-page design built for modern web applications. It focuses on delivering a minimalistic and efficient user experience.",
    subdesc:
      "Utilizing React for dynamic components and Tailwind CSS for flexible styling, Xero ensures adaptability and performance across all devices.",
    href: "https://xerot.netlify.app/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Zentry - Dynamic 3D Web Page",
    desc: "Zentry is a visually immersive front page that integrates 3D animations using Three.js and dynamic transitions powered by GSAP to captivate users.",
    subdesc:
      "This project, developed with React and styled using Tailwind CSS, sets a new standard for modern web design by combining responsiveness with stunning animations.",
    href: "https://awwardwinning.netlify.app/ ",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "ChatterGig - Real-Time Chat Application",
    desc: "ChatterGig is a modern communication platform enabling real-time conversations with advanced features like emoji support and secure authentication, including login, signup, and logout.",
    subdesc:
      "Powered by WebSockets, ChatterGig ensures low-latency messaging and delivers a sleek, responsive interface for users to connect efficiently across devices.",
    href: "https://chattergig.onrender.com/",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "MovieScope - Movie Review Application",
    desc: "MovieScope is a full-stack MERN application designed for movie enthusiasts to explore, review, and discuss their favorite movies. It offers an interactive platform for users to share opinions and discover new films.",
    subdesc:
      "Built with the MERN stack, MovieScope enables users to create accounts, post reviews, rate movies, and engage in discussions. Features include advanced search, trending movie highlights, and a responsive design for seamless usage across devices.",
    href: "https://github.com/xing24xing/MovieReview.git",
    texture: "/textures/project/project5.mp4",
    logo: "/assets/project-logo5.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
        ? [5, -5, 0]
        : isTablet
          ? [5, -5, 0]
          : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
        ? [5, 4, 0]
        : isTablet
          ? [5, 4, 0]
          : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
        ? [-10, 10, 0]
        : isTablet
          ? [-12, 10, 0]
          : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
        ? [-9, -10, -10]
        : isTablet
          ? [-11, -7, -10]
          : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "JPMorgan Chase & Co.",
    pos: "Software Simulation Intern (Virtual)",
    duration: "2024",
    title:
      "Completed the first phase of a virtual internship program, focusing on financial software simulations.Completed the first phase of a virtual internship program, focusing on financial software simulations.Gained hands-on experience with financial models, algorithm optimization, and data visualization techniques.Collaborated on simulated projects that emphasized real-world applications of financial technology.Demonstrated problem-solving skills by addressing critical challenges in a simulated professional environment.",
    icon: "/assets/figma.svg",
    animation: "clapping",
  },
];
// social links
export const socialLinks = {
  github: "https://github.com/xing24xing",
  twitter: "https://leetcode.com/u/khushipandey2603/",
  instagram: "https://www.linkedin.com/in/khushi-pandey3/",
};
