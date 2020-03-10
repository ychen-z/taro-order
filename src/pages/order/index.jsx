import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import {AtCard} from 'taro-ui'
import { getAllOrder } from "../../service/api/common";
import NavBar from '../../components/nav-bar/index'
import BackTabber from '../../components/back-tabber/index'
import './index.scss'

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.tel = localStorage.tel;
    this.state = {
      list: []
    };
  }
  componentWillMount () { }

  componentDidMount () { 
    getAllOrder().then(res => {
      this.setState({
        list: res.records || []
      });
    });
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '首页'
  }

  entryfunc = () => {
    Taro.navigateTo({
      url: `/pages/index/index`
    })
  }

  render () {
    return (
      <View className='m-order'>
        <NavBar title='订单' icon='home' entryfunc={this.entryfunc} />
        {this.state.list.map(item => (
            <AtCard note={item.foodStyle} extra='接单中' title={item.foodName}>
              这也是内容区 可以随意定义功能
            </AtCard>
          ))}
        <BackTabber current={0} back />
      </View>
    )
  }
}
