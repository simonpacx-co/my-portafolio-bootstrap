import { Row, Col } from 'react-bootstrap'
import ProjectItem from './ProjectItem'

function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="mb-5">
      <h2 className="title-purple mb-3">Projects</h2>
      <Row className="justify-content-center">
        <Col xs={12} lg={10}>
          {projects.map((project, index) => (
            <ProjectItem
              key={project.id}
              title={project.title}
              description={project.description}

              last={index === projects.length - 1}
            />
          ))}
        </Col>
      </Row>
    </section>
  )
}

export default ProjectsSection
