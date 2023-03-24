import React from 'react';
import "./Footer.css";

function Footer(props) {
  return (
    <div className='footer'>
      <div className='footer_box'>
        <div className='footer_box_box1'>
          <div className='footer_box_image'>
            <a href='https://github.com/johnlovesyou/'>
              <img className='footer_white' src='img/git-hub.png'></img>
            </a>
          </div>
          <div className='footer_box_image'>
            <a href='#'>
              <img className='footer_instar' src='img/instagram.png'></img>
            </a>
          </div>
          <div className='footer_box_image'>
            <a href='#'>
              <img className='footer_white' src='img/facebook.png'></img>
            </a>
          </div>
        </div>
        <div className='footer_box_box2'>© 2023. Lee Yo Han. All rights reserved.</div>
      </div>
    </div>
  );
}

export default Footer;