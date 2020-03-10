import Taro from '@tarojs/taro'
import { WorkPlace, WorkType } from '@/constants/job/options'

// 获取工作类型
export const getWorkTypeName = id => {
  const type = WorkType.filter(item => item.id === id)[0] || {}
  return type.name
}

// 处理【工作地点】--给后端传参
export const getWorkPlaceParams = data => {
  /**
   * 注意：
   * 【工作地点】,选择【其他】时，需传参excludeCityIdList
   * 选择【北京】【上海】【广州】【杭州】【国外】时传参cityIdList
   * excludeCityIdList，cityIdList不共存
   * 例如：
   * 选择【北京】【其他】，传参excludeCityIdList=【上海，广州，杭州，国外】,cityIdList=null
   *
   * 开发：
   * 有“other”时，【不包含】中去掉【包含】
   */
  let otherPlace = WorkPlace.filter(item => item.id === 'other')[0] // 其他地区
  let excludeCity = [] // 不包含
  let cityId = data || [] // 选项

  cityId.map(item => {
    if (item === 'other') excludeCity = [...otherPlace.value]
  })
  cityId = cityId.filter(item => item !== 'other')
  let _data = {
    cityIdList: excludeCity.length > 0 ? null : cityId.length > 0 ? cityId : null,
    excludeCityIdList: excludeCity.length > 0 ? pullAll(excludeCity, cityId) : null
  }
  return _data
}

export const pullAll = (_array = [], _values = []) => {
  let array = []
  _array.map(item => {
    !_values.includes(item) && array.push(item)
  })
  return array
}
// 校验表单-（投递，推荐）
export const validateForm = data => {
  const errMsg = {
    name: '姓名不能为空！',
    phone: '手机号不能为空',
    email: '邮箱不能为空'
  }
  let reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
  for (let item in data) {
    if ((item === 'name' || item === 'phone' || item === 'email') && !data[item]) {
      Taro.showToast({ icon: 'none', title: errMsg[item] || '出现错误' })
      return false
    }
    if (item === 'phone' && data.place + '' === '0' && !/^1\d{10}/.test(data[item])) {
      Taro.showToast({ icon: 'none', title: '手机号格式错误' })
      return false
    }
    if ((item == 'email' && !reg.test(data[item])) || data['email'].includes('gmail')) {
      Taro.showToast({ icon: 'none', title: '邮箱格式错误' })
      return false
    }
  }
  return true
}
