import { useState } from 'react'

import { Container } from 'react-bootstrap'

import Header from './components/Header'
import Intro from './components/Intro'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import RecommendationsSection from './components/RecommendationsSection'
import LeaveRecommendationForm from './components/LeaveRecommendationForm'
import Footer from './components/Footer'

import { personalInfo, skills, projects, initialRecommendations } from './data/portfolioData'

function App() {

  const [recommendations, setRecommendations] = useState(initialRecommendations)

  const addRecommendation = (newRec) => {

    setRecommendations([...recommendations, { id: Date.now(), ...newRec }])
  }

  return (
    <>
      <Header name={personalInfo.name} email={personalInfo.email} phone={personalInfo.phone} />
      <Container as="main" className="py-4">
        <Intro name={personalInfo.name} text={personalInfo.intro} />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <RecommendationsSection recommendations={recommendations} />
        <LeaveRecommendationForm onAdd={addRecommendation} />
      </Container>

      <Footer />
    </>
  )
}

export default App
