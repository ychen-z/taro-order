import Taro, {Component, useState, useEffect} from '@tarojs/taro'
import {View} from '@tarojs/components'
import {AtCard} from 'taro-ui'
import NavBar from '../../components/nav-bar/index'
import Tabber from '../../components/tabber/index'
import {getFoodList} from '../../service/api/common'

import './index.scss'

function Index() {
  const [list,
    setList] = useState([]);
  // 订餐
  const evOrder = (id) => {
    Taro.navigateTo({
      url: `/pages/post-order/index?id=` + id
    })
  }

  useEffect(() => {
    getFoodList().then(data => setList(data))
  }, []);

  return (
    <View className='m-index'>
      <NavBar title='我要点菜' icon='user' />
      <View className='content'>

        <View className='at-row at-row--wrap'>
          {list.map(item =><View className='at-col-6' onClick={
            evOrder
          }
          > <AtCard
            note={item.foodStyle}
            extra='999+份'
            title={item.foodName}
            thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
          >
            做法：很好吃哦！
          </AtCard> </View>)}
        </View>
      </View>
      <Tabber current={0} />
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '首页'
}

export default Index
