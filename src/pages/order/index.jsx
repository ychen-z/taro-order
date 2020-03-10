import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import NavBar from '../../components/nav-bar/index'
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

  entryfunc = () => {
    Taro.navigateTo({
      url: `/pages/index/index`
    })
  }

  render () {
    return (
      <View className='index'>
        {/* <NavBar
          onClickRgIconNd={this.adminEntry}
          color='#000'
          title='订单'
          rightSecondIconType='user' 
        /> */}
        <NavBar title='订单' icon='home' entryfunc={this.entryfunc} />

        <BackTabber current={0} back />
      </View>
    )
  }
}
