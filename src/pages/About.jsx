import React from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const AboutMe = () => {
  const hobbies = [
    {
      name: "Travel",
      description: "I love exploring new places and experiencing different cultures.",
      icon: "✈️",
    },
    {
      name: "Video Games",
      description: "Gaming is my way to relax and appreciate storytelling and design.",
      icon: "🎮",
    },
    {
      name: "Reading",
      description: "I enjoy reading novels and tech articles to keep learning new things.",
      icon: "📚",
    },
    {
      name: "Movies / Shows",
      description: "Watching and enjoying many different types of film and series.",
      icon: "🎥",
    },
  ]

  return (
    <div className="about-page py-5">
      <Container>
        <Row className="align-items-center mb-5">
          <Col md={4} className="text-center">
            <div className="profile-pic-wrapper mx-auto mb-3">
              <img src="/images/profile.jpg" alt="Profile" className="img-fluid rounded-circle" />
            </div>
          </Col>
          <Col md={8}>
            <h1>About Me</h1>
            <p>
              Hi! I'm Brook Brown, a passionate web developer with experience in building modern, responsive, and
              interactive websites. I enjoy turning ideas into beautiful, functional web applications using HTML, CSS,
              SCSS, React, and more. I am constantly learning and exploring new technologies, and I love creating
              projects that help me grow while solving real-world problems.
            </p>
            <p>
              When I'm not coding and learning, I love exploring new places through travel, diving into immersive video
              games, and getting lost in a good book.
            </p>
            <Button href="#hobbies" className="btn-accent btn-lg mt-3">
              See More
            </Button>
          </Col>
        </Row>

        <h2 id="hobbies" className="text-center mb-4">
          My Hobbies
        </h2>
        <Row className="g-4 justify-content-center">
          {hobbies.map((hobby, idx) => (
            <Col md={6} lg={3} key={idx}>
              <Card className="hobby-card text-center p-3">
                <div className="hobby-icon" style={{ fontSize: "3rem" }}>
                  {hobby.icon}
                </div>
                <Card.Body>
                  <Card.Title>{hobby.name}</Card.Title>
                  <Card.Text>{hobby.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="cta-section">
          <h2>Let's Work Together!</h2>
          <p>If you’d like to discuss a project or make connections, feel free to reach out!</p>
          <Link to="/contact" className="btn-cta">
            Contact Me
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default AboutMe
