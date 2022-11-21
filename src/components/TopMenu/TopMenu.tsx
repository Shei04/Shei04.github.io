import React, { useEffect, useState } from 'react';
import './TopMenu.less';
//导入animate动画
import 'animate.css';
//导入wowjs拓展动画

const TopMenu: React.FC = () => {
  const [TopBgcShow, SetTopBgcShow] = useState<any>(false);

  //未找到可行办法 js方法监听并改变className
  // let Header:any = document.querySelector('.first-layer');
  // console.log(Header?.className);
  //暂时用React判断来切换className
  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      SetTopBgcShow(true);
    } else {
      SetTopBgcShow(false);
    }
  });
  useEffect(() => {}, []);
  return (
    // 这是顶部多选栏
    <div
      className={
        TopBgcShow
          ? 'first-layer2 animate__animated animate__fadeInDown'
          : 'first-layer animate__animated animate__fadeInDown'
      }
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
          <div className="Top-btn" onClick={() => {}}>
            <span>首页</span>
          </div>
          <div className="Top-btn">
            <span>前端</span>
          </div>
          <div className="Top-btn">
            <span>后端</span>
          </div>
          <div className="Top-btn">
            <span>其他</span>
          </div>
        </div>
        <div className="Top-search">
          <i className="icon-search"></i>
        </div>

        <div>
          <button>个人空间</button>
        </div>
      </div>
    </div>
  );
};
export default TopMenu;
