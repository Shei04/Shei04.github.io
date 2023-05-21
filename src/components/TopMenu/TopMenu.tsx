import React, { useEffect, useState } from 'react';
import './TopMenu.less';
//导入animate动画
import 'animate.css';
//导入wowjs拓展动画

const TopMenu: React.FC = () => {


  useEffect(() => {}, []);
  return (
    // 这是顶部多选栏
    <div
      className={'first-layer2 animate__animated animate__fadeInDown'}
    >
      <div className="second-layer">
        <span className="Title-sl animate__animated animate__fadeInDown">
          小沈爱学习
        </span>
        {/* <div className='Top-Options'>
                    <div className="Top-btn" onClick={()=>{}}>
                        <span>首页</span>
                        <div className="wave"></div>
                    </div>
                    <div className="Top-btn">
                        <span>其他</span>
                        <div className="wave"></div>
                    </div>
                    <div className="Top-btn">
                        <span>代码效果合集</span>
                        <div className="wave"></div>
                    </div>
                </div> */}
        <div className="Top-Options">
          <div className="Top-btn" onClick={() => {alert("点击了首页")}}>
            <span>首页</span>
          </div>
          <div className="Top-btn" onClick={() => {alert("点击了项目")}}>
            <span>项目</span>
          </div>
          <div className="Top-btn" onClick={() => {alert("点击了经验")}}>
            <span>经验</span>
          </div>
          <div className="Top-btn" onClick={() => {alert("点击了联系")}}>
            <span>联系</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopMenu;
