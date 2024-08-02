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

  return (
    <div className="skills-page">
        <div className='logo-source'>
            <img src='../logo.png' href='' alt='logo'/>
        </div>
      <div className="button-group">
                <Button hrefLink="/about" text="About"/>
                <Button hrefLink="/skills"text="Skills" />
                <Button text="Projects" />
                <Button hrefLink="https://drive.google.com/file/d/1g7pk7OZ-5F10iUKNqgnVcMn9B25h7VWB/view?usp=sharing" text="Resume" />
        </div>
        <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};
