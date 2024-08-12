import { request } from 'umi'
import {GetHeFengWeatherUrl,GetHeFengCityCodeUrl} from './baseUrl'

/**
 * 和风天气 
 * 1000/每日
 * @param props 城市id码，需使用API请求
 * @returns 
 */
export async function GetApiHeFengWeatherData(props:number){
    return request(`${GetHeFengWeatherUrl}&location=${props}`,{
    });
}

export async function GetApiCityCodeData(props:string){
    return request(`${GetHeFengCityCodeUrl}&location=${props}`,{});
}