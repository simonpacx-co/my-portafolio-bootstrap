export const personalInfo = {
  name: 'Jane Doe',
  email: 'jdoe@jeemail.com',
  phone: '+13456764598',
  intro:
    'I am a full stack developer with 2 years of experience in both application and presentation layers. I have worked on applications and microservices deployed on IBM Cloud. I am an avid user of IBM Watson Services and have worked on Watson Assistant, NLU, Sentiment analyzer to name a few.',
}

const icon = (name) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`

export const skills = [
  { id: 1, name: 'HTML', experience: '2 years experience', icon: icon('html5') },
  { id: 2, name: 'JavaScript', experience: '1.5 years experience', icon: icon('javascript') },
  { id: 3, name: 'Java', experience: '.5 years experience', icon: icon('java') },
  { id: 4, name: 'React', experience: '1 year experience', icon: icon('react') },
  { id: 5, name: 'Node.js', experience: '1 years experience', icon: icon('nodejs') },
  { id: 6, name: 'CSS', experience: '2 years experience', icon: icon('css3') },
]

export const projects = [
  {
    id: 1,
    title: 'Chatbot',
    description:
      'Developed a secure website integrated with chatbot for an automobile client using HTML, CSS, JavaScript and IBM Watson Assistant',
  },
  {
    id: 2,
    title: 'Sentiment Analyzer',
    description:
      'Developed and deployed a sentiment analyzer for the box reviews section of an eCommerce platform using IBM NLU',
  },
  {
    id: 3,
    title: 'Fashion Website',
    description:
      'Created a styled multi-page website for a new player in the fashion industry and integrated it with a shopping cart, using stripe for payment gateway',
  },
]

export const initialRecommendations = [
  {
    id: 1,
    text: 'Jane is a very quick learner and quickly grasps key concepts of Web development. She got a great attitude & she is an excellent team player. She has a curious mind and asks the right question. She takes initiative within a team and has potentials to lead the team.',
  },
  {
    id: 2,
    text: 'Working with Jane has been an awesome experience. She is highly knowledgable and always goes the extra step to make sure everything is right. For any future projects that need her expertise I would definitely want to work with her again.',
  },
  {
    id: 3,
    text: 'I had worked along with Jane during the initial phase of our venture which needed Web development. She is a committed resource who has in depth knowledge about the domain. She will be an asset for any organisation!',
  },
]
