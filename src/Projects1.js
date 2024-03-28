import React from 'react';
import "./Projects.css";

function Projects1(props) {
  return (
    <div className='projects_main'>
      <div className='inner'>

        <div className='projects_box1'>
          <div className='projects_name'>아쇼</div>
          <div className='projects_date'>제작기간 : 6개월 (회사 프로젝트) / 개발자 : 본인 1인 (프론트 + 벡엔드 + 배포) / 디자인 : 회사소속 디자이너</div>
        </div>
        <div className='projects_box2'>
          <div className='projects_image'>
            <img src="img/ashow.png" className='projects_image_image1'></img>
          </div>
          <div className='projects_notice'>
            <div className='projects_notice_text'>
            소속된 회사에서, 제작한 어플입니다. 부동산 관련 분양 아파트 관련 정보 소개 서비스 어플이며, 개발은 100% 본인이 제작했습니다. 아직 정시 출시 전입니다.
            <br></br><br></br>리액트 네이티브로 제작했으며, 벡엔드는 Nodejs, MySql을 사용했습니다.
            <br></br><br></br>기획과 디자인이 계속 변경되어 오면서 시행착오도 많았지만, 그 과정을 통해 많은 것들을 배울 수 있는 기회가 되었습니다.
            </div>
            <div className='projects_notice_orientalbar'></div>
            <div className='projects_notice_links'>
              <div className='projects_notice_link'>
                <div className='projects_notice_link_name'>
                  <span class="material-symbols-outlined">done</span>주요 서비스
                </div>
                <div className='projects_notice_link_link'>
                  분양 아파트 소개
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
                  <a href='https://play.google.com/store/apps/details?id=com.ashow.app' target='_blank'>https://play.google.com/store/apps/details?id=com.ashow.app</a> 
                </div>
              </div>
              <div className='projects_notice_link'>
                <div className='projects_notice_link_name'>
                  <span class="material-symbols-outlined">done</span>앱스토어(애플) URL
                </div>
                <div className='projects_notice_link_link'>
                  <a href='https://apps.apple.com/kr/app/%EC%95%84%EC%87%BC/id6455837375' target='_blank'>https://apps.apple.com/kr/app/%EC%95%84%EC%87%BC/id6455837375</a> 
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

export default Projects1;