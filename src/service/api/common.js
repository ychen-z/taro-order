import { get, post } from '../tool'

// 获取菜单
export const getFoodList = data => get({ url: 'http://admin.ksfmaster.com/endpoint/food/', data })
