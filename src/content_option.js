import fanduelLogo from "./assets/images/logos/fanduel.jpg";
import mercedesBenzLogo from "./assets/images/logos/mercedes-benz.png";
import ugaLogo from "./assets/images/logos/uga.png";

const logotext = "Gaurish Vasireddy";
const meta = {
    title: "Gaurish Vasireddy - Student Portfolio",
    description: "I'm a passionate student studying [Your Major] at [Your University]. Welcome to my portfolio showcasing my projects, skills, and achievements.",
};

const introdata = {
    title: "I'm Gaurish Vasireddy",
    animated: {
        first: "CS Student @ UGA",
        second: "Focused on SWE, AI/ML, and Fintech",
        third: "Always building, learning, and improving",
    },
  description: "Turning ideas into software - one project at a time, with a  focus on clarity, creativity, and real-world impact.",
    your_img_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop",
};

const dataabout = {
    title: "A bit about myself",
    aboutme: [
        "I'm a Computer Science student at the University of Georgia, go Dawgs, studying with a Finance minor. I'm most interested in the overlap between software engineering and finance, and I enjoy building systems that actually work under real conditions. I interned in IT Security and Enterprise Architecture at Mercedes Benz USA, and I interned at FanDuel on their Tech Transformation team working on AI.",
        "Outside of school I'm a big Atlanta Falcons and Atlanta Hawks fan, and I never miss a UGA football Saturday. I also spend a lot of my free time building trading tools and exploring quant strategies on my own, since I like understanding how markets actually work, not just how to code. I'm always looking for the next thing to build and learn from.",
    ],
};
const dataexperience = [
    {
        jobtitle: "Software Engineer Intern",
        where: "FanDuel",
        logo: fanduelLogo,
        location: "Atlanta, GA",
        date: "June - August 2026",
        bullets: [
            "Designed and provisioned a Terraform managed AWS stack (S3, CloudFront with Origin Access Control, Lambda@Edge, DynamoDB) to host and route a multi-tenant application deployment platform, validated with 30+ test users.",
            "Architected a FastAPI/DynamoDB backend implementing a project scoped Users, Projects, and Deployments REST hierarchy, including GSIs for efficient cross queries that improved performance by 30%, and ownership enforced access.",
            "Built the end to end upload to production pipeline, including presigned S3 uploads, CodeBuild triggers, and live site promotion, leveraging Claude Code and Cursor to accelerate development, enabling users to go from ZIP upload to a public URL.",
        ],
    },
    {
        jobtitle: "IT Security & Enterprise Architecture Intern",
        where: "Mercedes-Benz USA",
        logo: mercedesBenzLogo,
        location: "Sandy Springs, GA",
        date: "June - August 2025",
        bullets: [
            "Built Python automation tooling leveraging the Checkmarx REST API to integrate security scans into CI/CD pipelines across 3 engineering teams, reducing manual code review time by ~40% and enabling earlier vulnerability detection in the development lifecycle.",
            "Audited and restructured IAM policies across AWS and Azure environments, applying least-privilege principles to eliminate 25% of excess permissions and strengthen compliance with enterprise security standards.",
        ],
    },
    {
        jobtitle: "Undergraduate Researcher — Object Detection (YOLO)",
        where: "University of Georgia",
        logo: ugaLogo,
        location: "Athens, GA",
        date: "Jan - May 2025",
        bullets: [
            "Developed an object detection pipeline using YOLO in Python, achieving 80% precision and 75% recall in detecting fly clusters on cattle images.",
            "Applied data augmentation techniques including random flips, rotations, and scaling to address class imbalance, increasing training dataset diversity and improving model generalization.",
        ],
    },
];

const skills = [{
        name: "Python",
        value: 87,
    },
    {
        name: "Java",
        value: 75,
    },
    {
        name: "AWS",
        value: 70,
    },
    {
        name: "HTML/CSS",
        value: 90,
    },
    {
        name: "Git",
        value: 85,
    },
    {
        name: "React",
        value: 85,
    },
    {
        name: "SQL",
        value: 75,
    },
];

const services = [{
        title: "Software Engineering",
        description: "Building modern software across web, AI, and backend systems. Passionate about creating scalable, efficient, and impactful solutions.",
    },
    {
        title: "AI/ML",
        description: "Designing and training ML models across computer vision, prediction, and automation. Driven by data, experimentation, and optimization",
    },
    {
        title: "Fintech",
        description: "Exploring the intersection of software and finance. Interested in building tools for analytics, trading, and financial systems.",
    },
];

const dataportfolio = [
  {
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Financial Dashboard",
    description: "Built an interactive dashboard using React, Node.js, and D3.js, visualizing 50+ financial metrics with real-time, dynamic charts.",
    link: "https://github.com/GaurishHaveFun/Financial-Dashboard",
    newTab: true,
  },
  {
    img: "https://images.unsplash.com/photo-1571266028243-d220c6a7edbf?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Virtual DJ Web App",
    description: "Developed a React-based DJ mixing platform integrating SoundCloud and Spotify APIs, featuring crossfader controls, auto-transitions, and real-time audio effects using Web Audio API.",
    link: "https://github.com/GaurishHaveFun/DJ-Mixer",
    newTab: true,
  },
  {
    img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "S&P 500 Prediction Model",
    description: "Built a RandomForestClassifier using Python, Pandas, and Scikit-Learn to predict market movement using price trends and rolling averages, achieving ~54% accuracy.",
    link: "https://github.com/GaurishHaveFun/SP500Prediction",
    newTab: true,
  },
  {
    img: "https://images.unsplash.com/photo-1653038417332-6db0ff9d4bfb?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Internship Tracker",
    description: "A full-stack job tracker for UGA students that uses AI to extract ATS keywords from resumes and find relevant opportunities via the JSearch API.",
    link: "https://github.com/GaurishHaveFun/Internship-Tracker1/tree/main",
  },
  {
    img: "https://images.unsplash.com/photo-1593023333594-487b2f7dd415?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Object Detection Research",
    description: "Built a YOLO-based pipeline achieving 80% precision, curated a dataset of 5,000+ images using Roboflow and ImageJ.",
    link: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1683029096295-7680306aa37d?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Discord Automation Bot",
    description: "Python-based bot automating reminders and event management for 200+ CS club members.",
    link: "#",
  }
];

const contactConfig = {
    YOUR_EMAIL: "gvasireddy04@gmail.com",
    YOUR_FONE: "(678) 447-5634",
    description: "I’m always open to new opportunities, collaborations, and conversations in tech. Feel free to reach out!",
    // Create an emailjs.com account 
    // Check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_fftgd2q",
    YOUR_TEMPLATE_ID: "template_jsy0x4j",
    YOUR_USER_ID: "JFNVtEhf0ZUKEcEHK",
};

const socialprofils = {
    github: "https://github.com/gaurishhavefun",
    linkedin: "https://linkedin.com/in/gvasireddy",
};
export {
    meta,
    dataabout,
    dataportfolio,
    dataexperience,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
