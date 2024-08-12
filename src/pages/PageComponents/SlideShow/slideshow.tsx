//轮播图,暂定不弄轮播图，将轮播图弄成一个组件，文字刷新加载，底部有可切换背景的按钮
import React, { useState, useEffect } from 'react';
//antd轮播图组件
import { Carousel } from 'antd';
//引入css
import './slideshow.less';

const slideshow: React.FC = () => {
  const [ImgData, SetImgData] = useState<any>();

  //可以这样写样式，然后元素使用 style={contentStyle}来配置样式
  const contentStyle: React.CSSProperties = {
    height: '100%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  useEffect(() => {}, []);
  return <div className="ContBody"></div>;
};
export default slideshow;
