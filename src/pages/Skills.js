import React from 'react'
import styled, {ThemeProvider} from 'styled-components'
import { skills } from './constants'
import leetcodeIcon from "G:/Projects/portfolio/new portfolio/rohit-portfolio/rohit-portfolio/src/assets/leetcode.svg"
import gfgIcon from "G:/Projects/portfolio/new portfolio/rohit-portfolio/rohit-portfolio/src/assets/icons8-geeksforgeeks.svg"
import hackerrankIcon  from "G:/Projects/portfolio/new portfolio/rohit-portfolio/rohit-portfolio/src/assets/4373234_hackerrank_logo_logos_icon.svg"
import codechefIcon from "G:/Projects/portfolio/new portfolio/rohit-portfolio/rohit-portfolio/src/assets/codechef.svg"
const theme = {
  bg:"#1C1C27",
  bgLight: "#1C1E27",
  primary:"#854CE6",
  text_primary:"#F2F3F4",
  text_secondary:"#b1b2b3",
  card:"#171721",
  card_light: '#191924',
  button:"#854CE6",
  white:"#FFFFFF",
  black:"#000000",}



const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: centre;
position: relative;
z-index: 1;
align-items: center;

background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
transition: transform 0.3s ease-in-out;
cursor: pointer;
width: 100%;
max-width: 1100px;

gap: 10px;
@media (max-width: 960px) {
    flex-direction: column;
    gap:5px;
    max-width: 1100px;
}
`

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
color: transparent;
background: linear-gradient(to right, #91A6FF, #FFFFFF);
-webkit-background-clip: text; /* For WebKit browsers like Chrome and Safari */
background-clip: text;

@media (max-width: 768px) {
  margin-top: 12px;
  font-size: 32px;
}
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const SkillsContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(2, 1fr); /* Two columns */
grid-gap: 80px;
justify-content: center;
margin-top: 20px;

@media (max-width: 768px) {
  justify-content: center;
  font-size: 16px;
  grid-template-columns: repeat(1, 1fr);
  padding-left:9%;
}
`

const Skill = styled.div`
  width: 100%;
  display: grid;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border:  0.1px solid #e6944c;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  transition: all 0.5s ease-in-out;
&:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
    filter: brightness(1.1);
}
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }


`

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

const CenteredIconContainer = styled.div`
  display: flex;
  align-items: center;
  position: bottom;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 20px; // Adjust the margin as needed
  @media (max-width: 500px) {
    margin-bottom: 80px;
  }
`;

const SkillImage = styled.img`
  width: 50px;
  height: 50px;
  align-item:centre; 
`;
const HoverableContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Tooltip = styled.div`
  position: absolute;
  top: -30px; /* Adjust the distance from the icon */
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 5px;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
`;


const LinksIcon = styled.img`
  width: 60px;
  height: 60px;
`;
const LinkItem = styled.div`
  position: relative;
  margin-right: 40px;
  margin-bottom:30px;
  margin-top:40px;
  cursor: pointer;
  &:hover {
    ${LinksIcon} {
      filter: invert(75%) sepia(98%) saturate(2356%) hue-rotate(282deg) brightness(85%) contrast(101%);
    }
  &:hover::after {
    content: attr(data-tooltip);
    position: absolute;
    top: -30px; /* Adjust the distance from the icon */
    left: 50%;
    color:#854CE6;
    transform: translateX(-50%);
    background-color: #333;
    color: white;
    padding: 5px;
    border-radius: 5px;
  }
`;

const Skills = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container id="skills">
        <Wrapper>
          <Title>
            Skills</Title>
          <Desc>
          Here are the skills I've been actively working on and have mastered over the past two years:
          </Desc>
          <SkillsContainer>
            {skills.map((skill) => (
              <Skill key={skill.title}>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item, index) => (
                    <SkillItem key={index}>
                      <SkillImage src={item.image} />
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            ))}
          </SkillsContainer>
          <leetcodeIcon />
        </Wrapper>

        <CenteredIconContainer>
        <LinksContainer>
          <LinkItem data-tooltip="LeetCode">
            <a href="https://leetcode.com/Rohit_Chandra_Joshi/" target="_blank" rel="noopener noreferrer">
            <LinksIcon  src={leetcodeIcon} alt="LeetCode Icon" />
            </a>
            
          </LinkItem>
         
          <LinkItem data-tooltip="GeeksforGeeks">
          <a href="https://auth.geeksforgeeks.org/user/rohit123joshi" target="_blank" rel ="noopener noreferrer">
          <LinksIcon src={gfgIcon} alt="gfg Icon" />
          </a>
            
          </LinkItem>

          <LinkItem data-tooltip="HackerRank">
          <a href="https://www.hackerrank.com/profile/rohit123alliswe1" target="_blank" rel ="noopener noreferrer">
          <LinksIcon src={hackerrankIcon} alt="gfg Icon" />
          </a>
            
          </LinkItem>

          <LinkItem data-tooltip="Codechef">
          <a href="https://www.codechef.com/users/rohit_joshi" target="_blank" rel ="noopener noreferrer">
          <LinksIcon src={codechefIcon} alt="gfg Icon" />
          </a>
            
          </LinkItem>

        </LinksContainer>
      </CenteredIconContainer>
      </Container>

     
    </ThemeProvider>
  );
};

export default Skills;