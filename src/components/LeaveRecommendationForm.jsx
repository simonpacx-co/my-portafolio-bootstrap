import { useState } from 'react'
import { Form, Button, Row, Col, Alert } from 'react-bootstrap'

function LeaveRecommendationForm({ onAdd }) {

  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!message.trim()) return

    const text = name.trim() ? `${message} — ${name}` : message
    onAdd({ text })
    setName('')
    setMessage('')
    setSent(true)
  }

  return (
    <section id="contact" className="mb-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h4 className="mb-3">Leave a Recommendation</h4>
          {sent && (
            <Alert variant="success" dismissible onClose={() => setSent(false)}>
              ¡Gracias por tu recomendación!
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="recName">
              <Form.Label visuallyHidden>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name (Optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="recMessage">
              <Form.Label visuallyHidden>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                placeholder="Message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <div className="text-center">
              <Button type="submit" variant="outline-purple" className="px-5">Submit</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </section>
  )
}

export default LeaveRecommendationForm
