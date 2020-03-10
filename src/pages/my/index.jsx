import Taro, { Component } from "@tarojs/taro";
import { View, Text} from "@tarojs/components";
import { AtCard,AtAvatar,AtButton } from "taro-ui";
import Tabber from "../../components/tabber/index";
import Navbar from "../../components/nav-bar/index";
import { getMyOrder } from "../../service/api/common";
import "./index.scss";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.tel = localStorage.tel;
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    // 没有手机号需要用户自己填写一个
    if (!this.tel) {
      return;
    }

    getMyOrder("150").then(res => {
      this.setState({
        list: res || []
      });
    });
  }

  config = {
    navigationBarTitleText: "我的订单"
  };

  render() {
    return (
      <View className='m-my-order'>
        <Navbar title='我的订单' icon='user' />
        <View className='at-row count'>
        <View className='at-col at-col-2'><AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar></View>
    <View className='at-col at-col-8'><Text className='tel'>{localStorage.tel}</Text><Text className='edit'>编辑</Text></View>
      </View>
        <View onClick={this.evOrder}>
          {this.state.list.map(item => (
            <AtCard note={item.foodStyle} extra='接单中' title={item.foodName}>
              这也是内容区 可以随意定义功能
            </AtCard>
          ))}
        </View>
        <Tabber current={1} />
      </View>
    );
  }
}
