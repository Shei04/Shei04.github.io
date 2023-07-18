import React, { useState, useEffect } from 'react';

import TopMenu from '@/pages/PageComponents/TopMenu/TopMenu';

import img1 from '@/assets/img1.png';
import img2 from '@/assets/img2.png';
import img3 from '@/assets/cool-background.png';
import img4 from '@/assets/cool-background2.png';
import zhezhao from '@/assets/zhezhao.png';
import './index.less';
// 作品集模块
const portfolio: React.FC<any> = () => {
  const [listData, setListData] = useState<any[]>();

  useEffect(() => {
    //mock一个数据集合
    const mockData = [
      {
        id: 1,
        name: '前端',
        kind: {
          id: 2,
          kindname: ['HTML', 'React', 'Vue', 'UniApp', '微信小程序'],
        },
      },
      {
        id: 1,
        name: '后端',
        kind: { id: 2, kindname: ['Java', 'Python', 'C语言', '其他'] },
      },
    ];
    setListData(mockData);
  }, []);
  return (
    <>
      <div className="portfolio_bigbox">
        <TopMenu showtab="zuoping" />
        <div className="content_box">
          <div className="content">
            <div className="head">
              写了一些小页面，如何获取源码？请
              <span
                onClick={() => {
                  alert('还没写0.0！');
                }}
              >
                点击这里
              </span>
            </div>
            <div className="projectbox">
              <div className="project">
                <div
                  className="p_box"
                  style={{
                    backgroundImage: `url(${img1})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                  }}
                >
                  <div
                    className="p_zhezhao"
                    style={{
                      backgroundImage: `url(${zhezhao})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                    }}
                  >
                    <h1>测试这是一个网页</h1>
                    <p>用了xxx组件写的一个网页网页网页</p>
                  </div>
                </div>
                <div
                  className="p_box"
                  style={{
                    backgroundImage: `url(${img2})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                  }}
                >
                  <div
                    className="p_zhezhao"
                    style={{
                      backgroundImage: `url(${zhezhao})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                    }}
                  >
                    <h1>测试这是一个网页</h1>
                    <p>用了xxx组件写的一个网页网页网页</p>
                  </div>
                </div>
                <div
                  className="p_box"
                  style={{
                    backgroundImage: `url(${img4})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                  }}
                >
                  <div
                    className="p_zhezhao"
                    style={{
                      backgroundImage: `url(${zhezhao})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                    }}
                  >
                    <h1>测试这是一个网页</h1>
                    <p>用了xxx组件写的一个网页网页网页</p>
                  </div>
                </div>
                <div
                  className="p_box"
                  style={{
                    backgroundImage: `url(${img3})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                  }}
                >
                  <div
                    className="p_zhezhao"
                    style={{
                      backgroundImage: `url(${zhezhao})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                    }}
                  >
                    <h1>测试这是一个网页</h1>
                    <p>用了xxx组件写的一个网页网页网页</p>
                  </div>
                </div>
              </div>
              <div className="checkproject">{/* 预留底部翻页按钮 */}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default portfolio;
