import React, { useEffect } from 'react';
import './Skills.css';
import Button from '../button.jsx';
import BallCanvas from '../canvas/Ball.jsx';
import { technologies } from '../constants';

export const Skills = () => {
  useEffect(() => {
    // Ensure the background color is set when this component is mounted
    document.body.style.backgroundColor = '#222222';

    // Cleanup function to reset background color when component is unmounted
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  // Ensure the number of technologies is even for two equal rows
  const half = Math.ceil(technologies.length / 2);
  const firstRow = technologies.slice(0, half);
  const secondRow = technologies.slice(half);

  return (
    <div className="skills-page">
      <div >
        <img className='logo-source' src='../logo.jpg' href='' alt='logo'/>
      </div>
      <div className="button-group">
        <Button hrefLink="/about" text="About"/>
        <Button hrefLink="/skills" text="Skills" />
        <Button text="Projects" />
        <Button hrefLink="https://drive.google.com/file/d/1g7pk7OZ-5F10iUKNqgnVcMn9B25h7VWB/view?usp=sharing" text="Resume" />
      </div>
      <div className="grid-container">
        {firstRow.map((technology) => (
          <div className="ball-container" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
        {secondRow.map((technology) => (
          <div className="ball-container" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};
