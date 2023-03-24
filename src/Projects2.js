import React from 'react';
import "./Projects.css";

function Projects2(props) {
  return (
    <div className='projects_main'>
      <div className='inner'>

        <div className='projects_box1'>
          <div className='projects_name'>하늘뷰티 웹사이트</div>
          <div className='projects_date'>제작기간 : 1개월 / 하루2~3시간 (개인 프로젝트)</div>
        </div>
        <div className='projects_box2'>
          <div className='projects_image'>
            <img src="img/하늘뷰티.png" className='projects_image_image1'></img>
          </div>
          <div className='projects_notice'>
            <div className='projects_notice_text'>
            아내가 일하는 업체의 홈페이지로 사용하는 웹사이트입니다. '하늘뷰티'는 상호명입니다. 제 분야로 가족에게 도움이 되고 싶은 마음에 진행한 프로젝트입니다.
            <br></br><br></br>고객에게 보여지는 웹사이트인 만큼 사용자의 유입과 경험을 위해 UI & UX 구상에 적지 않은 공을 들여 만든 프로젝트입니다.
            </div>
            <div className='projects_notice_orientalbar'></div>
            <div className='projects_notice_links'>
              <div className='projects_notice_link'>
                <div className='projects_notice_link_name'>
                  <span class="material-symbols-outlined">done</span>주요기능
                </div>
                <div className='projects_notice_link_link'>
                  제품 가격, 문의 방법, 업체위치(google Map), 업체소개, 네이버스토어
                </div>
              </div>
              <div className='projects_notice_link'>
                <div className='projects_notice_link_name'>
                  <span class="material-symbols-outlined">done</span>GitHub
                </div>
                <div className='projects_notice_link_link'>
                  <a href='https://github.com/johnlovesyou/skybeauty' target='_blank'>github.com/johnlovesyou/skybeauty</a> 
                </div>
              </div>
              <div className='projects_notice_link'>
                <div className='projects_notice_link_name'>
                  <span class="material-symbols-outlined">done</span>URL
                </div>
                <div className='projects_notice_link_link'>
                  <a href='http://www.sky-beauty.shop' target='_blank'>sky-beauty.shop</a> 
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

export default Projects2;