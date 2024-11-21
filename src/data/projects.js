import ExpansionImage from "/src/assets/adiabatic_irreversible_expansion_compression.jpg";
import CatalyticReactorImage from "/src/assets/catalytic_reactor.gif";
import GeographyQuizImage from "/src/assets/geography_quiz.png";
import GithubPagesImage from "/src/assets/github_pages.png";
import LearnChemEImage from "/src/assets/learncheme.jpg";
import RuneFallImage from "/src/assets/runefall.png";

export default [
  {
    title: "LearnChemE",
    link: "https://learncheme.com",
    description:
      "LearnChemE is a website that provides free educational resources for chemical engineering students and professionals. The website is built on the WordPress platform, with custom widgets, components, and scripts I designed. LearnChemE has thousands of educational screencasts on all sorts of engineering topics, as well as 100+ interactive simulations, many of which I authored.",
    image: LearnChemEImage,
  },
  {
    title: "Catalytic Reactor Virtual Laboratory",
    link: "https://virtual-labs.learncheme.com/catalytic-reactor",
    description:
      "The Catalytic Reactor Virtual Laboratory is a chemical engineering laboratory assignment done entirely in the web browser. The user interface is designed with SVG graphics, and animations of the SVG is done with JavaScript. The back-end, which performs the calculations necessary for the assignment, uses Express.js as the server and PostgreSQL as the database.",
    image: CatalyticReactorImage,
    github_link: null,
  },
  {
    title: "RuneFall",
    link: "https://runefall.netlify.app",
    description:
      "RuneFall is a search engine for cards used in the card game RuneTerra. The front end is a single-page web application designed using React, React Router, and Tailwind. The back end is a RESTful API built with Ruby on Rails and PostgreSQL.",
    image: RuneFallImage,
    github_link: "https://github.com/runefall",
  },
  {
    title:
      "Example of a Scientific Simulation",
    link: "https://learncheme.com/simulations/thermodynamics/thermo-1/reversible-irreversible-expansion-compression-work/",
    description:
      "This simulation demonstrates the difference between reversible and irreversible expansion or compression of a gas. The user can change the pressure and volume of the gas, and the simulation will show the work done on the gas. The simulation is written in JavaScript and uses the HTML5 canvas element for rendering.",
    image: ExpansionImage,
    github_link:
      "https://github.com/LearnChemE/LearnChemE.github.io/tree/master/demos/ReversibleAndIrreversibleExpansionAndCompressionWork",
  },
  {
    title:
      "NeilTheSeal GitHub Pages",
    link: "https://neiltheseal.github.io",
    description:
      "This is the site where I put my side projects and some fun web applications that I made in my free time.",
    image: GithubPagesImage,
    github_link:
    "https://github.com/NeilTheSeal/NeilTheSeal.github.io/tree/main"
  },
  {
    title: "World Geography Quiz",
    link: "https://secret-citadel-94988-86e2ffef1cda.herokuapp.com",
    description:
      'Test your knowledge of world geography with this fun quiz. You will be asked a series of multiple choice questions and given a score at the end of the quiz. If you score high enough, you will appear on the high scores. Quiz questions are generated procedurally (that is, there is not a database of "quiz questions", but rather an algorithm that uses a database of world geographical information to generate questions). The front-end is designed with Ruby on Rails and vanilla JavaScript, while the back end is an API that is also designed with Rails.',
    image: GeographyQuizImage,
    github_link: "https://github.com/NeilTheSeal/geography-quiz-fe",
  },
];
