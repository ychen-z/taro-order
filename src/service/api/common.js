import { get, post } from '../tool'

// 获取菜单
export const getFoodList = data => get({ url: 'http://admin.ksfmaster.com/endpoint/food/', data })
export const postOrder = data => post({ url: 'http://admin.ksfmaster.com/endpoint/food/order', data })
export const getMyOrder= data => get({ url: 'http://admin.ksfmaster.com/endpoint/food/order/'+data })
