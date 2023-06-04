import { React, useState, useEffect } from "react";
import { throttle } from "lodash";
import './Header.css'
import classnames from 'classnames';
import $ from 'jquery';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header () {

  const [menushow, setmenushow] = useState('')
  const [whitemenu, setwhitemenu] = useState('')

  useEffect(()=>{
    scroll_control();
    outsideClick();
  }, []);
  
  const scroll_control = () => {
    window.addEventListener('scroll', throttle(function() {
      if (window.scrollY > 100) {
        setwhitemenu('white')
      } else if (window.scrollY < 99) {
        setwhitemenu('')
      }
    }), 500)
  }
  
  const outsideClick = () => {
    const targetDiv = document.getElementById("header");
    const handleClickOutside = (event) => {
      if (!targetDiv.contains(event.target)) {
        setmenushow('')
      }
    };
    document.addEventListener("click", handleClickOutside);
  }
  
  
  return (
    
    <header className={classnames('header', whitemenu)} id='header'>
      
      <ul className="header_cover">
        
        <div className="header_logo">
            <div><a href="/"
            onClick={()=>{
            window.scroll({top:0, left:0, behavior:'smooth'})
            }}
            >John's Portfolio</a></div>
        </div>
        <div className="header_empty"></div>
        <div className={classnames('header_menu', menushow)}>
          <div className="menu_title" onClick={()=>{
            let location_Aboutme = $('#Aboutme').offset().top - 120
            window.scroll({top: location_Aboutme, behavior:'smooth'})
            setmenushow('')
            }}>About me</div>
          <div className="menu_title" onClick={()=>{
            let location_Skills = $('#skills').offset().top - 75
            window.scroll({top: location_Skills, behavior:'smooth'})
            setmenushow('')
            }}>Skills</div>
          <div className="menu_title" onClick={()=>{
            let location_Project = $('#project').offset().top - 75
            window.scroll({top: location_Project, behavior:'smooth'})
            setmenushow('')
            }}>Projects</div>
        </div>
   
      </ul>

      <button className="toggle_btn" onClick={()=>{
        if (menushow === '') {
          setmenushow('show')
        } else {
          setmenushow('')
        }
      }}>
      <a href="#"><FontAwesomeIcon icon={faBars} size='2x'/></a>
      </button>

    </header>


 
  );
};

export default Header;