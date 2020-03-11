import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtForm, AtInput, AtButton } from "taro-ui";
import NavBar from "../../components/nav-bar/index";
import { postOrder } from "../../service/api/common";
import { queryString } from "../../utils/common";
import "./index.scss";

export default class Index extends Component {
  constructor() {
    super(...arguments);
    this.foodId = queryString().id;
    this.foodName = queryString().name;
    this.state = {
      roomNum: "",
      tel: ""
    };
  }
  config = {
    navigationBarTitleText: "购物车"
  };

  handleChange(type, value) {
    this.setState({
      [type]: value
    });
  }

  cancel =() =>{
    Taro.navigateTo({
        url:'/pages/index/index'
    })
  }

  onSubmit=()=> {
      debugger
    console.log(this.state);
    // 1、发起订单
    postOrder({
      foodId: this.foodId,
      status: 0,
      ...this.state
    }).then(res => {
      Taro.showToast({
        title: "操作成功",
        icon: "sucess"
      });
      // 2、成功回调，跳转到订单页面
      setTimeout(
        Taro.redirectTo({
          url: `/pages/my/index`
        }),
        1000
      );
    });
  }

  render() {
    console.log(queryString());
    return (
      <View className='m-post-order'>
        <NavBar title='购物车' icon='user' />
        <View className='title'>
          <Text>您选择的是{this.foodName}</Text>
        </View>
        <AtForm>
          <AtInput
            name='roomNum'
            title='房号'
            type='text'
            placeholder='如：A103'
            value={this.state.roomNum}
            onChange={value => this.handleChange("roomNum", value)}
          />

          <AtInput
            name='tel'
            title='手机号'
            type='text'
            placeholder='请输入您的手机号码'
            value={this.state.tel}
            onChange={value => this.handleChange("tel", value)}
          />
          <AtButton onClick={this.onSubmit.bind(this)} type='primary'>
            提交
          </AtButton>
          <AtButton onClick={this.cancel}>取消</AtButton>
        </AtForm>
      </View>
    );
  }
}
