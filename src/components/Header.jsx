import { Navbar, Nav, Container } from 'react-bootstrap'

function Header({ name, email, phone }) {
  return (
    <Navbar expand="md" variant="dark" className="bg-purple">
      <Container>
        <Navbar.Brand href="#about" className="d-flex flex-column">
          <span>{name}</span>
          <small className="contact-info fst-italic">
            <i className="bi bi-envelope-fill me-1"></i>{email}
          </small>
          <small className="contact-info fst-italic">
            <i className="bi bi-telephone-fill me-1"></i>{phone}
          </small>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#recommendations">Recommendations</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
