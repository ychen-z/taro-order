import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtCard, AtAvatar, AtTag } from "taro-ui";
import Tabber from "../../components/tabber/index";
import Empty from "../../components/empty/index";
import Tag from "../../components/tag/index";
import Navbar from "../../components/nav-bar/index";
import { getMyOrder } from "../../service/api/common";
import Person from "../../assets/img/person.jpg";
import "./index.scss";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.tel = localStorage.tel;
    this.state = {
      list: []
    };
  }

  componentWillMount(){
      // 没有手机号需要用户自己填写一个
    if (!this.tel) {
      Taro.navigateTo({
        url:'/pages/sign/index'
      })
      return;
    }
  }
  componentDidMount() {
    this.getMyOrder();// 获取我的订单
  }

  config = {
    navigationBarTitleText: "个人中心"
  };

  editCount =()=>{
    Taro.navigateTo({
      url:'/pages/sign/index'
    })
  }

  getMyOrder=() =>{
    getMyOrder(localStorage.getItem('tel')).then(res => {
      this.setState({
        list: res || []
      });
    });
  }

  render() {
    return (
      <View className='m-my-order'>
        <Navbar title='个人中心' icon='user' />
        <View className='content'>
          <View className='at-row count'>
            <View className='at-col at-col-2'>
              <AtAvatar circle image={Person}></AtAvatar>
            </View>
            <View className='at-col at-col-8'>
              <Text className='tel'>{localStorage.tel}</Text>
              <Text className='edit' onClick={this.editCount}>修改</Text>
            </View>
          </View>
          <View className='order-title'>我的订单：</View>
          <View onClick={this.evOrder}>
            {this.state.list.length?this.state.list.map(item => (
              <AtCard
                extra={
                  <Tag status={item.status} />
                }
                title={item.foodName}
              >
                做法：{item.foodStyle}
              </AtCard>
            )):<Empty></Empty>}
          </View>
        </View>
        <Tabber current={1} />
      </View>
    );
  }
}
