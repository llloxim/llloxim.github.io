import './App.css'
import githubLogo from "./assets/github-mark.png";
import linkedLogo from "./assets/LI-In-Bug.png";
import React, { useState, useEffect } from 'react';
function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    const updateMousePosition = (e) => {
      setX(e.pageX);
      setY(e.pageY);
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  return (
    <>
      <div className="hover"
      style={{

        background: `radial-gradient(3.7em 4em at ${x}px ${y}px, #a6e7ed, transparent)`,
      }}
      > 
        <div className='socials'>
          <div className="card">  
              <button>    
                <a href="https://github.com/llloxim" target="_blank" rel="noopener noreferrer"><img src={githubLogo} width="100" height="100"></img ></a>
              </button> 
          </div>
          <div className="card">
            <button>
              <a href="https://www.linkedin.com/in/eric-lu-10a66b215/" target="_blank" rel="noopener noreferrer">
                <img src={linkedLogo} width="110" height="100"></img >
              </a>
            </button>
          </div>
        </div>
        <h1>Eric Lu</h1>
        <div className='large'>
        <div className='middle'>
          <div className='tmp'>
          <div className="topics">
            <ul>
              <h1>Education</h1>
              <h2>I have a degree in Computer Science and a Minor in Data Science from the Univerity of California, Berkeley</h2>
              <h2>I program mainly in Python but have experince with Javascript, SQL, C, and low level languages</h2>
            </ul>
          </div>
          </div>
          <div className='tmp'>
          <div className="topics">
            <ul>
              <h1>Coursework</h1>
              <h2>I have learned alot from my education and on my own time, courses I have taken include:</h2>
              <ul>
                <li>Internet Architecture and Protocols</li>
                <li>Programming Languages and Compilers</li>
                <li>Operating Systems and System Programming</li>
                <li>Computer Security</li>
                <li>Database Systems</li>
                <li>Artificial Intelligence</li>
                <li>Machine Structures</li>
              </ul>
            </ul>
          </div>
          </div>
        </div>
        <div className='tmp'>
            <h2>Stuff I have looked into on my own time</h2>
              <ul className='no_dots'>
                <li>Full Stack Development</li>
                <li>Node.JS</li>
                <li>React</li>
                <li>APIs</li>
                <li>CSS</li>
              </ul>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
