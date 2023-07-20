import React, { useState, useEffect } from 'react';
import TopMenu from '@/pages/PageComponents/TopMenu/TopMenu';

import './index.less';

const article: React.FC<any> = () => {
  //=======暂时没用上===========
  let HeadContentLists = [
    {
      key: 'Classification',
      title: '分类',
      children: [{ key: 'html', title: 'HTML' }],
    },
    {
      key: 'Direction',
      title: '方向',
      children: [],
    },
  ];
  //全部课程分类的数据
  const [ClassificationData, SetClassificationData] =
    useState<any[]>(HeadContentLists);
  const [c, setC] = useState<any>(null);
  const [d, setD] = useState<any>(null);
  //===========================
  //设置顶部标题栏css样式
  const [titleKey, setTitleKey] = useState<any>('all');
  //模拟  模拟获取从后端获取的数据并加以处理
  const [wenzhangData, setWenzhangData] = useState<any[]>([]);
  //判断 背景模糊是否展示
  const [vagueShow, setVagueShow] = useState<boolean>(false);
  const arrHead = [
    {
      id: '1',
      key: 'all',
      title: '全部',
      children: [
        {
          id: '1',
          key: 'project-1',
          title: '网页设计',
          jieshao: '如何使用HTML+CSS制作一个漂亮的网页',
          photoHttp: '',
          photoAddress: '',
          href: '/project/wy1',
        },
        {
          id: '2',
          key: 'project-2',
          title: '基于React网页开发',
          jieshao: '如何使用React制作一个漂亮的网页',
          photoHttp: '',
          photoAddress: '',
          href: '/project/wy2',
        },
        {
          id: '3',
          key: 'project-3',
          title: '基于Vue网页开发',
          jieshao: '如何使用Vue制作一个漂亮的网页',
          photoHttp: '',
          photoAddress: '',
          href: '/project/wy3',
        },
        {
          id: '4',
          key: 'project-4',
          title: '基于UniApp小程序开发',
          jieshao: '如何使用Uniapp制作一个漂亮的网页',
          photoHttp: '',
          photoAddress: '',
          href: '/project/wy4',
        },
      ],
    },
    {
      id: '2',
      key: 'htmlcss',
      title: 'HTML+CSS',
      children: [
        {
          id: '1',
          key: 'project-1',
          title: 'HTML网页设计',
          jieshao: '如何使用HTML+CSS制作一个漂亮的网页',
          photoHttp: '',
          photoAddress: '',
          href: '/project/wy1',
        },
        {
          id: '2',
          key: 'project-2',
          title: 'CSS网页开发',
          jieshao: '如何使用React制作一个漂亮的网页',
          photoHttp: '',
          photoAddress: '',
          href: '/project/wy2',
        },
      ],
    },
    {
      id: '3',
      key: 'js',
      title: 'JS',
      children: [
        {
          id: '1',
          key: 'project-1',
          title: 'JS的数组操作',
          jieshao: '如何使用HTML+CSS制作一个漂亮的网页',
          photoHttp: '',
          photoAddress: '',
          href: '/project/wy1',
        },
      ],
    },
    { id: '4', key: 'react', title: 'React' },
    { id: '5', key: 'vue', title: 'Vue' },
    { id: '6', key: 'uniapp', title: 'Uni-App' },
    { id: '7', key: 'wxxcx', title: '微信小程序' },
    { id: '8', key: 'java', title: 'Java' },
    { id: '9', key: 'python', title: 'Python' },
  ];
  //模拟 处理后端提供的数据
  const handleData = (data: any) => {
    let arr: any[] = [];
    if (data) {
      data.filter((item: any) => {
        if (item.key == titleKey) {
          arr = item.children;
          setWenzhangData(arr);
        } else {
          return;
        }
      });
    }
  };

  useEffect(() => {
    handleData(arrHead);
  }, [titleKey]);
  return (
    <>
      <div className="article_bigbox">
        <TopMenu showtab="wenzhang" />
        <div className="contain_box">
          <div className="content_box">
            <div className="head_title">
              <div className="titleX">
                {arrHead.map((item: any) => {
                  return (
                    <>
                      <div
                        className={
                          titleKey == item.key ? 'Top-btn2' : 'Top-btn'
                        }
                        onClick={() => {
                          setTitleKey(item.key);
                        }}
                        key={item.key}
                      >
                        <p>{item.title}</p>
                        <div className="wave"></div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="content">
              <div className="c_card">
                {wenzhangData?.map((item: any) => {
                  return (
                    <>
                      <div className="card_content" key={item.key}>
                        {item.title}
                      </div>
                    </>
                  );
                })}
                {vagueShow ? (
                  <></>
                ) : (
                  <>
                    <div className="vague"></div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default article;
