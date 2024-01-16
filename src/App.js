import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react"
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Achievements from "./pages/Achievements";
import Footer from "./components/Footer";

import styled from "styled-components";
import ProjectDetails from "G:/Projects/portfolio/new portfolio/rohit-portfolio/rohit-portfolio/src/pages/ProjectDetails.jsx"
const Body = styled.div`
  background : background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  width: 100%;
  overflow-x: hidden;
`
const Wrapper = styled.div`
  width: 100%;
  background: linear-gradient(to bottom, #D7E1EC, #FFFFFF);
`;
const Wrapper2 = styled.div`
  width: 100%;
  background : background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  
`;





function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
 
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Body>
          <Wrapper>
          <Home />
          </Wrapper>

          <About />


          <Wrapper>
          <Skills />
          </Wrapper>
          <Wrapper2>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />

          </Wrapper2>
          
          <Wrapper>
          <Education />
          </Wrapper>
          
          <Experience />
          <Achievements />
          <Wrapper>
          <Contact />
          </Wrapper>
          
          
        <Footer />
        {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
        
      </Router>
    </div>
  );
}

export default App;
