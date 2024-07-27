import CatalyticReactorImage from "/src/assets/catalytic_reactor.gif";
import GeographyQuizImage from "/src/assets/geography_quiz.png";
import RuneFallImage from "/src/assets/runefall.png";

export default [
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
    title: "World Geography Quiz",
    link: "https://secret-citadel-94988-86e2ffef1cda.herokuapp.com",
    description:
      'Test your knowledge of world geography with this fun quiz. You will be asked a series of multiple choice questions and given a score at the end of the quiz. If you score high enough, you will appear on the high scores. Quiz questions are generated procedurally (that is, there is not a database of "quiz questions", but rather an algorithm that uses a database of world geographical information to generate questions). The front-end is designed with Ruby on Rails and vanilla JavaScript, while the back end is an API that is also designed with Rails.',
    image: GeographyQuizImage,
    github_link: "https://github.com/NeilTheSeal/geography-quiz-fe",
  },
];
