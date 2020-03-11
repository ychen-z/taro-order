import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'

export default function Empty(props) {
  return (
    <View className='u-empty'>
       {props.text || '~ 暂无订单 ~'} 
    </View>
  )
}
