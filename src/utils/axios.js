import axios from 'axios'
// create axios
const server = axios.create({
  baseURL: process.env.VUE_APP_BASE_NAME,
  timeout: 60 * 1000
})

// 请求拦截器
server.interceptors.request.use(
  config=>{
    // 请求头携带token
    return config
  },
  error=>{
    console.log(error);
    return Promise.reject(error)
  }
)

// 响应拦截器
server.interceptors.response.use(
  response=>{
    const res = response.data
    // 判断响应状态返回数据
    if(res.code != 200){
      return Promise.reject(new Error(res.message || '请求错误!'))
    }else{
      return res
    }
  },
  error=>{
    console.log(error);
    return Promise.reject(error)
  }
)

export default server