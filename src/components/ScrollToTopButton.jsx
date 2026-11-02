import { Button } from 'react-bootstrap'

function ScrollToTopButton() {

  const goTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <Button
      onClick={goTop}
      className="scroll-top-btn rounded-circle"
      aria-label="Volver arriba"
    >
      <i className="bi bi-arrow-up"></i>
    </Button>
  )
}

export default ScrollToTopButton
