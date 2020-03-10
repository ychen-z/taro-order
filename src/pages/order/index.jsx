import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import {AtNavBar, AtCard} from 'taro-ui'
import BackTabber from '../../components/back-tabber/index'

import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='index'>
        <AtNavBar
          onClickRgIconNd={this.adminEntry}
          color='#000'
          title='订单'
          rightSecondIconType='user' 
        />
        <BackTabber current={0} back />
      </View>
    )
  }
}
