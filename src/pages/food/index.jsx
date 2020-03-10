import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import {AtCard} from 'taro-ui'
import BackTabber from '../../components/back-tabber/index'
import NavBar from '../../components/nav-bar/index'


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

  entryfunc =()=>{
    Taro.navigateTo({
      url:'/pages/index/index'
    })
  }



  render() {
    return (
      <View className='m-my-order'>
        <NavBar title='菜谱管理' icon='home' entryfunc={this.entryfunc} />

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
