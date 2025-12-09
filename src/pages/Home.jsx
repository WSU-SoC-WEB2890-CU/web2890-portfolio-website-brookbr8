import { NavLink } from "react-router-dom"
import bbImg from "../assets/bb-img.jpeg"
import heroDesign from "../assets/hero-design.svg"
import staTickets from "/public/images/sta-ticket.png"
import recipeApp from "/public/images/recipe-app.png"
import review from "/public/images/review-portfolio.png"

function HomePage() {
  return (
    <div className="home">
      <section className="hero position-relative overflow-hidden ps-5">
        <div className="hero-bg-shapes"></div>

        <div className="container h-100 d-flex flex-column justify-content-center">
          <div className="hero-text">
            <h1 className="hero-title">Brook Brown</h1>
            <p className="hero-subtitle">Full-Stack Web Developer</p>

            <div className="hero-buttons">
              <a className="btn btn-accent btn-lg me-3" href="#seeMore">
                See More
              </a>
              <NavLink className="btn btn-outline-light btn-lg" to="/gallery">
                View Projects
              </NavLink>
            </div>
          </div>
        </div>

        <img src={heroDesign} alt="Design" className="hero-strip" />

        <div className="hero-image-wrapper">
          <div className="hero-image-bg"></div>
          <img src={bbImg} alt="Hero" className="hero-image rounded-circle" />
        </div>
      </section>

      <section className="skills" id="seeMore">
        <div className="container">
          <h2>My Skills</h2>
          <div className="skills-list">
            <div className="skill-item">HTML</div>
            <div className="skill-item">CSS</div>
            <div className="skill-item">SCSS</div>
            <div className="skill-item">JavaScript</div>
            <div className="skill-item">BootStrap</div>
            <div className="skill-item">React</div>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <div className="container">
          <h2 className="projects-title">Recent Projects</h2>

          <div className="projects-grid">
            <div className="project-card-home">
              <img src={staTickets} alt="Project 1" />
              <h5>STA Ticket</h5>
              <p>IT support ticketing system for on-campus tech staff.</p>
              <a href="https://statickets.netlify.app/" target="_blank" className="project-btn">
                View Project
              </a>
            </div>

            <div className="project-card-home">
              <img src={recipeApp} alt="Project 2" />
              <h5>Recipe App</h5>
              <p>A recipe management app with database and user-submitted recipes.</p>
              <a href="https://recipe-app-bb.netlify.app/" target="_blank" className="project-btn">
                View Project
              </a>
            </div>

            <div className="project-card-home">
              <img src={review} alt="Project 3" />
              <h5>Review Portfolio</h5>
              <p>A small portfolio built from a template to practice Bootstrap and SCSS.</p>
              <a href="https://web2890-review-assignment-brookbr8.netlify.app/" target="_blank" className="project-btn">
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
