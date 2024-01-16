// About.js
import React from 'react';
import { faGuitar, faMicrophone, faFistRaised, faGamepad,faFilm,faBowlFood } from '@fortawesome/free-solid-svg-icons';
import Card from './AboutCard';
import styled from "styled-components"
import 'G:/Projects/portfolio/new portfolio/rohit-portfolio/rohit-portfolio/src/styles/About.css'; // Import your CSS file
const Skill = styled.div`
  width: 100%;
  display: grid;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }


`
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: centre;
margin-bottom:100000px
position: relative;
z-index: 1;
align-items: center;
linear-gradient(to top, #D7E1EC, #FFFFFF);s
clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`

const HobbieContainer  = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 50px;
flex-wrap: wrap;
display: grid;

grid-template-columns: repeat(3, 1fr);
grid-gap: 32px;
grid-auto-rows: minmax(100px, auto);
@media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
}
@media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
}
`
export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: transparent;
  background: linear-gradient(to right, #000428 , #004e92);
  -webkit-background-clip: text; /* Add this line for WebKit browsers like Chrome and Safari */
  color: transparent;
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const hobbiesData = [
  {
    icon: faGuitar,
    title: 'Guitar',
    description: 'I enjoy playing the guitar as a way to relax and express my creativity through music.',
  },
  {
    icon: faMicrophone,
    title: 'Singing',
    description: 'Passionate about singing, I find joy in sharing music with others.',
  },
  {
    icon: faFistRaised,
    title: 'Martial Arts',
    description: 'Dedicated to the practice of martial arts, fostering discipline and physical well-being.',
  },
  {
    icon: faGamepad,
    title: 'Games',
    description: "Gaming is not just a hobby for me; it's a way to unwind, strategize, and enjoy immersive experiences.",
  },
  {
    icon: faFilm,
    title: 'Watching Movies',
    description: 'I love exploring a wide range of movies, from classics to the latest releases.',
  },
  {
    icon: faBowlFood,
    title: 'Coocking Food',
    description: 'I love preparing food and enjoy crafting a variety of delicious and satisfying meals.',
  },
];

const About = () => {
  return (
    <Container className="About">
      <Title>About Me</Title>
      <div id='summary'>
      <p>
      Enthusiastic and dedicated B.Tech student in CSE AIML at Sharda University with a CGPA of 9.38*. Adept at solving complex technical challenges and passionate about leveraging technology to drive innovation. Quick learner with a solid foundation in data structures, algorithms, and machine learning. Proven leadership qualities demonstrated as the Machine Learning Lead at Google Developer Student Club. Experienced in full-stack development, including React.js, Node.js, and MongoDB, with notable projects like MyPaudha and PG Dissertation Management System. Seeking opportunities to apply and enhance my skills in a dynamic and challenging professional environment. </p>

      </div>
      <h3>Hobbies</h3>
      <HobbieContainer className="hobbies-list">
        {hobbiesData.map((hobby, index) => (
          <div className="hobby-container" key={index}>
           
            <Card {...hobby} />
            
            
          </div>
        ))}
      </HobbieContainer>
    </Container>
  );
}

export default About;
