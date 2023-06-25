"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: [
    {
      name: "Sayak Sarkar",
      year: "junior (3rd) year",
      college: "Institute of Engineering and Management, Kolkata",
      profession: "Full-Stack Web-Developer",
      aboutDesktop: "As a full-stack web developer and graphic designer, I bring a unique blend of technical expertise and creativity to my work. I am a national award winner in poster design. I am passionate about crafting engaging and user-friendly web experiences while creating visually stunning designs. With a strong foundation in coding and design principles, I strive to deliver high-quality solutions that meet client's needs and exceed their expectations. I am a proactive and driven individual, always seeking opportunities to expand my knowledge and skill set. I thrive on the excitement of learning new things and meeting new people in the ever-evolving world of technology. I am thrilled to embrace the future with enthusiasm, as I continue to grow and make a positive impact through my work.",
      aboutMobile: "I'm Sayak, a sophomore CSE undergrad at the Institute of Engineering & Management, Kolkata. As a full-stack web developer and graphic designer, I bring together technical expertise and creativity. I love crafting captivating user experiences and visually stunning designs. I am a national award winner in poster design. I'm always seeking opportunities to learn and grow in the ever-changing world of technology. Let's make a positive impact together!"
    }
  ],
  education: [
    {folderName: "School - Qualification",
     files: [
         {fileName: "Class-X", content: {title: "Class-X", board:"ICSE", description: "St.Augustine's Day School, Kolkata", percentage: "95.80%"}},
         {fileName: "Class-XII", content: {title: "Class-XII", board:"ISC", description: "St.Augustine's Day School, Kolkata", percentage: "97.25%"}},
     ]
    },
    {folderName: "College - Qualification",
     files: [
         {fileName: "B.Tech in CSE", content: {title: "B.Tech in Computer Science (Artificial Engineering)", board:"MAKAUT", description: "Institute of Engineering and Management, Kolkata", percentage: "---%"}},
     ]
    },
  ],
  achievements: [

  ],
  contact: [
    {folderName: "Professional",
     files: [
         {fileName: "Linkedin", content: {title: "Linkedin", link:"https://www.linkedin.com/in/sayaksarkar02/", description: "Check my Linkedin Profile to get a gimpse of what I am upto professionally."}},
         {fileName: "Twitter", content: {title: "Twitter", link:"https://twitter.com/SayakSarkar02", description: "Check my Twitter Profile to get my point of vision and my takes on trending topics."}},
         {fileName: "Github", content: {title: "Github", link:"https://github.com/SayakSarkar02", description: "Check out my Github profile to see what projects I am currently working on."}},
         {fileName: "Email", content: {title: "Email", link:"mailto: sayaksarkar73@gmail.com", description: "Email me to get my attetion directly, no worries I read my emails daily."}},
     ]
    },
    {folderName: "Non-Professional",
     files: [
      {fileName: "Instagram Art", content: {title: "Instagram: art_freak_sayak", link:"https://www.instagram.com/art_freak_sayak/", description: "This Instagram Profile is made for nurturing my creative side, visit check out my latest artworks."}},
      {fileName: "Instagram Personal", content: {title: "Instagram: sayak_pvt", link:"https://www.instagram.com/sayak__pvt/", description: "Get to know me up and close, only specific people are allowed here. So send me a request if you wanna know me personally."}},
     ]
    },
  ],
  projects: [
    {
      id: 1,
      title: "Medbase",
      isComplete: true,
      description: "MedBase is an online platform that securely maintains and manages patient medical records using a decentralized storage protocol called IPFS. It ensures the tamper-proof nature of records while allowing easy accessibility from anywhere in the world. Healthcare professionals can access patients' complete medical history, enabling better-informed decisions and coordinated care. Patients have control over their data and can securely share it with healthcare providers without intermediaries. MedBase revolutionizes medical record management by combining decentralized storage and easy accessibility, providing a robust platform for maintaining and sharing medical records.",
      tagline: "All your Medical documents under one roof.",
      logo: "https://res.cloudinary.com/dj3p6sirz/image/upload/v1686422544/MedBase_immhyy.png",
      img: "",
      stacks: ["React","NodeJS", "MongoDB", "LightHouse", "IPFS", "HTML", "CSS"],
      links: [
        {
          name: "Github",
          link: "https://github.com/SayakSarkar02/Medbase"
        },
        {
          name: "Visit",
          link: "https://medbase-ii.firebaseapp.com/"
        }
      ]
    },
    {
      id: 2,
      title: "Ed360",
      isComplete: true,
      description: `There are several problems that students face on a day-to-day basis that affect their academic success. Disorganization, limited access to study resources, and lack of motivation.
      These problems lead to missed deadlines and a lack of productivity, difficulty in effectively completing assignments, and ruins the overall learning experience.
      Ed360 is a platform that can help students better manage their studies, by providing them REWARDS and INCENTIVES for doing tasks/assignments on time, attending classes regularly, submitting assignments on time and solving the doubts of fellow batch mates among other things.`,
      tagline: "One stop solution to unorganised learning.",
      logo: "https://res.cloudinary.com/dj3p6sirz/image/upload/v1686423152/Screenshot_2023-06-11_at_12.22.24_AM_uc8oel.png",
      img: "",
      stacks: ["NextJS","NodeJS", "MongoDB", "StoryBloc", "Tailwind"],
      links: [
        {
          name: "Github",
          link: "https://github.com/SayakSarkar02/Ed360"
        },
        {
          name: "Visit",
          link: "https://ed360-teacher-frontend.vercel.app/dashboard"
        }
      ]
    },
    {
      id: 3,
      title: "HUDN",
      isComplete: false,
      description: `HUDN is an innovative platform that I had the privilege of working on as a full-stack developer. It serves as a unique showspace for side projects, providing a space where individuals can showcase their creative endeavors, prototypes, and personal ventures. HUDN allows users to display their work in an interactive and visually appealing manner, fostering a community of like-minded individuals who appreciate and support the spirit of innovation. With its emphasis on user experience and the seamless presentation of side projects, HUDN has become a go-to platform for discovering inspiring creations and connecting with talented individuals from various fields.`,
      logo: "https://res.cloudinary.com/dj3p6sirz/image/upload/v1687674006/Group_64_wo3azk.png",
      img: "",
      stacks: ["ReactJS", "NodeJS" , "MongoDB", "Firebase", "NextJS", "NextAuth", "ReactQuery", "Redux", "Tailwind"],
      links: [
        {
          name: "Visit",
          link: "https://hudn.space"
        }
      ]
    },
    {
      id: 4,
      title: "BeastVerse",
      isComplete: false,
      description: `Beast Verse is a Play-to-earn PvP NFT game, built on the Polygon Blockchain.
      We are creating a virtual world where players can explore different terrains, choose their favorite beasts and fight their way to victory. Our use of the Polygon Blockchain ensures that the game is secure and transparent , which is essential for players who value their personal information and assets.`,
      logo: "https://res.cloudinary.com/dj3p6sirz/image/upload/v1687674018/logo_1_ujctft.png",
      img: "",
      stacks: ["ReactJS", , "NodeJS" , "MongoDB", "Firebase", "NextJS", "NextAuth", "ReactQuery", "Redux", "Tailwind"],
      links: [
        {
          name: "Visit",
          link: "https://beastversegame.com"
        }
      ]
    },
    {
      id: 5,
      title: "AstuteAI",
      isComplete: true,
      description: `Astute AI is a smart AI tool designed to help users in a variety of tasks. It uses advanced AI and Natural Language Processing to understand user queries and respond with relevant information in a conversational manner. With its simple yet intuitive user interface and deep understanding of user needs.`,
      logo: "https://res.cloudinary.com/dj3p6sirz/image/upload/v1687683843/Screenshot_2023-06-25_at_2.33.42_PM_gjqtha.png",
      img: "",
      stacks: ["Tailwind", "HTML", "CSS", "Flask"],
      links: [
        {
          name: "Visit",
          link: "https://astuteai.raihankhan.dev/m"
        }
      ]
    },
  ],
  techstacks: [

  ],
  workexperience: [
    {
      id: 1,
      title: "HUDN",
      tagline: "Showspace for side projects",
      description: [
        "Built a robust and user-friendly interface for showcasing sideprojects using React, Node.js, Tailwind CSS, and MongoDB.",
        "Led the migration of HUDN's techstack to Next.js, ReactQuery, and Redux, improving performance and scalability.",
        "Played a significant role in shaping HUDN's success and ensuring a seamless user experience through active participation in both the initial development and subsequent migration.",
      ],
      logo: "https://res.cloudinary.com/dj3p6sirz/image/upload/v1687674006/Group_64_wo3azk.png",
      img: "",
      stacks: ["ReactJS", "NodeJS" , "MongoDB", "Firebase", "NextJS", "NextAuth", "ReactQuery", "Redux", "Tailwind"],
      links: [
        {
          name: "Website",
          link: "https://hudn.space"
        }
      ]
    },
    {
      id: 2,
      title: "BeastVerse",
      tagline: "PvP NFT Game in polygon chain",
      description: [
        "Developed a dynamic and immersive website using React and Node.js to deliver an engaging user experience.",
        "Collaborated with the backend development team to establish seamless communication, data exchange between the website and servers and also ensure stability and scalability.",
        "Gained knowledge in the web3 domain and solidity as it was needed to integrate decentralised apps to the frontend."
      ],
      img: "",
      logo: "https://res.cloudinary.com/dj3p6sirz/image/upload/v1687674018/logo_1_ujctft.png",
      stacks: ["ReactJS", , "NodeJS" , "MongoDB", "Firebase", "NextJS", "NextAuth", "ReactQuery", "Redux", "Tailwind"],
      links: [
        {
          name: "Website",
          link: "https://beastversegame.com"
        }
      ]
    },
    {
      id: 3,
      title: "IIC-IEM | Webdevelopment Team",
      tagline: "Institute Innovation Cell - IEM",
      description: [
        "Worked as a frontend web-developer in IIC-IEM developed their website in React and Tailwind.",
        "Collaborated with the UI-UX team to deliver a engaging interface for the users.",
        "Learning, exlporing and research new frameworks to implement and make the web development workflow more efficient."
      ],
      img: "",
      logo: "https://res.cloudinary.com/dj3p6sirz/image/upload/v1687699313/iiciem_yiblwz.png",
      stacks: ["Frontend Developer", "UI-UX Designer","Graphic Designer"],
      links: [
        {
          name: "Website",
          link: "https://iic-iem.vercel.app/"
        }
      ]
    },
    {
      id: 4,
      title: "Google Developer Student Clubs",
      tagline: "Graphics Core Team",
      description: [
        "Worked as a frontend web-developer in IIC-IEM developed their website in React and Tailwind.",
        "Collaborated with the UI-UX team to deliver a engaging interface for the users.",
        "Learning, exlporing and research new frameworks to implement and make the web development workflow more efficient."
      ],
      img: "",
      logo: "https://res.cloudinary.com/dj3p6sirz/image/upload/v1687708241/Untitled_design_23_l3ersw.png",
      stacks: [],
      links: [
        {
          name: "Website",
          link: "https://gdsc.community.dev/institute-of-engineering-management-kolkata/"
        }
      ]
    },
  ],
  body: [

  ],
  about: [

  ],
};

export const sidebarMenu = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setBody: (state, action) => {
      state.body = {
        type: action.payload.type,
        data:action.payload.data};
    },
  },
});

export const { setBody } = sidebarMenu.actions;

export default sidebarMenu.reducer;
