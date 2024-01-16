// Card.js
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ icon, title, description }) => (
  <div className="hobby-card">
    <FontAwesomeIcon icon={icon} className="hobby-icon" />
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

Card.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
