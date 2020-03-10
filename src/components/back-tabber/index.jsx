import Taro, { useState, useCallback } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'

const frontList =[
{ title: '订单管理', iconType: 'bullet-list' },
{ title: '菜谱管理', iconType: 'folder' }
]
export default function Tabber(props) {
  const [current, setCurrent] = useState(props.current || 0)
  const handleClick = useCallback(
    val => {
      if (val === current) return

      setCurrent(current)
      switch (val) {
        case 0:
          Taro.redirectTo({
            url: `/pages/order/index`
          })
          break
        case 1:
          Taro.redirectTo({
            url: `/pages/food/index`
          })
          break
        default:
          break
      }
    },
    [current]
  )

  return (
    <View>
      <AtTabBar
        fixed
        tabList={frontList}
        onClick={handleClick}
        current={current}
      />
    </View>
  )
}
