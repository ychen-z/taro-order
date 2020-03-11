import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtCard ,AtTag} from "taro-ui";
import { getAllOrder, updateOrder } from "../../service/api/common";
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
    getAllOrder().then(res => {
      this.setState({
        list: res.records || []
      });
    });
  }

  config = {
    navigationBarTitleText: "首页"
  };

  entryfunc = () => {
    Taro.navigateTo({
      url: `/pages/index/index`
    });
  };

  getName = status => {
    return ["接单", "派送", "已签收",'完结'][status];
  };

  // 处理订单
  evHandle = (item, status) => {
    updateOrder({ ...item, status: status + 1 }).then(res => {
      this.setState({
        list: res.records || []
      });
    });
  };

  // 删除订单
  evDelOrder = (id) =>{
    // 删除订单
  }

  render() {
    return (
      <View className='m-order'>
        <NavBar title='订单' icon='home' entryfunc={this.entryfunc} />
        <View className='content'>
          {this.state.list.map(item => (
            <AtCard
              note={"备注：" + item.foodStyle}
              extra={[
                <AtTag onClick={() => this.evHandle(item, item.status)} circle active={item.status!=3}>
                  {this.getName(item.status)}
                </AtTag>,
                item.status==3&&<Text onClick={() => this.evDelOrder(item.id)}>
                删除
              </Text>
              ]}
              title={item.foodName}
            >
              <View>房间号:{item.roomNum}</View>
              <View>联系方式：{item.tel}</View>
            </AtCard>
          ))}
        </View>

        <BackTabber current={0} back />
      </View>
    );
  }
}
