import React, { useEffect } from 'react';
import './About.css';
import Button from '../button.jsx';

export const About = () => {
  useEffect(() => {
    // Ensure the background color is set when this component is mounted
    document.body.style.backgroundColor = '#222222';

    // Cleanup function to reset background color when component is unmounted
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className="about-page">
        <div >
            <img src='../logo.jpg' href='' alt='logo' className='logo-source'/>
        </div>
      <div className="button-group">
                     <Button hrefLink="/about" text="About"/>
                     <Button hrefLink="/skills"text="Skills" />
                    <Button text="Projects" />
                    <Button hrefLink="https://drive.google.com/file/d/1g7pk7OZ-5F10iUKNqgnVcMn9B25h7VWB/view?usp=sharing" text="Resume" />
        </div>
    </div>
  );
};
