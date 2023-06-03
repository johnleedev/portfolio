import React from 'react';
import "./Projects.css";

function Projects1(props) {
  return (
    <div className='projects_main'>
      <div className='inner'>

        <div className='projects_box1'>
          <div className='projects_name'>출석 관리 사이트</div>
          <div className='projects_date'>제작기간 : 3개월 (개인 프로젝트)</div>
        </div>
        <div className='projects_box2'>
          <div className='projects_image'>
            <img src="img/weeklyreport.png" className='projects_image_image1'></img>
          </div>
          <div className='projects_notice'>
            <div className='projects_notice_text'>
            500여명 학생들의 출결석을 간편하게 관리할 수 있도록 만든 웹사이트입니다. 저의 지인이 운영하는 학원의 학생들의 출결석을 온라인으로 관리하기 위해 만들었고, <span className='text_red'>현재 현장에서 실제로 사용하고 있습니다.</span> ※ URL은 보안상 실제 사이트가 아니라, 임시 사이트로 올립니다.
            <br></br><br></br>이 웹사이트로 인하여, 본래 종이 출석부에 수기로 작성하던 것을, 모바일로 좀 더 편하게 작성하고, 출석 통계를 좀 더 쉽게 파악할 수 있게 되었습니다.
            <br></br><br></br>나름대로 서비스 다운 서비스를 만들었다는 것에 의미가 있지만, 그 과정에서 React의 개념을 한 번 더 깊게 다지고, MYSQL을 실제로 사용해볼 수 있었다는 점에서 더욱 의미가 있었습니다.
            <br></br><br></br>무엇보다 실제로 서비스를 사용했어야 했기에, 사용자 친화적으로 만들려고 하다보니 사용자 입장에서 많이 생각할 수 있었습니다.
            <br></br><br></br>또한 서비스를 배포하고 나서, 실제로 서비스를 사용하는 사람들에게 피드백을 받으며, 오류나 불편한 부분들을 수정하였습니다.           
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
                  <a href='https://github.com/johnlovesyou/weeklyreport-portfolio' target='_blank'>github.com/johnlovesyou/weeklyreport-portfolio</a> 
                </div>
              </div>
              <div className='projects_notice_link'>
                <div className='projects_notice_link_name'>
                  <span class="material-symbols-outlined">done</span>URL
                </div>
                <div className='projects_notice_link_link'>
                  <a href='http://www.pccyouth.site' target='_blank'>pccyouth.site</a> 
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