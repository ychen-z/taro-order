import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtForm, AtInput, AtButton } from "taro-ui";
import NavBar from "../../components/nav-bar/index";
import { postFood, updateFood } from "../../service/api/common";
import "./index.scss";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodName:'', // food名字
      foodStyle:'' // 套餐特色
    };
  }

  config = {
    navigationBarTitleText: "套餐"
  };

  handleChange(type, value) {
    this.setState({
      [type]: value
    });
  }

  // 新增菜单
  addFood =()=>{
    postFood({...this.state}).then(res => {
      Taro.showToast({
        title:'更新成功',
        icon:'success'
      })
      setTimeout(()=>{
        Taro.navigateTo({
          url:'/pages/food/index'
        })
      },300)
    });
  }

  // 更新菜单
  update =()=>{
    updateFood({
      ...this.state
    }).then(res => {
      Taro.showToast({
        title:'更新成功',
        icon:'success'
      })
    });
  }

  onSubmit=()=> {
    this.addFood()
  }

  back =()=>{
    Taro.navigateBack()
  }

  render() {
    return (
      <View className='m-add-food'>
        <NavBar title='套餐' leftText='返回' onClickLeftIcon={this.back} leftIconType='chevron-left' />
        <View className='title'>
          <Text>~ 新增套餐 ~</Text>
        </View>
        <AtForm>
          <AtInput
            name='foodName'
            title='套餐名字'
            type='text'
            placeholder='如：草莓蛋糕'
            value={this.state.foodName}
            onChange={value => this.handleChange("foodName", value)}
          />
          <AtInput
            name='foodStyle'
            title='套餐简介'
            type='text'
            placeholder='味道甜美，入口即化'
            value={this.state.foodStyle}
            onChange={value => this.handleChange("foodStyle", value)}
          />
          <AtButton onClick={this.onSubmit.bind(this)} type='primary'>
            保存
          </AtButton>
        </AtForm>
      </View>
    );
  }
}
