import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import {AtNavBar, AtCard} from 'taro-ui'
import Tabber from '../../components/tabber/index'
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

  // 管理员入口
  adminEntry = () => {
    Taro.navigateTo({
      url: `/pages/order/index`
    })
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
        <AtNavBar
          onClickRgIconNd={this.adminEntry}
          color='#000'
          title='我要点菜'
          rightSecondIconType='user' 
        />

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
