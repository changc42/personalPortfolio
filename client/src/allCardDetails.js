import skills from "./skillTypes";

let bookfastDetails = {
  title: "Bookfast",
  image: "bookfast.png",
  description: "Search for your favorite books and rate them",
  skillsUsed: [
    skills.ReactJS,
    skills.PassportJS,
    skills.NodeJS,
    skills.ExpressJS,
  ],
  demo_url: "projects/bookfast",
  github_url: "https://github.com/changc42/bookfast",
};

let calculatorDetails = {
  title: "Calculator",
  image: "calculator.png",
  description: "State management and algorithms",
  skillsUsed: [skills.ReactJS],
  demo_url: "projects/calculator",
  github_url: "https://github.com/rockysingh3/React-Calculator",
};

let dragNDropDetails = {
  title: "drag-n-drop",
  image: "drag-n-drop.png",
  description:
    "State management and drag-and-drop (cursor clicks only. Not for mobile)",
  skillsUsed: [skills.ReactJS],
  demo_url: "projects/dragndrop",
  github_url: "https://github.com/changc42/drag-and-drop",
};

let emailRaterDetails = {
  title: "Email Rater",
  image: "emailRater.PNG",
  description: "HTTP/REST APIs and cookie-session management",
  skillsUsed: [skills.ReactJS, skills.NodeJS, skills.HTTP_REST],
  demo_url: "projects/emailrater",
  github_url: "https://github.com/changc42/emailrater",
};

let emailyDetails = {
  title: "Emaily",
  image: "emaily.png",
  description:
    "Automate the email sending process! Collect data from your users",
  skillsUsed: [
    skills.ReactJS,
    skills.NodeJS,
    skills.PassportJS,
    skills.Stripe,
    skills.ExpressJS,
  ],
  demo_url: "projects/emaily",
  github_url: "https://github.com/changc42/node-react-course",
};

let weatherappDetails = {
  title: "Weather App",
  image: "newWeatherPic.png",
  description: "What's the weather in your local area?",
  skillsUsed: [skills.HTML, skills.CSS, skills.JavaScript, skills.HTTP_REST],
  demo_url: "projects/weatherapp",
  github_url: "https://github.com/changc42/weatherapp",
};

let pokemonwarDetails = {
  title: "Pokemon War",
  image: "pokemonwar.PNG",
  description: "State management and responsive design",
  skillsUsed: [skills.ReactJS],
  demo_url: "projects/pokemonwar",
  github_url: "https://github.com/changc42/pokemonwar",
};

let personalPortfolioDetails = {
  title: "Personal Portfolio",
  image: "CClogo.png",
  description: "Host sub react app in bigger react app",
  skillsUsed: [skills.ReactJS, skills.NodeJS, skills.ExpressJS],
  github_url: "https://github.com/changc42/personalPortfolio",
};

let cpuSchedulerDetails = {
  title: "CPU Scheduler",
  image: "C++_Logo.svg",
  description: "Object-Oriented Programming, Data Structures, Algorithms",
  skillsUsed: [skills.Cpp],
  github_url: "https://github.com/changc42/cs340/tree/master/A3",
};

let memoryAllocatorDetails = {
  title: "Memory Allocator",
  image: "C++_Logo.svg",
  description: "Object-Oriented Programming, Data Structures, Algorithms",
  skillsUsed: [skills.Cpp],
  github_url: "https://github.com/changc42/cs340/tree/master/A4",
};

let semanticAnalyzerDetails = {
  title: "Shift Reduce Parser",
  image: "java-logo.jpg",
  description: "Object-Oriented Programming, Data Structures, Algorithms",
  skillsUsed: [skills.Java],
  github_url: "https://github.com/changc42/cs316/tree/master/A2",
};

export default [
  pokemonwarDetails,
  calculatorDetails,
  // emailyDetails,
  // bookfastDetails,
  emailRaterDetails,
  dragNDropDetails,
  cpuSchedulerDetails,
  memoryAllocatorDetails,
  semanticAnalyzerDetails,
  personalPortfolioDetails,
  // weatherappDetails,
];
