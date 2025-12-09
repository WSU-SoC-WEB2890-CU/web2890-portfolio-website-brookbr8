import React, { useEffect, useState } from "react"
import { Container, Row, Col, Card, Button, Modal, Spinner } from "react-bootstrap"
import { ref, onValue } from "firebase/database"
import { db } from "../firebase"

const Gallery = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    const projectRef = ref(db, "projects")

    const unsubscribe = onValue(projectRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        const projectArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }))
        setProjects(projectArray)
      } else {
        setProjects([])
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="primary" />
        <span className="fs-3 ms-3">Loading...</span>
      </div>
    )
  }

  return (
    <div className="gallery-page py-5">
      <Container>
        <h1 className="text-center mb-5 text-primary">My Portfolio</h1>
        <Row className="g-4">
          {projects.map((item) => (
            <Col md={6} lg={4} key={item.id}>
              <Card className="project-card h-100" onClick={() => setSelectedItem(item)} style={{ cursor: "pointer" }}>
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.title}
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.shortDesc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={!!selectedItem} onHide={() => setSelectedItem(null)} centered size="lg">
        {selectedItem && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedItem.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={selectedItem.image} alt={selectedItem.title} className="img-fluid mb-4 rounded" />
              <p>{selectedItem.details}</p>
              <h6>Technologies Used:</h6>
              <ul>
                {(selectedItem.tech ? selectedItem.tech.split(",").map((t) => t.trim()) : []).map((t, index) => (
                  <li key={index}>{t}</li>
                ))}
              </ul>
            </Modal.Body>
            <Modal.Footer>
              {selectedItem.url && (
                <a href={selectedItem.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary me-2">
                  View Project
                </a>
              )}
              <Button variant="accent" onClick={() => setSelectedItem(null)}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  )
}

export default Gallery
