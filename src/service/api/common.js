import { get, post } from '../tool'

// 个人中心
export const getPersonalInfo = data => get({ url: '/personal/info', data })
