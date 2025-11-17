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
    aboutme: "I’m a Computer Science student focused on software engineering, AI/ML, and building systems that solve real problems. I enjoy taking on projects that challenge me and expand my skills. When I’m not coding, I’m exploring new tools, experimenting with technologies, and collaborating with others on meaningful work. I’m always looking for the next opportunity to learn and grow.",
};
const worktimeline = [
    {
        jobtitle: "IT Security & Enterprise Architecture Intern",
        where: "Mercedes-Benz USA",
        date: "June - August 2025",
    },
    {
        jobtitle: "Undergraduate Researcher — Object Detection (YOLO)",
        where: "University of Georgia",
        date: "Jan - May 2025",
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
    description: "Financial Dashboard – Built an interactive dashboard using React, Node.js, and D3.js, visualizing 50+ financial metrics with real-time, dynamic charts.",
    link: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Parking Indicator – Developed a PyTorch-based CNN trained on 12,000+ parking images, achieving 75% accuracy in detecting car occupancy.",
    link: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1593023333594-487b2f7dd415?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Object Detection Research – Built a YOLO-based pipeline achieving 80% precision, curated a dataset of 5,000+ images using Roboflow and ImageJ.",
    link: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "S&P 500 Prediction Model – Built a RandomForestClassifier using Python, Pandas, and Scikit-Learn to predict market movement using price trends and rolling averages, achieving ~54% accuracy.",
    link: "https://github.com/GaurishHaveFun/SP500Prediction",
    newTab: true,
  },
  {
    img: "https://images.unsplash.com/photo-1683029096295-7680306aa37d?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Discord Automation Bot – Python-based bot automating reminders and event management for 200+ CS club members.",
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
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
