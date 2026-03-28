import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer,  FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaJava ,FaHtml5,FaCss3Alt,FaJsSquare,FaLayerGroup} from 'react-icons/fa';

import profileImg from './profile.avif';
import AniketProfileImg from './Aniket Profile.avif';
import projectImg1 from './project1.avif';
import projectImg2 from './project2.avif';
import projectImg3 from './project3.avif';
import projectImg4 from './project4.avif';
import projectImg5 from './project5.avif';
import projectImg6 from './project6.avif';


export const assets = {
    profileImg,
    AniketProfileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React' ]
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'MySQL']
  },
  
  {
  title: 'Java Development',
  icon: FaJava,
  description: 'Building robust backend applications and solving complex programming logic.',
  tags: ['OOP', 'JavaFX']
},
{
  title: 'HTML Development',
  icon: FaHtml5,
  description: 'Building clean and semantic website structures with SEO-friendly markup.',
  tags: ['HTML5', 'Responsive Design']
},

{
  title: 'CSS Styling',
  icon: FaCss3Alt,
  description: 'Creating visually appealing and responsive UI with modern CSS techniques.',
  tags: ['Flexbox', 'Grid', 'Animations']
},
{
  title: 'JavaScript Development',
  icon: FaJsSquare,
  description: 'Developing dynamic, interactive user interfaces and frontend logic.',
  tags: ['ES6+', 'DOM', 'APIs']
},
{
  title: 'Basic Full-Stack Skills',
  icon: FaLayerGroup,
  description: 'Connecting frontend with backend logic and API handling.',
  tags: ['REST APIs', 'Fetch', 'JSON']
},
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: [ 'Docker' ]
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub' ]
  }
];



export const projects = [
  {
    title: "Attendance Management System",
    description: "it is fully featured it can genarate the QR code of student attendance",
    image: projectImg1,
    tech: ["Java","JavaFx","Oops"],
    icons: [FaJava],
    demo: "#",
    code: "#",
  },
  {
    title: "TextUtilis",
    description: "It basically covert to upper case, lower case, remove extra spaces, copy text, clear text and also shows word count, character count and reading time.",
    image: projectImg2,
    tech: ["react.js", "html", "css", "javascript","Bootstrap"],
    demo: "#",
    code: "#",
  },
  {
    title: "NewsMonkey",
    description: "It basically shows the latest news from various sources and categories like technology, sports, entertainment etc.",
    image: projectImg3,
    tech: ["React", "Node.js", "News API"],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "Chat App",
    description: "A real-time chat application with group messaging, emojis, and file sharing.",
    image: projectImg5,
    tech: ["Java"],
    icons: [FaJava ],
    demo: "#",
    code: "#",
  },
  {
    title: "ChatBot AI",
    description: "It can help to find our questions answers and help to learn new technologies ",
    image: projectImg6,
    tech: ["Html", "Css", "JavaScript", "Api"],
    demo: "#",
    code: "#",
  }
];


export const workData = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "2020 - Present",
    description:
      "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
    color: "purple"
  },
  {
    role: "Web Developer",
    company: "Digital Solutions LLC",
    duration: "2018 - 2020",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink"
  },
  {
    role: "Junior Developer",
    company: "StartUp Ventures",
    duration: "2016 - 2018",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue"
  }
];
