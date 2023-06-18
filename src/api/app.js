import axios from '@/utils/axios'

export function getUser(params){
  return axios({
    url: '/users',
    method: 'get',
    params
  })
}

export function login(data){
  return axios({
    url: '/login',
    method: 'post',
    data
  })
}