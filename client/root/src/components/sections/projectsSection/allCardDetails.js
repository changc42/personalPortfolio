import skills from "../../../skillTypes";

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
  description: "An intuitive and clean web-based calulator.",
  skillsUsed: [skills.ReactJS],
  demo_url: "projects/calculator",
  github_url: "https://github.com/rockysingh3/React-Calculator",
};

let dragNDropDetails = {
  title: "drag-n-drop",
  image: "drag-n-drop.png",
  description: "Drag the knight to any position on the board",
  skillsUsed: [skills.ReactJS, skills.DragNDrop],
  demo_url: "projects/dragndrop",
  github_url: "https://github.com/changc42/drag-and-drop",
};

let emailRaterDetails = {
  title: "Email Rater",
  image: "emailRater.png",
  description: "Find out how negative or positive your emails are",
  skillsUsed: [skills.CSS, skills.JavaScript, skills.NodeJS],
  demo_url: "projects/emailrater",
  github_url: null,
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
  skillsUsed: [skills.CSS, skills.JavaScript, skills.HTML, skills.HTTP_REST],
  demo_url: "projects/weatherapp",
  github_url: "https://github.com/changc42/weatherapp",
};

let pokemonwarDetails = {
  title: "Pokemon War",
  image: "pokemonwar.PNG",
  description: "Aesthetic game of who can get a better hand.",
  skillsUsed: [skills.ReactJS],
  demo_url: "projects/pokemonwar",
  github_url: "https://github.com/changc42/pokemonwar",
};

export default [
  pokemonwarDetails,
  calculatorDetails,
  // emailyDetails,
  // bookfastDetails,
  dragNDropDetails,
  // weatherappDetails,

  emailRaterDetails,
];
