import React from 'react';
import ParticlesComponent from '../particles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../button.jsx';
import './HomePage.css';
import TypeWriter from '../typewriter.jsx';
import { useNavigate } from 'react-router-dom';
export const HomePage = () => {
    return (
        <div className="HomePage">
            <div >
                <img src='./logo.jpg' href='/about' alt='Logo' className='logo-source'/>
            </div>
            <ParticlesComponent className="particles" />

            <div className="center-content">
                <h1 className="name">Denil Neil</h1>
                <div className="example">
                    <h3>
                        {/* <TypeWriter text='Software Engineer'/> */}
                        <TypeWriter />
                    </h3>
                </div>

                <div className="button-group">
                    <Button hrefLink="/about" text="About"/>
                    <Button hrefLink="/skills"text="Skills" />
                    <Button text="Projects" />
                    <Button hrefLink="https://drive.google.com/file/d/1g7pk7OZ-5F10iUKNqgnVcMn9B25h7VWB/view?usp=sharing" text="Resume" />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
