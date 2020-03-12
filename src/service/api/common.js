import { get, post,del,put } from '../tool'

// 获取菜单
export const getFoodList = data => get({ url: 'http://admin.ksfmaster.com/endpoint/food/', data })
export const postOrder = data => post({ url: 'http://admin.ksfmaster.com/endpoint/order/order', data })
export const updateOrder = data => put({ url: 'http://admin.ksfmaster.com/endpoint/order/', data })
export const delOrder = data => del({ url: 'http://admin.ksfmaster.com/endpoint/order/'+ data })
export const getMyOrder= data => get({ url: 'http://admin.ksfmaster.com/endpoint/order/'+data })
export const getAllOrder= (data) => get({ url: 'http://admin.ksfmaster.com/endpoint/order/',data })


export const postFood= (data) => post({ url: 'http://admin.ksfmaster.com/endpoint/food/',data}) //增加菜单
export const delFood= (data) => del({ url: 'http://admin.ksfmaster.com/endpoint/food/'+data}) //删除菜单
export const updateFood= (data) => put({ url: 'http://admin.ksfmaster.com/endpoint/food/',data}) //更新菜单

