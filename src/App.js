import logo from './logo.svg';
import downarrow from './downarrow.svg';
import './App.css';
import './keeda.css';


function App() {
  return (
    <div className="App">
      <header>
        <nav>

          <div className="log">
              <img src="https://examkeeda.com/_next/image/?url=%2Fimages%2Fexam-keeda-logo.png&w=128&q=75" alt="" />
          </div>
          <div className="nav">
            <ul>
              <li><a href="#" className="highlight">Home</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Typing Practice</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="sing">
            <button>Login</button>
            <button>Sing Up</button>
          </div>

        </nav>

      <div className="centar-part-main">
        <div className="header-text">
          <p>Skill up programming career <span className="highlight">coding</span> exercises, quizzes, and tutorials!</p>
        <button>PLAY QUIZ</button>
        </div>
        <div className="header-images-laptop">
          <img src="https://examkeeda.com/_next/image/?url=%2Fimages%2Fexam-keeda-quiz.png&w=1200&q=75" alt="" />
        </div>
      </div>

      <div className="item-cards">
      <div className="card"><p>5.0k+</p><p>Daily Users</p></div>
        <div className="card"><p>10+</p><p>Quality streams</p></div>
        <div className="card"><p>50+</p><p>Study Subjects</p></div>
      </div>

      <div className="trendig-cards">
        <div className="trending-top-desc">
          <h1>Trending Quiz Topics</h1>
          <p>You can find topic-wise study materials for different technologies and programming languages like C, C++, Javascript, Python, PHP, Node.js, React.js, HTML, CSS, SQL, etc. Exam Keeda provides <a className="highlight ">Study Materials</a> , test series, exercises, MCQ quizzes, tutorials, and coding competitions for all programming languages, cross platforms and frameworks and also get certificates.</p>
        </div>
        <div className="course-cards">
          <div className="course-card">
            <div  className="overflow">
            <img src="https://examkeeda.com/_next/image/?url=https%3A%2F%2Fexamkeeda.s3.ap-south-1.amazonaws.com%2Fsubject%2F1707205105870-479055956.jpg&w=828&q=75"  alt="" />
            </div>
            <div>
              <h2>Java</h2>
            </div>
            <button>PLAY QUIZ</button>
          </div>

          <div className="course-card">
            <div className="overflow">
            <img src="https://examkeeda.com/_next/image/?url=https%3A%2F%2Fexamkeeda.s3.ap-south-1.amazonaws.com%2Fsubject%2F1707205154469-694852922.jpg&w=828&q=75"  alt="" />
            </div >
            <div>
              <h2>PHP</h2>
            </div>
            <button>PLAY QUIZ</button>
          </div>

          <div className="course-card">
            <div  className="overflow">
            <img src="https://examkeeda.com/_next/image/?url=https%3A%2F%2Fexamkeeda.s3.ap-south-1.amazonaws.com%2Fsubject%2F1707205128179-479760586.jpg&w=828&q=75"  alt="" />
            </div>
            <div>
              <h2>JavaScript</h2>
            </div>
            <button>PLAY QUIZ</button>
          </div>

          <div className="course-card">
            <div className="overflow">
            <img src="https://examkeeda.com/_next/image/?url=https%3A%2F%2Fexamkeeda.s3.ap-south-1.amazonaws.com%2Fsubject%2F1707205141519-991194191.jpg&w=828&q=75"  alt="" />
            </div>
            
              <h2>Python</h2>
            
            <button>PLAY QUIZ</button>
          </div>
        </div>
      </div>

      <div className="view-content">
          <div className="view-main">
            <div className="top-view-content">
              <h1>Top-Picked Areas of Study</h1>
              <p>Exam Keeda offers you the best categories of tools and technologies like programming languages, web frameworks, app frameworks, game frameworks, cross-platforms, artificial intelligence, machine learning, databases, markup languages, and many more tools to upgrade your knowledge of information and technology.</p>
              <div>
                <div className="line">Programming Languages
                  <img src={downarrow} alt="" />
                </div>
                <div className="line">Various types of frameworks
                  <img src={downarrow} alt="" />  
                </div>
                
                <div className="line">Cross Platforms
                  <img src={downarrow} alt="" />  
                </div>
                
                <div className="line">Databases
                  <img src={downarrow} alt="" />  
                </div>
                
              </div>
              <button>TUTORIALS</button>
            </div>
          </div>
      </div>
      </header>
    </div>
  );
}

export default App;
