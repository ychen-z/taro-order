import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import { AtCard} from 'taro-ui'
import NavBar from '../../components/nav-bar/index'
import Tabber from '../../components/tabber/index'
import DefaultImg from '../../assets/img/f1.jpg'
import './index.scss'

export default class Index extends Component {

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: '首页'
  }

  

  // 订餐
  evOrder =(id)=>{
    Taro.navigateTo({
      url: `/pages/post-order/index?id=`+id
    })
  }

  render() {
    return (
      <View className='m-index'>
        <NavBar title='我要点菜' icon='user' />
        <View className='content' >

        <View className='at-row at-row--wrap'>
          <View className='at-col-6' onClick={this.evOrder}>
            <AtCard
              note='小Tips'
              extra='额外信息'
              title='这是个标题'
              thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
            >
              这也是内容区 可以随意定义功能
            </AtCard>
            
          </View>
          <View className='at-col-6'>
            <AtCard
              note='小Tips'
              extra='额外信息'
              title='这是个标题'
              thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
            >
              这也是内容区 可以随意定义功能
            </AtCard>
          </View>

          <View className='at-col-6'>
            <AtCard
              note='小Tips'
              extra='额外信息'
              title='这是个标题'
              thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
            >
              这也是内容区 可以随意定义功能
            </AtCard>
          </View>
        </View>
          
        </View>

        
        <Tabber current={0} />
      </View>
    )
  }
}
