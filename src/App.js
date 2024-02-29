import "./Reset.css";
import "./App.css";
import { React } from "react";
import Title from "./Title.js";
import Notice from "./Notice.js";
import Skills from "./Skills.js";
import Projects1 from "./Projects1";
import Projects2 from "./Projects2";
import Projects3 from "./Projects3";
import Footer from "./Footer";
import Header from "./Header";


function App() {

  return (
    <div className="App">

      {/* header */}
     <Header></Header>

      {/* title */}
     <Title></Title>

      {/* About me */}
      <section className="Aboutme" id="Aboutme">
        <div className="inner">
          <div className="notice_name">
            <div className="box1"><span className="material-symbols-outlined">link</span></div>
            <div className="box2">
              <div className="box2_text">ABOUT ME</div>
              <div className="box2_bar"></div>  
            </div>
            
          </div>
          <Notice></Notice>
        </div>        
      </section>

      {/* skills */}
      <section className="skills" id='skills'>
        <div className="inner">
          <div className="notice_name">
            <div className="box1"><span className="material-symbols-outlined">link</span></div>
            <div className="box2">
              <div className="box2_text">SKILLS</div>
              <div className="box2_bar"></div>  
            </div>
          </div>
          <Skills></Skills>
        </div>
      </section>

      {/* project */}
      <section className="project" id='project'>
        <div className="inner">
          <div className="notice_name">
            <div className="box1"><span className="material-symbols-outlined">link</span></div>
            <div className="box2">
              <div className="box2_text">PROJECTS</div>
              <div className="box2_bar"></div>  
            </div>
          </div>
          <Projects1></Projects1>
          <Projects2></Projects2>
          <Projects3></Projects3>
        </div>
      </section>


      {/* footer */}
      <section className="footer">
        <div className="inner">
          <Footer></Footer>
        </div>
      </section>

    </div>
  );
}

export default App;
