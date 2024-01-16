import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import styled, { ThemeProvider } from 'styled-components';


export const ZoomableTimelineElement = styled(VerticalTimelineElement)`
  transition: transform 0.3s; /* Add transition for smooth zoom effect */

  &:hover {
    transform: scale(1.1); /* Zoom in effect on hover */
  }
`;

const DateText = styled.p`
  color:#48494a;
`;
const Container = styled.div`
background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  display: flex;
  justify-content: center;
  position: relative;
  padding: 30px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 2;
  
`
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

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: transparent;
  background: linear-gradient(to right, #91A6FF, #FFFFFF);
  -webkit-background-clip: text; /* Add this line for WebKit browsers like Chrome and Safari */
  color: transparent;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const MobileZoomableTimelineElement = styled(ZoomableTimelineElement)`
  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
`;

function Education() {
  return (
    <ThemeProvider theme={theme}>
      <Container className="education">
        <Title>Education</Title>
        <VerticalTimeline lineColor="#3e497a">
          <MobileZoomableTimelineElement
            date={<DateText>2020-2024</DateText>}
            iconStyle={{ background: '#3e497a', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              SHARDA UNIVERSITY
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              B.Tech in Computer Science AIML
            </h4>
            <p>CGPA: 9.36*</p>
          </MobileZoomableTimelineElement>

          <MobileZoomableTimelineElement
            className="vertical-timeline-element--education"
            date={<DateText>2019</DateText>}
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              V.V.M.I.C. CHAMPAWAT
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Intermediate in PCM
            </h4>
            <p>PCM Percentage: 91.33%</p>
            <p>Overall Percentage: 87%</p>
          </MobileZoomableTimelineElement>

          <MobileZoomableTimelineElement
            className="vertical-timeline-element--education"
            date={<DateText>2017</DateText>}
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              V.V.M.I.C. CHAMPAWAT
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              High School
            </h4>
            <p>Overall Percentage: 80.80%</p>
          </MobileZoomableTimelineElement>
        </VerticalTimeline>
      </Container>
    </ThemeProvider>
  );
}

export default Education;
