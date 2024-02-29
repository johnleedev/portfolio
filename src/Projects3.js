import React from 'react';
import "./Projects.css";

function Projects2(props) {
  return (
    <div className='projects_main'>
      <div className='inner'>

        <div className='projects_box1'>
          <div className='projects_name'>간호대학생들</div>
          <div className='projects_date'>제작기간 : 2주 (개인 프로젝트)</div>
        </div>
        <div className='projects_box2'>
          <div className='projects_image'>
            <img src="img/project2.jpeg" className='projects_image_image1'></img>
          </div>
          <div className='projects_notice'>
            <div className='projects_notice_text'>
            두번째 만든 프로젝트라 제작 시기가 짧습니다. '성악과학생들'과 비슷한 형태로 만들었으며, 간호대학생들이 사용하는 플랫폼 앱입니다. 개발은 100% 본인이 제작했습니다.
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
                  간호대 학생들을 위한 학습, 교류 플랫폼
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
                  <a href='https://play.google.com/store/apps/details?id=com.studentsnursing.app' target='_blank'>https://play.google.com/store/apps/details?id=com.studentsnursing.app</a> 
                </div>
              </div>
              <div className='projects_notice_link'>
                <div className='projects_notice_link_name'>
                  <span class="material-symbols-outlined">done</span>앱스토어(애플) URL
                </div>
                <div className='projects_notice_link_link'>
                  <a href='https://apps.apple.com/kr/app/%EA%B0%84%ED%98%B8%EB%8C%80%ED%95%99%EC%83%9D%EB%93%A4/id6477461773' target='_blank'>https://apps.apple.com/kr/app/%EA%B0%84%ED%98%B8%EB%8C%80%ED%95%99%EC%83%9D%EB%93%A4/id6477461773</a> 
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

export default Projects2;