import Taro, { useState, useCallback } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'

const backList =[
  { title: '订餐', iconType: 'bullet-list' },
  { title: '个人中心', iconType: 'folder' }
]

export default function Tabber(props) {
  const [current, setCurrent] = useState(props.current || 0)
  debugger
  const handleClick = useCallback(
    val => {
      if (val === current) return

      setCurrent(current)
      switch (val) {
        case 0:
            Taro.redirectTo({
              url: `/pages/index/index`
            })
            break
        
        case 1:
          Taro.redirectTo({
            url: `/pages/my/index`
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
        tabList={backList}
        onClick={handleClick}
        current={current}
      />
    </View>
  )
}
