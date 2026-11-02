import { Row, Col } from 'react-bootstrap'
import SkillCard from './SkillCard'

function SkillsSection({ skills }) {
  return (
    <section id="skills" className="mb-5">
      <h2 className="title-purple mb-4">Skills</h2>
      <Row className="g-4">
        {skills.map((skill) => (
          <Col key={skill.id} xs={6} md={4} lg={2}>
            <SkillCard name={skill.name} experience={skill.experience} icon={skill.icon} />
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default SkillsSection
