import React from 'react';
import "./Projects.css";

function Projects3(props) {
  return (
    <div className='projects_main'>
      <div className='inner'>

        <div className='projects_box1'>
          <div className='projects_name'>포트폴리오 웹사이트</div>
          <div className='projects_date'>제작기간 : 2개월 / 하루2~3시간 (개인 프로젝트)</div>
        </div>
        <div className='projects_box2'>
          <div className='projects_image'>
            <img src="img/포트폴리오1.png" className='projects_image_image1'></img>
          </div>
          <div className='projects_notice'>
            <div className='projects_notice_text'>
            포트폴리오 용도로 제작한 웹사이트입니다. 지금 보고 있는 바로 이 웹사이트에 해당합니다.
            <br></br><br></br>순수 React로 개발하였습니다.
             </div>
            <div className='projects_notice_orientalbar'></div>
            <div className='projects_notice_links'>
              <div className='projects_notice_link'>
                <div className='projects_notice_link_name'>
                  <span class="material-symbols-outlined">done</span>주요기능
                </div>
                <div className='projects_notice_link_link'>
                  출결석 관리, 출석기록하기, 명단 추가/삭제, 소그룹 추가/삭제, 출결통계 확인
                </div>
              </div>
              <div className='projects_notice_link'>
                <div className='projects_notice_link_name'>
                  <span class="material-symbols-outlined">done</span>GitHub
                </div>
                <div className='projects_notice_link_link'>
                  <a href='https://github.com/johnlovesyou/portfolio' target='_blank'>github.com/johnlovesyou/portfolio</a> 
                </div>
              </div>
              <div className='projects_notice_link'>
                <div className='projects_notice_link_name'>
                  <span class="material-symbols-outlined">done</span>URL
                </div>
                <div className='projects_notice_link_link'>
                  <a href='http://www.john-portfolio.site' target='_blank'>john-portfolio.site</a> 
                </div>
              </div>
              <div className='projects_notice_link'>
                <div className='projects_notice_link_name'>
                  <span class="material-symbols-outlined">done</span>반응형웹여부
                </div>
                <div className='projects_notice_link_link'>
                  가능
                </div>
              </div>
              <div className='projects_notice_link'>
                <div className='projects_notice_link_name'>
                  <span class="material-symbols-outlined">done</span>FrontEnd
                </div>
                <div className='projects_notice_link_link'>
                  React
                </div>
              </div>
              <div className='projects_notice_link'>
                <div className='projects_notice_link_name'>
                  <span class="material-symbols-outlined">done</span>Deployment
                </div>
                <div className='projects_notice_link_link'>
                  Netlify
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects3;