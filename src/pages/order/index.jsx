import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtCard ,AtTag} from "taro-ui";
import { getAllOrder, updateOrder, delOrder } from "../../service/api/common";
import NavBar from "../../components/nav-bar/index";
import BackTabber from "../../components/back-tabber/index";
import "./index.scss";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  componentDidMount() {
    this.getOrders()
  }

  getOrders = () =>{
    getAllOrder({size:'10000'}).then(res => {
      this.setState({
        list: res.records || []
      });
    });
  }

  config = {
    navigationBarTitleText: "订单管理"
  };

  entryfunc = () => {
    Taro.navigateTo({
      url: `/pages/index/index`
    });
  };

  getName = status => {
    return ["接单", "派送", "已送达",'完结'][status];
  };

  // 处理订单
  evHandle = (item, status) => {
    if(status>2) return;
    updateOrder({ ...item, status: status +1 }).then(res => {
      Taro.showToast({
        title:['已接单','赶紧去派送吧','已送达','订单已关闭'][status],
        icon:'success'
      })
      this.getOrders();
    });
  };

  // 删除订单
  evDelOrder = (id) =>{
    delOrder(id).then(res=>{
      Taro.showToast({
        title:'删除成功',
        icon:'success'
      })
    })
  }

  render() {
    return (
      <View className='m-order'>
        <NavBar title='订单' icon='home' entryfunc={this.entryfunc} />
        <View className='content'>
          {this.state.list.map(item => (
            <AtCard
              note={"备注：" + item.foodStyle}
              title={item.foodName}
              extra={[
                <AtTag onClick={() => this.evHandle(item, item.status)} circle active={item.status!=3}>
                  <View className={'at-icon at-icon-'+['bell','map-pin','share-2','check'][item.status]}></View> {this.getName(item.status)}</AtTag>]}
            >
              <View className='room'>房间号:<Text>{item.roomNum}</Text></View>
              <View className='tel'>联系方式：<Text>{item.tel}</Text></View>
            </AtCard>
          ))}
        </View>

        <BackTabber current={0} back />
      </View>
    );
  }
}
