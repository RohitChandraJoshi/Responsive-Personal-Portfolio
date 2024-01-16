import styled, {ThemeProvider} from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../pages/constants';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
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

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  background: -o-radial-gradient(bottom, ellipse, #1B2735 0%, #090A0F 100%);
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
`;


const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    filter: invert(75%) sepia(98%) saturate(2356%) hue-rotate(282deg) brightness(85%) contrast(101%);
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <ThemeProvider theme={theme}>
    <FooterContainer>
      <FooterWrapper>
        <Logo>Rohit Chandra Joshi</Logo>
        <Nav>
        <ScrollLink smooth={true} duration={500} spy={true} exact='true' offset={-100} onClick={scrollToTop}>
               <NavLink>Home</NavLink>  
            </ScrollLink>
            <ScrollLink to="About" smooth={true} duration={500} spy={true} exact='true' offset={-100}>
            <NavLink>About</NavLink> 
            </ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={500} spy={true} exact='true' offset={-100}>
            <NavLink> Skills</NavLink> 
            </ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-100}>
            <NavLink>Projects</NavLink>  
            </ScrollLink>
            <ScrollLink to="education" smooth={true} duration={500} spy={true} exact='true' offset={-100}>
            <NavLink>Education</NavLink> 
            </ScrollLink>
            <ScrollLink to="experience" smooth={true} duration={500} spy={true} exact='true' offset={-100}>
            <NavLink>Experience</NavLink>  
            </ScrollLink>
            <ScrollLink to="achievements" smooth={true} duration={500} spy={true} exact='true' offset={-100}>
            <NavLink>Achievements</NavLink>   
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-100}>
            <NavLink>Contact</NavLink>   
            </ScrollLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.facebook} target="display"><FacebookIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.twitter} target="display"><XIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon /></SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          &copy; 2024 Rohit Chandra Joshi All rights reserved.
        </Copyright>

      </FooterWrapper>
    </FooterContainer>
    </ThemeProvider>
  );
}

export default Footer;