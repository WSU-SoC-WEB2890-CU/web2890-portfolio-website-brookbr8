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

      <section id="seeMore" className="projects-section py-5 position-relative text-center">
        <div className="container">
          <h2 className="mb-5 text-dark">Recent Projects</h2>
          <div className="row justify-content-center g-4">
            <div className="col-md-4">
              <div className="project-card p-3 rounded shadow-sm">
                <img src={staTickets} alt="Project 1" className="img-fluid rounded mb-3" />
                <h5 className="mb-2">STA Ticket</h5>
                <p className="text-muted">Short description of the project goes here.</p>
                <a href="https://statickets.netlify.app/" target="_blank" className="btn btn-accent btn-sm">
                  View Project
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="project-card p-3 rounded shadow-sm">
                <img src={recipeApp} alt="Project 2" className="img-fluid rounded mb-3" />
                <h5 className="mb-2">Recipe App</h5>
                <p className="text-muted">Short description of the project goes here.</p>
                <a href="https://recipe-app-bb.netlify.app/" target="_blank" className="btn btn-accent btn-sm">
                  View Project
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="project-card p-3 rounded shadow-sm">
                <img src={review} alt="Project 3" className="img-fluid rounded mb-3" />
                <h5 className="mb-2">Review Portfolio</h5>
                <p className="text-muted">Short description of the project goes here.</p>
                <a
                  href="https://web2890-review-assignment-brookbr8.netlify.app/"
                  target="_blank"
                  className="btn btn-accent btn-sm"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
