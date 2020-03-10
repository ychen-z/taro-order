import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import {AtNavBar, AtCard} from 'taro-ui'
import BackTabber from '../../components/back-tabber/index'

import './index.scss'

export default class Index extends Component {

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: '菜谱管理'
  }

  backHome =()=>{
    Taro.navigateTo({
      url:'/pages/index/index'
    })
  }

  render() {
    return (
      <View className='m-my-order'>
        <AtNavBar
          onClickRgIconNd={this.backHome}
          color='#000'
          title='菜谱管理'
          rightSecondIconType='home' 
        />
        <View onClick={this.evOrder}>
          <AtCard
            note='小Tips'
            extra='额外信息'
            title='这是个标题'
            thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
          >
            这也是内容区 可以随意定义功能
          </AtCard>
        </View>
        <BackTabber current={1} back />
      </View>
    )
  }
}
