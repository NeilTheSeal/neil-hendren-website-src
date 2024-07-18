import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <h3>
        <a href="https://virtual-labs.learncheme.com/catalytic-reactor">
          Catalytic Reactor Virtual Laboratory
        </a>
      </h3>
      <div className="project right-image">
        <p>
          The Catalytic Reactor Virtual Laboratory is a chemical engineering
          laboratory assignment done entirely in the web browser. The user
          interface is designed with SVG graphics, and animations of the SVG is
          done with JavaScript. The back-end, which performs the calculations
          necessary for the assignment, uses Express.js as the server and
          PostgreSQL as the database.
        </p>
        <img
          src="/src/assets/catalytic_reactor.gif"
          alt="Catalytic Reactor Virtual Laboratory"
        />
      </div>
      <h3>
        <a href="https://runefall.netlify.app">RuneFall</a>
      </h3>
      <div className="project left-image">
        <img src="/src/assets/runefall.png" alt="RuneFall" />
        <p>
          RuneFall is a search engine for cards used in the card game RuneTerra.
          The front end is a single-page web application designed using React,
          React Router, and Tailwind. The back end is a RESTful API built with
          Ruby on Rails and PostgreSQL.
        </p>
      </div>
      <h3>
        <a href="https://secret-citadel-94988-86e2ffef1cda.herokuapp.com">
          World Geography Quiz
        </a>
      </h3>
      <div className="project right-image">
        <p>
          Test your knowledge of world geography with this fun quiz. You will be
          asked a series of multiple choice questions and given a score at the
          end of the quiz. If you score high enough, you will appear on the high
          scores. Quiz questions are generated procedurally (that is, there is
          not a database of &quot;quiz questions&quot;, but rather an algorithm
          that uses a database of world geographical information to generate
          questions). The front-end is designed with Ruby on Rails and vanilla
          JavaScript, while the back end is an API that is also designed with
          Rails.
        </p>
        <img src="/src/assets/geography_quiz.png" alt="World Geography Quiz" />
      </div>
    </section>
  );
}
