import React, { useState, useEffect } from 'react';
//图片
import weather_cloud from '@/assets/weather_cloud.png';
import weather_rain from '@/assets/weather_rain.png';
import weather_sun from '@/assets/weather_sun.png'
// import '@/components/TX/yh1.js'
import VanillaTilt from 'vanilla-tilt';
//css
import "./index.less";
//iconfont
import '@/assets/font_4076776_5pfxzd4006y/iconfont.css'
import { arrWeatherApiData } from '@/assets/DiQuApiName';
import { ApiGetWeatherData, ApiGetYunXiWeatherData2 } from '@/server/weatherAPI';
// 中间内容 左边个人简介  右边展示内容
const contentBody: React.FC<any> = (props: any) => {
    //api获取数据
    const [WeatherApiData, setWeatherApiData] = useState<any>();
    const [apiGetWeatherData, setApiGetWeatherData] = useState<any>();
    // 天气城市名称
    const [cityCode, setCodedata] = useState<any>('成都');
    // 时间
    const [timeDate, setTimeDate] = useState<any>();
    // 判断切换天气组件
    const [readWeatherStateDate, setReadWeatherStateDate] = useState<boolean>(true);
    //切换盒子内的内容
    const [changeWeatherBoxContent, setChangeWeatherBoxContent] = useState<any>("two");

    //获取时间 函数
    const getTime = () => {
        const h = new Date().getHours();
        const m = new Date().getMinutes();
        const s = new Date().getSeconds();
        const year = new Date().getFullYear();
        const month = new Date().getMonth() + 1;
        const day = new Date().getDate();
        var rsTime = year + "-" + month + "-" + day + "  " + h + ":" + m + ":" + s;
        setTimeDate(rsTime);

    }
    setInterval(getTime, 1000);


    //使用React官方鼠标移入移出写法 onMouseEnter 和 onMouseLeave 事件
    //卡片倾斜 组件库
    // const getWeatherBox: any = document.querySelectorAll(".content_weather");
    // VanillaTilt.init(getWeatherBox, {
    //     max: 5,
    //     speed: 2000,
    //     glare: true,
    //     "max-glare": 0.2,
    //     reverse: true,
    //     reset: true,
    // })

    //切换天气卡片样式
    const changeWeatherBoxStyle = (e: any) => {
        e.stopPropagation();
        setReadWeatherStateDate(!readWeatherStateDate);
    }

    //关闭天气窗口
    window.addEventListener("click", (e: any) => {
        if ("zhezhaoceng" == e.target.className) {
            setReadWeatherStateDate(true);
        }
    })

    //显示八个图标和数据
    const box_content2 = <>
        <div className='icon_weather'>
            <div className='box_top'>
                <div className='contbox animate__animated animate__fadeIn'>
                    <div className='weaiconfont iconfont icon-iconset0480'></div>
                    <div className='describe'>体感</div>
                    <div className='data'>29°C</div>
                </div>
                <div className='contbox animate__animated animate__fadeIn'>
                    <div className='weaiconfont iconfont icon-wenshidu1'></div>
                    <div className='describe'>湿度</div>
                    <div className='data'>29°C</div>
                </div>
                <div className='contbox animate__animated animate__fadeIn'>
                    <div className='weaiconfont iconfont icon-yanjing-'></div>
                    <div className='describe'>能见度</div>
                    <div className='data'>29°C</div>
                </div>
                <div className='contbox animate__animated animate__fadeIn'>
                    <div className='weaiconfont iconfont icon-yibiaopan'></div>
                    <div className='describe'>大气压</div>
                    <div className='data'>29°C</div>
                </div>
            </div>
            <div className='box_bottom'>
                <div className='contbox animate__animated animate__fadeIn'>
                    <div className='weaiconfont iconfont icon-icon-test'></div>
                    <div className='describe'>西风</div>
                    <div className='data'>29°C</div>
                </div>
                <div className='contbox animate__animated animate__fadeIn'>
                    <div className='weaiconfont iconfont icon-UVB'></div>
                    <div className='describe'>紫外线</div>
                    <div className='data'>29°C</div>
                </div>
                <div className='contbox animate__animated animate__fadeIn'>
                    <div className='weaiconfont iconfont icon-nianleijijiangshuiliang'></div>
                    <div className='describe'>降水量</div>
                    <div className='data'>29°C</div>
                </div>
                <div className='contbox animate__animated animate__fadeIn'>
                    <div className='weaiconfont iconfont icon-yueliang'></div>
                    <div className='describe'>月相</div>
                    <div className='data'>29°C</div>
                </div>
            </div>
        </div>

    </>
    // 小时气温
    const box_content1 = <>
        <div className='h_weather'>
            <div className='h_weather_content'>
                <div className='future_weather animate__animated animate__bounceIn'>
                    <div>明天</div>
                    <div className='future_highweather_icon iconfont icon-hongseyuan' title='最高温'></div>
                    <div>28°C</div>
                    <div className='future_lowweather_icon iconfont icon-daka' title='最低温'></div>
                    <div>23°C</div>
                    <div>无风</div>
                    <div>1级</div>
                </div>
                <div className='future_weather animate__animated animate__bounceIn'>
                    <div>明天</div>
                    <div className='future_highweather_icon iconfont icon-hongseyuan' title='最高温'></div>
                    <div>28°C</div>
                    <div className='future_lowweather_icon iconfont icon-daka' title='最低温'></div>
                    <div>23°C</div>
                    <div>无风</div>
                    <div>1级</div>
                </div>
                <div className='future_weather animate__animated animate__bounceIn'>
                    <div>明天</div>
                    <div className='future_highweather_icon iconfont icon-hongseyuan' title='最高温'></div>
                    <div>28°C</div>
                    <div className='future_lowweather_icon iconfont icon-daka' title='最低温'></div>
                    <div>23°C</div>
                    <div>无风</div>
                    <div>1级</div>
                </div>
                <div className='future_weather animate__animated animate__bounceIn'>
                    <div>明天</div>
                    <div className='future_highweather_icon iconfont icon-hongseyuan' title='最高温'></div>
                    <div>28°C</div>
                    <div className='future_lowweather_icon iconfont icon-daka' title='最低温'></div>
                    <div>23°C</div>
                    <div>无风</div>
                    <div>1级</div>
                </div>
                <div className='future_weather animate__animated animate__bounceIn'>
                    <div>明天</div>
                    <div className='future_highweather_icon iconfont icon-hongseyuan' title='最高温'></div>
                    <div>28°C</div>
                    <div className='future_lowweather_icon iconfont icon-daka' title='最低温'></div>
                    <div>23°C</div>
                    <div>无风</div>
                    <div>1级</div>
                </div>
                <div className='future_weather animate__animated animate__bounceIn'>
                    <div>明天</div>
                    <div className='future_highweather_icon iconfont icon-hongseyuan' title='最高温'></div>
                    <div>28°C</div>
                    <div className='future_lowweather_icon iconfont icon-daka' title='最低温'></div>
                    <div>23°C</div>
                    <div>无风</div>
                    <div>1级</div>
                </div>
            </div>
        </div>
    </>
    const box_content3 = <></>
    const box_content_loading = <></>
    const choiceBox = (boxname?: String) => {
        if (boxname == "one") {
            setChangeWeatherBoxContent(box_content1);
        } else if (boxname == "two") {
            setChangeWeatherBoxContent(box_content2);
        }
    }

    useEffect(() => {
        choiceBox("one");
    }, [])
    useEffect(() => {

    }, [])
    return (<>
        <div className='bigbox'>
            <div className='content_left'>

            </div>
            <div className='content_right'>
                <div className='content1'>
                    <div className='content_title'>

                    </div>
                </div>
                <div className='content2'>
                    <div className='content_weather animate__animated animate__fadeIn'>
                        {readWeatherStateDate ?
                            <div className='weather_box' style={{ backgroundImage: `url(${weather_cloud})`, backgroundSize: "100% 100%", backgroundRepeat: 'no-repeat' }}>
                                <div className={'weather_box_p1'}>
                                    <div className='p1_box'>
                                        <span className='city'>成都市</span>
                                        |
                                        <span className='bg'>阴</span>
                                    </div>
                                    <span className='gengduo' onClick={changeWeatherBoxStyle}>更多天气</span>
                                </div>
                                <div className='weather_time'>
                                    {timeDate ? timeDate : "****-**-** **:**:**"}
                                </div>
                                <div className='weather_box_p2'>
                                    <span className='high_wea' onClick={() => { }}>高温 16°C</span>
                                    <span className='low_wea' onClick={() => { }}>低温 10°C</span>
                                    <span className='note' title='vanilla-tilt'>不要被阴云遮住好好心情</span>
                                </div>

                            </div>
                            :
                            <div className='weather_box2' >
                                <div className='content_box'>
                                    <div className='cont_body'>
                                        <div className='cont_body_head'>
                                            <div className='cont_body_head_time'>
                                                <div>5月19日</div>
                                                <div>星期五</div>
                                            </div>
                                            <div className='cont_body_city'>
                                                金堂县 {'>'}
                                            </div>
                                        </div>
                                        <div className='cont_line'></div>
                                        <div className='cont_body_content'>
                                            <div className='weetherBox2_content_box'>
                                                <div className='c_b_c_b_left'>
                                                    <div className='c_b_c_b_l_weather'>25</div>
                                                    <div className='c_b_c_b_l_w_right'>
                                                        <div className='sheshidu'>°C</div>
                                                        <div className='highWeaAndLowWea'>
                                                            <div className='highWeaAndLowWea_left'>
                                                                <div className='weaiconfont iconfont icon-sanjiaoxia'></div>
                                                                <div className='lowweather'>20</div>
                                                            </div>
                                                            <div className='highWeaAndLowWea_right'>
                                                                <div className='weaiconfont2 iconfont icon-sanjiao-shang'></div>
                                                                <div className='highweather'>28</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='weatherBoxChange_content2_right'>
                                                    <div className='imgWea  iconfont icon-qingtian'></div>
                                                    <div className='text'>多云</div>
                                                </div>
                                            </div>
                                            <div className='weetherBox2_content_box2'>
                                                <div className='boxShowData'>
                                                    <div>
                                                        空气质量：69良
                                                    </div>
                                                    <div>
                                                        西南风3级
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='box_show'>
                                        <div className='box_show_content'>
                                            <div className='box_show_content_box'>
                                                {changeWeatherBoxContent}
                                            </div>
                                            <div className='box_show_click'>
                                                <div onClick={() => { setChangeWeatherBoxContent(box_content1); }}></div>
                                                <div onClick={() => { setChangeWeatherBoxContent(box_content2); }}></div>
                                                <div onClick={() => { setChangeWeatherBoxContent(box_content3); }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }

                    </div>
                    <div className='content_time animate__animated animate__fadeIn'>

                    </div>
                    <div className='content_text animate__animated animate__fadeIn'>

                    </div>
                </div>
            </div>
        </div>
        <div className='beian'>
            备案文字
        </div>
        <div className='zhezhaoceng' style={readWeatherStateDate ? { display: "none" } : { display: "block" }}></div>
    </>)
}
export default contentBody;