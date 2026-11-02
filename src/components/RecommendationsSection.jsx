import { Row, Col } from 'react-bootstrap'
import RecommendationCard from './RecommendationCard'

function RecommendationsSection({ recommendations }) {
  return (
    <section id="recommendations" className="mb-5">
      <h2 className="title-purple mb-4">Recommendations</h2>
      <Row className="g-3">
        {recommendations.map((rec) => (
          <Col key={rec.id} xs={12} md={4}>
            <RecommendationCard text={rec.text} />
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default RecommendationsSection
