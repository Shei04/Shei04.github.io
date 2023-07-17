import React, { useState, useEffect } from 'react';
import './index.less';
import '@/components/TX/test';
import bgi from '@/assets/cool-background.png';
import headphoto from '@/assets/headPhoto.png';
import { useModel, history } from 'umi';
const firstpage: React.FC<any> = () => {
  useEffect(() => {
    console.log('进入程序');
  }, []);

  return (
    <>
      <div className="fp_bigbox">
        <div
          className="fp_gbimage"
          style={{ backgroundImage: `url(${bgi})` }}
        ></div>
        <div className="fp_box">
          <div className="fp_contentBox">
            <div className="fp_cb">
              <div className="fp_headphoto">
                {/* <img src="" alt="头像" className='touxiang' /> */}
              </div>
              <div className="xian"></div>
              <div className="fp_text_content">
                <p>🎉欢迎光临我的小站🎉</p>
                <p>⭐我是一个挣扎在前端入门的前端开发萌新⭐</p>
              </div>
              <div className="xian"></div>
              <div className="fp_botton">
                <div
                  className="fp_btn"
                  onClick={() => {
                    history.push('/homepage');
                  }}
                >
                  前往首页
                </div>
              </div>
            </div>

            <p className="fp_buttomText">COPYRIGHT 2020-2023 中国四川</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default firstpage;
