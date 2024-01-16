import React from 'react';
import styled from 'styled-components';


const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 330px;
  height: 459px;
  gap:10px;
  padding: 1%;
  text-align: center;
  border:  0.1px solid #e6944c;
    padding: 18px 36px;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;  
    &:hover {
      transform: scale(1.2);
    }
    @media (max-width: 640px) {
      width: 300px;
      height:auto;
  }
`;

const AchievementImage = styled.img`
  max-width: 100%;
  height: 170px;
  width:210px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const AchievementCard = ({ name, position, description, imagesrc }) => {
  return (
    <CardContainer>
      <AchievementImage src={imagesrc} alt={name} />
      <h3>{name}</h3>
      <h4>{position}</h4>
      <p>{description}</p>
    </CardContainer>
  );
};

export default AchievementCard;
