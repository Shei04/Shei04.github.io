export const BaseUrl = '';

export const WeatherUrl = 'https://restapi.amap.com/v3/weather/weatherInfo';
export const GaoDeTenantId = 'e29eaf39b57cd2ee5d4eb887d6c68305';
export const GetWeatherUrl = `${WeatherUrl}?key=${GaoDeTenantId}`;

export const YunXiWeatherUrl = 'https://api.a20safe.com/api.php?api=11'
export const YunXiTenantId = '4e56944b448415c00ec9db86e33b5866';
export const GetYunxiWeatherUrl = `${YunXiWeatherUrl}&key=${YunXiTenantId}`

export const YikeYunWeatherUrl = 'https://v0.yiketianqi.com/api?unescape=1&version=v9'
export const YikeYunAppid = '77171548';
export const YikeYunAppsecret = 'vn3oFVbA';
export const GetYikeYunWeatherUrl = `${YikeYunWeatherUrl}&appid=${YikeYunAppid}&appsecret=${YikeYunAppsecret}`

export const HeFengWeatherUrl = 'https://devapi.qweather.com/v7/weather/3d?'
export const HeFengWeatherId = '8d1483abc24b4472a6cde7d35ec2c4db'
export const GetHeFengWeatherUrl = `${HeFengWeatherUrl}key=${HeFengWeatherId}`
export const GetHeFengCityCodeUrl = `https://geoapi.qweather.com/v2/city/lookup?key=${HeFengWeatherId}`