import React from "react";
import { useState } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import styled, {ThemeProvider} from 'styled-components';
import HeroBgAnimation from "../Profile/HeroBGAnimation.js";
import Proj7 from "../assets/reduced_profile_2.png";
import { HeroContainer, HeroInnerContainer, Span} from './HeroStyle'
import "../styles/Home.css";
import { Bio } from "./constants";
import {FaFilePdf} from "react-icons/fa";
import Typewriter from 'typewriter-effect';
import _default from "../themes/default";
import "./stars.scss";
import ProjectDetails from "./ProjectDetails"
import emailIcon from "G:/Projects/portfolio/new portfolio/rohit-portfolio/rohit-portfolio/src/assets/4202011_email_gmail_mail_logo_social_icon.svg";
import githubIcon from "G:/Projects/portfolio/new portfolio/rohit-portfolio/rohit-portfolio/src/assets/githubicon.png";
import linkedInIcon from "G:/Projects/portfolio/new portfolio/rohit-portfolio/rohit-portfolio/src/assets/317725_linkedin_social_icon.svg"
const theme = {
  bg: "#1C1C27",
  bgLight: "#1C1E27",
  primary: "#854CE6",
  text_primary: "#F2F3F4",
  text_secondary: "#b1b2b3",
  card: "#171721",
  card_light: '#191924',
  button: "#854CE6",
  white: "#FFFFFF",
  black: "#000000",
}
const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 640px) {
    margin:10px;
  }
`;


const LinksIcon = styled.img`
  width: 40px;
  height: 40px;
  @media (max-width: 640px) {
    width: 30px;
    height: 30px;
  }
  
  &.github-icon {
    width: 55px;  // Adjust the width as needed
    height: 55px; // Adjust the height as needed
    @media (max-width: 640px) {
      width: 40px;
      height: 40px;
    }
  }
`;
const LinkItem = styled.div`
  position: relative;

  margin:10px;
  margin-top:8px;
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

const HeroBgAnimationContainer = styled.div`
position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 40%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    
    justify-content: center;
    padding: 0 0px;
  }
`;
export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 25px;
  display: flex;
  text-align: center;
  
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 60px;
  
  @media (max-width: 1000px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 18px;
    line-height: 48px;
    margin-bottom: 10px;
    overlap:hidden;
  }
`;

// export const Span = styled.span`
//   color: ${({ theme }) => theme.primary};
//   cursor: pointer;
// `;
const StyledEmailIcon = styled(EmailIcon)`
  font-size: 3rem; /* Adjust the size as needed */
`;

const StyledLinkedInIcon = styled(LinkedInIcon)`
  font-size: 3rem; /* Adjust the size as needed */
`;



// export const HeroContainer = styled.div`
//   background: ${({ theme }) => theme.card_light};
//   display: flex;
//   background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
//   overflow-x: hidden;
//   justify-content: center;
//   position: relative;
//   padding: 80px 30px;
//   @media (max-width: 960px) {
//     padding: 66px 16px;
//   }
//   @media (max-width: 640) {
//     padding: 32px 16px;
//   }
//   z-index: 1;

//   clip-path: polygon(20% 0%, 80% 0%, 100% 0, 100% 100%, 100% 86%, 20% 100%, 0 100%, 0 0);

const CenteredIconContainer = styled.div`
@keyframes topSideAni {
  0% {
      transform: translateY(-100px);
      opacity: 0;
  }
  100% {
      transform: translateY(0);
      opacity: 1;
  }
}
  display: flex;
  align-items: center;
  justify-content: center;
  animation: topSideAni 1s ease forwards;
`;

export const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
  
    max-width: 160px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 1rem;
    margin-left:15px;
    font-weight: 600;
    justify-content:center;
    align-text:center;
    align-items : center;
    transition: all 0.2s ease-in-out !important;
    background-image: linear-gradient(to right, #1D2B64 0%, #F8CDDA  51%, #1D2B64  100%);
    transition: 0.5s;
    margin: 10px;
    padding: 15px 4px;
    text-align: center;
    
    transition: 0.5s;
    background-size: 200% auto;
    color: white;            
    box-shadow: 0 0 6px #eee;
    border-radius: 10px;
    display: block;
    .btn-grad:hover {
      background-position: right center; /* change the direction of the change here */
      color: #fff;
      text-decoration: none;
    }
    
    &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
      transform: scale(1.01);

    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;

const Buttonouter = styled.div`
@keyframes topSideAni {
  0% {
      transform: translateY(-100px);
      opacity: 0;
  }
  100% {
      transform: translateY(0);
      opacity: 1;
  }
}
  display: flex;
  align-items: center;
  justify-content: center;
  animation: topSideAni 1s ease forwards;

`

// `;
function Home() {
  const color = '#ff0000';
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <ThemeProvider theme={theme}>
      <HeroContainer>
    <HeroBgAnimationContainer>
        <HeroBgAnimation />
      </HeroBgAnimationContainer>
      
      <HeroInnerContainer>
      
      <div className="intro">
      <img src={Proj7} alt="Profile" className="profile-image" />
        <h5>Hi, I am</h5> <h2>Rohit Chanrda Joshi</h2>
        <div className="prompt">
                    <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                       
        </div>
        <Buttonouter>

        <ResumeButton href="https://drive.google.com/file/d/1-4jGJ-W8hwxtIVl1mG4MHQigiVMMxaLs/view?usp=sharing" target="_blank"
          rel="noopener noreferrer"><FaFilePdf/>Check Resume</ResumeButton>
        </Buttonouter>
       
        
        <CenteredIconContainer>
        <LinksContainer>
          <LinkItem data-tooltip="Email">
            <a href="mailto:rohit123alliswell@gmail.com" target="_blank" rel="noopener noreferrer">
            <LinksIcon  src={emailIcon} alt="LeetCode Icon" />
            </a>
            
          </LinkItem>
         
          <LinkItem data-tooltip="Github">
          <a href="https://github.com/RohitChandraJoshi" target="_blank" rel ="noopener noreferrer">
          <LinksIcon className="github-icon" src={githubIcon} alt="GitHub Icon" />
          
          </a>
            
          </LinkItem>

          <LinkItem data-tooltip="Linkedin">
          <a href="https://www.linkedin.com/in/rohitchandrajoshi/" target="_blank" rel ="noopener noreferrer">
          <LinksIcon src={linkedInIcon} alt="gfg Icon" style={{color: color} } />
          </a>
            
          </LinkItem>

         

        </LinksContainer>
      </CenteredIconContainer>   
        
          
      </div>
      

    
      <div id="stars" />
      <div id="stars2"/>
      <div id="stars3"/>
      
      {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
      </HeroInnerContainer>
      </HeroContainer>
    </ThemeProvider>
    
  );
}

export default Home;
