import { Row, Col } from 'react-bootstrap'

function Intro({ name, text }) {
  return (
    <section id="about" className="mb-5">
      <Row className="align-items-center">
        <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
          <img src="/avatar.svg" alt={`Avatar de ${name}`} className="img-fluid avatar" />
        </Col>
        <Col xs={12} md={8}>
          <h1 className="title-purple">Hi, I'm {name}! 👋</h1>
          <p className="intro-text">{text}</p>
        </Col>
      </Row>
    </section>
  )
}

export default Intro
