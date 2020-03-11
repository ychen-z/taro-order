import Taro from "@tarojs/taro";
import { AtTag } from "taro-ui";
import './index.less'

const Status ={
  0:'待接单',
  1:'已接单',
  2:'派件中',
  3:'已完结'
}
export default function Tag(props) {
  return (
    <AtTag type='primary' active={props.status!==3} circle>
      {Status[props.status || 0]}
    </AtTag>
  )
}
