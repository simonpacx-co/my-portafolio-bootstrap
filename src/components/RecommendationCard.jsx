import { Card } from 'react-bootstrap'

function RecommendationCard({ text }) {
  return (
    <Card className="recommendation-card h-100">
      <Card.Body>
        <Card.Text className="recommendation-text">“ {text} ”</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default RecommendationCard
