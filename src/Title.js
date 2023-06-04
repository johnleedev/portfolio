import "./Title.css";
import { React, useEffect, useState } from "react";
import { throttle } from "lodash";
import $ from "jquery";
import classnames from 'classnames';

function Title () {
  return (
    <div className="title">
      <div className="title_cover">
        <div className="title_1">- 이요한 -</div>
        <div className="title_2">웹/앱 개발자 포트폴리오</div>
        <div className="title_2-1">웹/앱 개발자</div>
        <div className="title_2-2">포트폴리오</div>
        <div className="title_box1"></div>
      </div>
    </div>  
  )
}

export default Title;
