import { getToken, setToken } from '@/utils/auth'
import { login, getUser } from "@/api/app"


const state = {
  name: '',
  roles: [],
  token: getToken()
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles.split(',')
  }
}

const actions = {
  login ({ commit }, userInfo) {
    let { name, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ name, password }).then(res => {
        commit('SET_TOKEN', res.data.token)
        commit('SET_NAME', res.data.name)
        setToken(res.data.token)
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },

  getUserInfo ({ commit, state }) {
    return new Promise((resolve, reject) => {
      getUser({ name: state.name }).then((res) => {
        commit('SET_ROLES',res.data[0].roles)
        resolve(res.data[0])
      }).catch(err => {
        reject(err)
      })
    })
  },

  logOut ({ commit }) {

  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}