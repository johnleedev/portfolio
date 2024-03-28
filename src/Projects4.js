import React from 'react';
import "./Projects.css";

function Projects4(props) {
  return (
    <div className='projects_main'>
      <div className='inner'>

        <div className='projects_box1'>
          <div className='projects_name'>교회수첩</div>
          <div className='projects_date'>제작기간 : 1주 (개인 프로젝트)</div>
        </div>
        <div className='projects_box2'>
          <div className='projects_image'>
            <img src="img/project3.jpeg" className='projects_image_image1'></img>
          </div>
          <div className='projects_notice'>
            <div className='projects_notice_text'>
              기존의 교회에서 사용하던 종이 교인수첩(요람)을 대신하여 만든 플랫폼 앱입니다. 개발은 100% 본인이 제작했습니다. 아직 정식 출시전이고, 스토어에 먼저 업로드(24.3.12)만 한 상태라서, 아직 미흡한 부분이 많으며, 현재 계속 업데이트 중입니다.
            <br></br><br></br>리액트 네이티브로 제작했으며, 벡엔드는 Nodejs, MySql을 사용했습니다.
            <br></br><br></br>현재 서비스 중입니다.
            </div>
            <div className='projects_notice_orientalbar'></div>
            <div className='projects_notice_links'>
              <div className='projects_notice_link'>
                <div className='projects_notice_link_name'>
                  <span class="material-symbols-outlined">done</span>주요 서비스
                </div>
                <div className='projects_notice_link_link'>
                  교인 수첩, 교인 목록 열람
                </div>
              </div>
              <div className='projects_notice_link'>
                <div className='projects_notice_link_name'>
                  <span class="material-symbols-outlined">done</span>GitHub
                </div>
                <div className='projects_notice_link_link'>
                  현재 서비스 중이라 비공개합니다.
                </div>
              </div>
              <div className='projects_notice_link'>
                <div className='projects_notice_link_name'>
                  <span class="material-symbols-outlined">done</span>플레이스토어(구글) URL
                </div>
                <div className='projects_notice_link_link'>
                  <a href='https://play.google.com/store/apps/details?id=com.churchbooklet.app' target='_blank'>https://play.google.com/store/apps/details?id=com.churchbooklet.app</a> 
                </div>
              </div>
              <div className='projects_notice_link'>
                <div className='projects_notice_link_name'>
                  <span class="material-symbols-outlined">done</span>앱스토어(애플) URL
                </div>
                <div className='projects_notice_link_link'>
                  <a href='https://apps.apple.com/kr/app/%EA%B5%90%ED%9A%8C%EC%88%98%EC%B2%A9/id6479247886' target='_blank'>https://apps.apple.com/kr/app/%EA%B5%90%ED%9A%8C%EC%88%98%EC%B2%A9/id6479247886</a> 
                </div>
              </div>
              <div className='projects_notice_link'>
                <div className='projects_notice_link_name'>
                  <span class="material-symbols-outlined">done</span>FrontEnd
                </div>
                <div className='projects_notice_link_link'>
                  React Native
                </div>
              </div>
              <div className='projects_notice_link'>
                <div className='projects_notice_link_name'>
                  <span class="material-symbols-outlined">done</span>BackEnd
                </div>
                <div className='projects_notice_link_link'>
                  Nodejs
                </div>
              </div>
              <div className='projects_notice_link'>
                <div className='projects_notice_link_name'>
                  <span class="material-symbols-outlined">done</span>Database
                </div>
                <div className='projects_notice_link_link'>
                  MySql
                </div>
              </div>
              <div className='projects_notice_link'>
                <div className='projects_notice_link_name'>
                  <span class="material-symbols-outlined">done</span>Deployment
                </div>
                <div className='projects_notice_link_link'>
                  NCP (Naver Cloud Flatfrom)
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects4;