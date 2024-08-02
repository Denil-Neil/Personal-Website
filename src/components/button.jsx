// src/components/Button.js
import React from 'react';
import './button.css';
import { useNavigate } from 'react-router-dom';

const Button = ({ text, onClick, hrefLink }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (hrefLink) {
        if (hrefLink.startsWith('http')) {
            window.open(hrefLink, '_blank');
        } else {
        navigate(hrefLink);
    }
    }
  };

  return (
    <button className="button" onClick={handleClick}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
