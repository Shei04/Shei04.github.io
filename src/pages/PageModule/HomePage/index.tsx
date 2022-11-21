import React, { useState, useEffect } from 'react';
//导入css文件
import './index.less';
// 组件
import TopMenu from '@/components/TopMenu/TopMenu';
import SlideShow from '@/components/SlideShow/slideshow';
// animatecss动画库  npm i animate.css
import 'animate.css';
// wow扩展插件库  npm install wowjs
import { WOW } from 'wowjs';
const index: React.FC = () => {
  const testCss: React.CSSProperties = {
    backgroundColor: '#3498db',
    color: 'yellow',
    width: '200px',
    height: '150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const wow = new WOW({
    boxClass: 'wow', // 动画元素的类名 (默认为 wow)
    animateClass: 'animated', // animate.css的类名 (默认为 animated)
    offset: 0, // 距离元素多少距离执行 (默认为 0)
    mobile: true, // 是否在移动设备执行动画 (默认为 true)
    live: true, // 是否异步加载内容 (默认为 true)
  });
  wow.init();
  return (
    <div className="pagebody">
      <TopMenu />
      <div className="HomePageOne">
        <SlideShow />
      </div>
      <div className="HomePageTwo">
        <div
          style={testCss}
          className={`animate__animated animate__bounceIn wow`}
        >
          animate测试hhhhh
        </div>
      </div>
    </div>
  );
};
export default index;
