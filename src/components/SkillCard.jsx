import { Card } from 'react-bootstrap'

function SkillCard({ name, experience, icon }) {
  return (
    <Card className="skill-card shadow h-100 text-center">
      <Card.Body>
        <img src={icon} alt={name} className="skill-icon mb-2" />
        <Card.Title as="h6" className="skill-name">{name}</Card.Title>
        <Card.Text className="skill-exp">{experience}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SkillCard
