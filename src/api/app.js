import axios from '@/utils/axios'

export function getUser(data){
  return axios({
    url: '/users',
    methods: 'get',
    data
  })
}