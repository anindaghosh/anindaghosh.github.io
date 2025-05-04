// src/data/portfolioData.js

export const personalInfo = {
  name: "Aninda Ghosh", // Replace with your name
};

export const aboutContent = [
  {
    icon: "📍",
    text: "Currently a Master's student in Computer Science at NYU, passionate about cloud computing, AI, and system design.",
  },
  {
    icon: "💼",
    text: "Former Solutions Architect at AB InBev, with experience designing scalable, cloud-native solutions in Finance, Logistics, and Employee Experience. Led teams on projects that resulted in cost savings and efficiency gains, including a global Net Promoter Score app with an NPS score of 88.",
  },
  {
    icon: "🚀",
    text: "Looking to build on my experience in cloud computing and AI, aiming for roles in software engineering, AI/ML engineering, or security. Interested in contributing to innovative projects that leverage cutting-edge technologies.",
  },
  {
    icon: "🎮",
    text: "Enjoy coding, solving complex problems, and staying up-to-date with the latest in technology. Outside of work, I'm interested in machine learning, tech entrepreneurship, and exploring new AI trends.",
  },
  {
    icon: "💡",
    text: "Proficient in Python, R, SQL, Django, and cloud technologies (AWS, Azure). Experienced with frameworks like React, Flask, and machine learning tools (TensorFlow, PyTorch). Strong background in data analysis, system architecture, and application security.",
  },
];


export const contactLinks = [
  { name: "LinkedIn", handle: "@anindaghosh99", url: "https://www.linkedin.com/in/anindaghosh99/" },
  { name: "GitHub", handle: "@anindaghosh", url: "https://github.com/anindaghosh" },
  { name: "Email", email: "aninda.ghosh@nyu.edu", url: "mailto:aninda.ghosh@nyu.edu" },
];

export const footerInfo = {
  year: new Date().getFullYear(),
  name: personalInfo?.name,
}

export const navLinks = [
  // Assuming the main page "/" shows the "About" content
  { name: "About", path: "/" },
  // { name: "Projects", path: "/projects" },
  // { name: "Work", path: "/work" },
  // { name: "Education", path: "/education" },
  // Add other links as needed
];