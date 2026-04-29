import axios from 'axios'


// 创建 axios 实例
const request = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
    timeout: 10000
})

// 请求拦截器
request.interceptors.request.use(
    // config => {
        // 可在此添加 token
        // const token = localStorage.getItem('token')
        // if (token) {
        //     config.headers!.Authorization = `Bearer ${token}`
        // }
        // return config
    // },
    // error => Promise.reject(error)
)

// 响应拦截器
request.interceptors.response.use(
    // response => response.data,
    // error => {
    //     console.error('请求错误:', error)
    //     return Promise.reject(error)
    // }
)

export default request