import React, { useEffect, useState } from 'react';
import { history } from 'umi';
import './TopMenu.less';
//导入animate动画
import 'animate.css';
//导入wowjs拓展动画

const TopMenu: React.FC<any> = (props: any) => {
  const { showtab } = props;
  console.log(showtab);
  // 小细节
  const showTab = (showtab: any) => {
    switch (showtab) {
      case 'shouye':
        return;
    }
  };

  useEffect(() => {}, []);
  return (
    // 这是顶部多选栏
    <div className={'first-layer2 animate__animated animate__fadeInDown'}>
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
          <div
            className={showtab == 'shouye' ? 'Top-btn2' : 'Top-btn'}
            onClick={() => {
              history.push('/homepage');
            }}
          >
            <span>首页</span>
          </div>
          <div
            className={showtab == 'zuoping' ? 'Top-btn2' : 'Top-btn'}
            onClick={() => {
              history.push('/myproject');
            }}
          >
            <span>作品</span>
          </div>
          <div
            className={showtab == 'wenzhang' ? 'Top-btn2' : 'Top-btn'}
            onClick={() => {
              alert('点击了文章');
            }}
          >
            <span>文章</span>
          </div>
          <div
            className={showtab == 'lianxi' ? 'Top-btn2' : 'Top-btn'}
            onClick={() => {
              alert('点击了联系');
            }}
          >
            <span>联系</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopMenu;
