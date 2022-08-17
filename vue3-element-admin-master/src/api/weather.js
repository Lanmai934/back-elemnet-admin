// https://api.seniverse.com/v3/weather/daily.json?key=S_SgP5jb5sL6BDfB8&location=wuxi&language=zh-Hans&unit=c&start=0&days=1

import request from '@/utils/request'

// 获取天气
export const GetWeather = params => {
    return request({
        url: '/api/weather',
        method: 'get',
        params,
    })
}