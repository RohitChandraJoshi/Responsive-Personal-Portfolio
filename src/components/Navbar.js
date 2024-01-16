import React, { useEffect, useState } from "react";
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';  // Import ScrollLink and scroll
import {FaGraduationCap , FaFilePdf, FaHome, FaUser, FaCode, FaProjectDiagram, FaBriefcase, FaTrophy, FaEnvelope } from 'react-icons/fa';
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import { DiCssdeck } from 'react-icons/di';
import portfolio from "../assets/portfolio.svg"
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import ProjectDetails from "G:/Projects/portfolio/new portfolio/rohit-portfolio/rohit-portfolio/src/pages/ProjectDetails.jsx"
import styled, {ThemeProvider} from "styled-components";
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

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  
  useEffect(() => {
    // Check if there's a hash in the URL and scroll to that section
    const hash = window.location.hash.substring(1);
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <ThemeProvider theme={theme}>
      
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        
         
        
          <MobileIcon>
          <FaBars onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}/>
          </MobileIcon>
         
        
      </div>
      <div id="stars" />
      <div id="stars2"/>
      <div id="stars3"/>
      <div className="links">
      
       <div>
          <img src={portfolio} alt="Portfolio Icon" />
        </div>
            
        
        
        <ScrollLink smooth={true} duration={500} spy={true} exact='true' offset={-100} onClick={scrollToTop}>
                <FaHome /> Home
            </ScrollLink>
            <ScrollLink to="About" smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                <FaUser /> About
            </ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                <FaCode /> Skills
            </ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                <FaProjectDiagram /> Projects
            </ScrollLink>
            <ScrollLink to="education" smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                <FaGraduationCap /> Education
            </ScrollLink>
            <ScrollLink to="experience" smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                <FaBriefcase /> Experience
            </ScrollLink>
            <ScrollLink to="achievements" smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                <FaTrophy /> Achievements
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                <FaEnvelope /> Contact
            </ScrollLink>
        
        {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
      </div>
    </div>
    </ThemeProvider>
  );
}

export default Navbar;
