import { Card } from 'react-bootstrap'

function ProjectItem({ title, description, last }) {
  return (
    <>
      <Card className="border-0 bg-transparent">
        <Card.Body className="px-0">
          <Card.Title as="h6" className="fw-bold">{title}</Card.Title>
          <ul className="mb-0">
            <li>{description}</li>
          </ul>
        </Card.Body>
      </Card>
      {!last && <hr className="project-divider" />}
    </>
  )
}

export default ProjectItem
