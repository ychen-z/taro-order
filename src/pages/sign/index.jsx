import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtForm, AtInput, AtButton } from "taro-ui";
import NavBar from "../../components/nav-bar/index";
import "./index.scss";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tel: localStorage.getItem('tel')||''
    };
  }

  config = {
    navigationBarTitleText: "填写个人信息"
  };

  handleChange(type, value) {
    this.setState({
      [type]: value
    });
  }

  onSubmit=()=> {
    if(this.state.tel.length!=11){
      Taro.showToast({
        title:'手机号格式错误',
        icon:"none"
      })
      return
    }
    
    localStorage.setItem('tel',this.state.tel)
    Taro.navigateTo({
        url:'/pages/my/index'
    })
  }


  back =()=>{
    Taro.navigateBack()
  }

  render() {
    return (
      <View className='m-sign'>
        <NavBar title='账户' leftText='返回' onClickLeftIcon={this.back} leftIconType='chevron-left' />
        <View className='title'>
          <Text>个人信息（必填）</Text>
        </View>
        <AtForm>
          <AtInput
            name='tel'
            title='手机号'
            type='text'
            maxLength='11'
            placeholder='180....'
            value={this.state.tel}
            onChange={value => this.handleChange("tel", value)}
          />
          <AtButton onClick={this.onSubmit.bind(this)} type='primary'>
            保存
          </AtButton>
        </AtForm>
      </View>
    );
  }
}
