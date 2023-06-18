import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth'

NProgress.configure({ showSpinner: false }) // NProgress 配置

let whiteList = ['/login']

router.beforeEach(async (to, form, next) => {
  NProgress.start()

  const hasToken = getToken()
  if (hasToken)
  {
    if (to.path == '/login')
    {
      NProgress.done()
    } else
    {
      // 角色权限
      let { roles } = await store.dispatch('user/getUserInfo')
      /* 权限菜单 */
      const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
    }
  } else
  {
    if (whiteList.indexOf(to.path) !== -1)
    {
      next()
    } else
    {
      next('/login')
      NProgress.done()
    }
  }

})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
