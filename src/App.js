import "./Reset.css";
import "./App.css";
import { React, useEffect, useState } from "react";
import { throttle } from "lodash";
import $ from "jquery";
import classnames from 'classnames';
import Title from "./Title.js";
import Notice from "./Notice.js";
import Skills from "./Skills.js";
import Projects1 from "./Projects1";
import Projects2 from "./Projects2";
import Projects3 from "./Projects3";
import Footer from "./Footer";


function App() {

  let [whitecount, set_whitecount] = useState('')
  let [hammenucount, set_hammenucount] = useState('')
  
  useEffect(()=>{
    window.addEventListener('scroll', throttle(function() {
      if (window.scrollY > 150) {
        set_whitecount('show')
      } else if (window.scrollY < 100) {
        set_whitecount('')
      }
    }), 500)

  });

  return (
    <div className="App">

      {/* header */}

      <header className="header">
        <div id='whitemenu' className={classnames('whitemenu', whitecount)}>
        </div>
        {/* hamburger_menu */}
        
        <div className={classnames('hamburger_menu', hammenucount)} id='hamburger_menu'>
          <div className="hamburger_menulist" onClick={()=>{
            let location_Aboutme = $('#Aboutme').offset().top - 120
            window.scroll({top: location_Aboutme, behavior:'smooth'});
            set_hammenucount('')
            }}>About me</div>
          <div className="hamburger_menulist" onClick={()=>{
            let location_Skills = $('#skills').offset().top - 75
            window.scroll({top: location_Skills, behavior:'smooth'});
            set_hammenucount('')
            }}>Skills</div>
          <div className="hamburger_menulist"
          onClick={()=>{
            let location_Project = $('#project').offset().top - 75
            window.scroll({top: location_Project, behavior:'smooth'});
            set_hammenucount('')
            }}>Projects</div>
          {/* <div className="hamburger_menulist">Career</div> */}
        </div>
        

        {/* menu */}
        <div className="menu" id="menu">
          <div className="menu_1">
            <div className="maintitle" onClick={()=>{
              window.scroll({top:0, left:0, behavior:'smooth'})
              }}>John's Portfolio</div>
          </div>
          <div className="menu_2"></div>
          <div className="menu_3">
            <div className="menulist" onClick={()=>{
              let location_Aboutme = $('#Aboutme').offset().top - 120
              window.scroll({top: location_Aboutme, behavior:'smooth'})}}>About me</div>
            <div className="menulist" onClick={()=>{
              let location_Skills = $('#skills').offset().top - 75
              window.scroll({top: location_Skills, behavior:'smooth'})}}>Skills</div>
            <div className="menulist" onClick={()=>{
              let location_Project = $('#project').offset().top - 75
              window.scroll({top: location_Project, behavior:'smooth'})}}>Projects</div>
            {/* <div className="menulist">Career</div> */}
          </div>
          <button class="hamburger_button" onClick={()=>{
             if (hammenucount === '') {
              set_hammenucount('show')
             } else {
              set_hammenucount('')
             }
            }}>&#9776;</button>
        </div>

        <Title></Title>

      </header>
    


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
