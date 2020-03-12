import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import { AtButton } from "taro-ui";
import NavBar from "../../components/nav-bar/index";
import { queryString } from "../../utils/common";
import A0 from '../../assets/img/c1.jpg';
import A1 from '../../assets/img/c2.jpg';
import A2 from '../../assets/img/c3.jpg';
import A3 from '../../assets/img/c4.jpg';
import "./index.scss";

export default class Index extends Component {
  constructor() {
    super(...arguments);
    this.foodId = queryString().id;
    this.foodName = queryString().name;
    this.index = queryString().index || 0;
  }

  config = {
    navigationBarTitleText: "详情页"
  };

  order(id,name,index) {
    Taro.navigateTo({
        url: `/pages/post-order/index?id=` + id +'&name='+name +"&index=" +index
      })
  }

  cancel =() =>{
    Taro.navigateTo({
        url:'/pages/index/index'
    })
  }

  back =()=>{
    Taro.navigateBack()
  }

  render() {
    console.log(queryString());
    return (
      <View className='m-food-detail'>
        <NavBar title='详情' leftText='返回' onClickLeftIcon={this.back} leftIconType='chevron-left' />
        <View className='content'>
            <View className='title'>{this.foodName}</View>
            <View className='img'><Image src={[A0,A1,A2,A3][this.index%4]} /></View>
            <View className='desc'>图文无关</View>
            <View>
                <AtButton type='primary' className='make-order' size='normal' onClick={
                ()=>this.order(this.id,this.foodName,this.index)
            }
                >+ 加入购物车</AtButton>
            </View>

        </View>
        
      </View>
    );
  }
}
