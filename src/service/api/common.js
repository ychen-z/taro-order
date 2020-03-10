import { get, post,del } from '../tool'

// 获取菜单
export const getFoodList = data => get({ url: 'http://admin.ksfmaster.com/endpoint/food/', data })
export const postOrder = data => post({ url: 'http://admin.ksfmaster.com/endpoint/food/order', data })
export const getMyOrder= data => get({ url: 'http://admin.ksfmaster.com/endpoint/food/order/'+data })
export const getAllOrder= () => get({ url: 'http://admin.ksfmaster.com/endpoint/order/' })


export const postFood= (data) => post({ url: 'http://admin.ksfmaster.com/endpoint/food/',data}) //增加菜单
export const delFood= (data) => del({ url: 'http://admin.ksfmaster.com/endpoint/food/'+data}) //删除菜单
export const updateFood= (data) => post({ url: 'http://admin.ksfmaster.com/endpoint/food/',data}) //更新菜单

