/* Change this file to get your personal Porfolio */

const settings = {
  isSplash: true,
};

const seo = {
  title: "Harsha Vardhan's Portfolio",
  description: "A passionate Computer Science student and Software Engineer.",
  og: {
    title: "Harsha Vardhan Portfolio",
    type: "website",
    url: "https://github.com/harsha16009",
  },
};

const greeting = {
  title: "Harsha Vardhan",
  logo_name: "Harsha Portfolio",
  nickname: "Software Engineer",
  subTitle:
    "A highly motivated Computer Science student deeply interested in modern web development, cloud architecture, and artificial intelligence.",
  resumeLink: "/resume",
  portfolio_repository: "https://github.com/harsha16009",
  githubProfile: "https://github.com/harsha16009",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/harsha16009",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/allamsetti-harsha-vardhan/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:allamsetti.harsha2004@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Languages & Frameworks",
      fileName: "DesignImg",
      skills: [
        "⚡ Languages: C++, Java, Python, JavaScript, C",
        "⚡ Frontend: HTML, CSS, React.js, Tailwind CSS",
        "⚡ Backend: Flask, Express.js, MySQL, MongoDB",
      ],
      softwareSkills: [
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: { color: "#00599C" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { backgroundColor: "#000000", color: "#F7DF1E" },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: { color: "#007396" },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: { color: "#38B2AC" },
        },
      ],
    },
    {
      title: "Tools, Platforms & Soft Skills",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Cloud/DevOps: AWS, Docker, Apache CloudStack, Azure",
        "⚡ Soft Skills: Problem-Solving, Team Collaboration, Innovative",
      ],
      softwareSkills: [
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { color: "#47A248" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#1488C6" },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: { color: "#0089D6" },
        },
      ],
    },
  ],
};

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: { color: "#F79F1B" },
      profileLink: "https://leetcode.com/harsha16009",
    },
    {
      siteName: "Coding Ninjas",
      iconifyClassname: "simple-icons:codingninjas",
      style: { color: "#181717" },
      profileLink: "https://code360.codingninjas.com/profile/harsha16009",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Lovely Professional University",
      subtitle: "Bachelor of Technology - Computer Science and Engineering",
      logo_path: "coursera_logo.png",
      alt_name: "LPU",
      duration: "Since August 2023",
      descriptions: ["⚡ CGPA: 7.0", "⚡ Location: Punjab, India"],
      website_link: "https://www.lpu.in/",
    },
    {
      title: "Narayana Junior College",
      subtitle: "Intermediate",
      logo_path: "coursera_logo.png",
      alt_name: "Narayana",
      duration: "April 2021 - March 2023",
      descriptions: [
        "⚡ Percentage: 94.4",
        "⚡ Location: Vijayawada, Andhra Pradesh",
      ],
      website_link: "#",
    },
    {
      title: "Viswasanthi High School",
      subtitle: "Matriculation",
      logo_path: "coursera_logo.png",
      alt_name: "Viswasanthi",
      duration: "April 2020 - March 2021",
      descriptions: ["⚡ Percentage: 91", "⚡ Location: Bhattiprolu, Guntur"],
      website_link: "#",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Cloud Architecting",
      subtitle: "AWS",
      logo_path: "coursera_logo.png",
      certificate_link: "https://www.credly.com/badges/6a43b375-70c9-4fb4-ae4c-88f40584d40a/public_url",
      alt_name: "AWS",
      color_code: "#FF990099",
    },
    {
      title: "Docker Foundation Essentials",
      subtitle: "IBM",
      logo_path: "ibm_logo.png",
      certificate_link: "https://courses.cognitiveclass.ai/certificates/160c4ece0bcb4efcb9507bf2c3860936",
      alt_name: "Docker",
      color_code: "#1F70C199",
    },
    {
      title: "Data Structures and Algorithms",
      subtitle: "Certificate Link",
      logo_path: "coursera_logo.png",
      certificate_link: "https://www.cipherschools.com/certificate/preview?id=6880f9aea82e56c458a6bf48",
      alt_name: "DSA",
      color_code: "#8C151599",
    },
    {
      title: "freeCodeCamp",
      subtitle: "Certificate Link",
      logo_path: "coursera_logo.png",
      certificate_link: "https://www.freecodecamp.org/certification/fcc815bc51d-78d1-4796-ad50-8d1e96e85798/responsive-web-design",
      alt_name: "freeCodeCamp",
      color_code: "#00000099",
    },
  ],
};

const experience = {
  title: "Training",
  subtitle: "Summer Training Programs",
  description:
    "Gained advanced proficiency through real-world projects, focusing on problem-solving, clean code practices, and industry tools.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Training",
      work: false,
      experiences: [
        {
          title: "Data Structures and Algorithms with Java",
          company: "Cipher Schools",
          company_url: "#",
          logo_path: "coursera_logo.png",
          duration: "Jun 2025 - Jul 2025",
          location: "Remote",
          description:
            "Completed an intensive Summer Training Program at Cipher Schools, achieving top performance across project evaluations and technical assessments. Gained advanced proficiency through real-world projects, focusing on problem-solving, clean code practices, and industry-standard tools.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

const projectsHeader = {
  title: "Projects",
  description:
    "Real-world applications built with modern technologies like React, Node.js, and Cloud API integrations.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Achievements",
  description:
    "Recent notable achievements and recognitions in competitive programming.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "coding-ninjas",
      name: "Gold League on Coding Ninjas for Coding | Code 360",
      createdAt: "2025-11-01T00:00:00Z",
      description: "Achieved Gold League status on Code 360",
      url: "#",
    },
    {
      id: "leetcode",
      name: "Top Ranker of the week in Problem-Solving | LeetCode",
      createdAt: "2025-10-01T00:00:00Z",
      description: "Top rank in Problem-Solving on LeetCode",
      url: "https://leetcode.com/harsha16009",
    },
  ],
};

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "address_image.svg",
    description:
      "I am currently looking for new opportunities, internships, and entry-level software engineering roles. My inbox is always open. Connect with me!",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "Mobile",
    subtitle: "+91-8179730596",
    locality: "India",
    country: "India",
    region: "",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "#",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

const contactInfo = {
  title: contactPageData.contactSection.title,
  subtitle: contactPageData.contactSection.description,
  number: contactPageData.addressSection.subtitle,
  email_address: "allamsetti.harsha2004@gmail.com",
};

// Placeholder sections to prevent crashes
const talkSection = { title: "Talks", subtitle: "", talks: [] };
const bigProjects = { title: "Big Projects", subtitle: "", projects: [] };
const openSource = {
  githubUserName: "harsha16009",
  githubConvertedToken: "",
};
const podcastSection = { title: "Podcast", subtitle: "", podcast: [] };
const blogSection = { title: "Blogs", subtitle: "", blogs: [] };
const achievementSection = {
  title: "Achievements",
  subtitle: "",
  achivementsCards: [],
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  contactInfo,
  talkSection,
  bigProjects,
  openSource,
  podcastSection,
  blogSection,
  achievementSection,
};
