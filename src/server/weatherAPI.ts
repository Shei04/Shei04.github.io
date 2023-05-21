import {request} from 'umi';
import {GetWeatherUrl,GetYikeYunWeatherUrl,GetYunxiWeatherUrl} from "./baseUrl"
/**
 * 获取高德天气API数据 
 * 数据不全
 * @param cityCode  城市code
 * @returns 
 */
export async function ApiGetWeatherData(cityCode:any){
    return request(`${GetWeatherUrl}&city=${cityCode}`,{
    })
}
/**
 * 获取高德全部天气API数据
 * 数据不全
 * @param cityCode 
 * @returns 
 */
export async function ApiGetWeatherDataAll(cityCode:any){
    return request(`${GetWeatherUrl}&city=${cityCode}&extensions=all`,{
    });
}
/**
 * 获取云析天气数据
 * 数据问题
 * @param cityCode 
 * @returns 
 */
export async function ApiGetYunXiWeatherData2(cityName:any){
    return request(`${GetYunxiWeatherUrl}&city=${cityName}`,{
    });
}

/**
 * 获取易客云天气数据
 * 只有2000次试用
 * @param cityid  城市编码 查文档看
 * @returns 
 */
export async function ApiGetYikeYunWeatherDataCityid(cityid:number){
    return request(`${GetYikeYunWeatherUrl}&cityid=${cityid}`,{
    });
}
/**
 * 获取易客云天气数据 7天数据
 * 只有2000次试用
 * @param cityName  城市名 不要带市和区 如成都 上海
 * @returns 
 */
export async function ApiGetYikeYunWeatherDataCity(cityName:any){
    return request(`${GetYikeYunWeatherUrl}&city=${cityName}`);
}

