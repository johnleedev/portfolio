import React from 'react';
import "./Projects.css";

function Projects2(props) {
  return (
    <div className='projects_main'>
      <div className='inner'>

        <div className='projects_box1'>
          <div className='projects_name'>(주)거림 홈페이지</div>
          <div className='projects_date'>제작기간 : 3주 (개인 프로젝트)</div>
        </div>
        <div className='projects_box2'>
          <div className='projects_image'>
            <img src="img/거림.png" className='projects_image_image1'></img>
          </div>
          <div className='projects_notice'>
            <div className='projects_notice_text'>
            중형 부동산 업체 '(주)거림'의 홈페이지로 사용하는 웹사이트입니다. 총16페이지이며, 반응형으로 제작했습니다.
            <br></br><br></br>고객에게 보여지는 웹사이트인 만큼 사용자의 유입과 경험을 위해 UI & UX 구상에 적지 않은 공을 들여 만든 프로젝트입니다.
            </div>
            <div className='projects_notice_orientalbar'></div>
            <div className='projects_notice_links'>
              <div className='projects_notice_link'>
                <div className='projects_notice_link_name'>
                  <span class="material-symbols-outlined">done</span>주요기능
                </div>
                <div className='projects_notice_link_link'>
                  회사소개, 조직도, 오시는길, 리더메시지, 프로젝트 소개 등
                </div>
              </div>
              <div className='projects_notice_link'>
                <div className='projects_notice_link_name'>
                  <span class="material-symbols-outlined">done</span>GitHub
                </div>
                <div className='projects_notice_link_link'>
                  <a href='https://github.com/johnleedev/georim.git' target='_blank'>github.com/johnleedev/georim.git</a> 
                </div>
              </div>
              <div className='projects_notice_link'>
                <div className='projects_notice_link_name'>
                  <span class="material-symbols-outlined">done</span>URL
                </div>
                <div className='projects_notice_link_link'>
                  <a href='http://www.georim.net/' target='_blank'>www.georim.net/</a>
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