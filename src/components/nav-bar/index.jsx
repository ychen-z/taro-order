import Taro from '@tarojs/taro'
import {AtNavBar} from 'taro-ui'

export default function NavBar(props) {
  // 管理员入口
  const entryfunc = () => {
    Taro.navigateTo({
      url: `/pages/order/index`
    })
  }

  return (
    <AtNavBar
      onClickRgIconNd={props.entryfunc || entryfunc}
      color='#000'
      title={props.title}
      rightSecondIconType={props.icon}
    />
  )
}
