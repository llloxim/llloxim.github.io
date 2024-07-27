import './App.css'
import githubLogo from "./assets/github-mark.png";
import linkedLogo from "./assets/LI-In-Bug.png";
import React, { useState, useEffect } from 'react';
function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    const updateMousePosition = (e) => {
      setX(e.clientX);
      setY(e.clientY);
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
      </div>
    </>
  )
}

export default App
