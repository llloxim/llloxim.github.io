import './App.css'
import githubLogo from "./assets/github-mark.png";
import linkedLogo from "./assets/LI-In-Bug.png";
function App() {

  return (
    <>
      <h1>Eric Lu</h1>
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
    </>
  )
}

export default App
