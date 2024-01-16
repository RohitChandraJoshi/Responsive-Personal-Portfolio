import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import styled from 'styled-components';

export const ZoomableTimelineElement = styled(VerticalTimelineElement)`
  transition: transform 0.3s; /* Add transition for smooth zoom effect */

  &:hover {
    transform: scale(1.1); /* Zoom in effect on hover */
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: transparent;
  background: linear-gradient(to right, #000428, #004e92);
  -webkit-background-clip: text;
  /* Add this line for WebKit browsers like Chrome and Safari */
  color: transparent;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const DateText = styled.p`
  color:#48494a;
`;

const MobileZoomableTimelineElement = styled(ZoomableTimelineElement)`
  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
`;
const Container = styled.div`

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
function Experience() {
  return (
    <Container className="experience">
      <Title>Experience</Title>
      <VerticalTimeline lineColor="#3e497a">
        <MobileZoomableTimelineElement
          className="vertical-timeline-element--work"
          date={<DateText> June 2022 - Aug 2022 </DateText>}
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            SMART KNOWER | Machine learning intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Internship</h4>
          <p>ML gender classification model for a minor project.</p>
          <p>Built a major project to predict income using various ML algorithms.</p>
        </MobileZoomableTimelineElement>
        <MobileZoomableTimelineElement
          className="vertical-timeline-element--work"
          date={<DateText> 2022-2023 </DateText>}
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Google Developer Student Club | Machine learning lead
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Tech lead</h4>
          <p>Conducted two impactful Machine Learning Study Jam Boot camps.</p>
        </MobileZoomableTimelineElement>
      </VerticalTimeline>
    </Container>
  );
}

export default Experience;
