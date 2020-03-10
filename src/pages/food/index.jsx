import Taro, {Component} from '@tarojs/taro'
import {View,Button,Text} from '@tarojs/components'
import {AtCard} from 'taro-ui'
import BackTabber from '../../components/back-tabber/index'
import NavBar from '../../components/nav-bar/index'
import { getFoodList,postFood,delFood, updateFood } from "../../service/api/common";
import './index.scss'

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  componentDidMount() {
    getFoodList().then(res => {
      this.setState({
        list: res || []
      });
    });
  }

  config = {
    navigationBarTitleText: '菜谱管理'
  }


  addFood =()=>{
    postFood({
      foodName:'完美菜单',
      foodStyle:'红烧'
    }).then(res => {
      this.setState({
        list: res || []
      });
    });
  }

  delFood =(id)=>{
    delFood(id).then(res => {
      Taro.showToast({
        title:'成功',
        icon:'success'
      })
    });
  }

  update =(item)=>{
    debugger
    updateFood({
      ...item,foodName:'茄子',
    }).then(res => {
      Taro.showToast({
        title:'成功',
        icon:'success'
      })
    });
  }

  entryfunc =()=>{
    Taro.navigateTo({
      url:'/pages/index/index'
    })
  }



  render() {
    return (
      <View className='m-food'>
        <NavBar title='菜谱管理' icon='home' entryfunc={this.entryfunc} />

        {this.state.list.map(item =><View onClick={
            ()=>evOrder(item.id,item.foodName)
          }
        > <AtCard
          note={item.foodStyle}
          extra={[<Text onClick={()=>this.delFood(item.id)}>删除</Text>,<Text onClick={()=>this.update(item)}>编辑</Text>]}
          title={item.foodName}
          thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
        >
            做法：很好吃哦！
          </AtCard> </View>)}

          <Button onClick={this.addFood}>+ 新增菜单</Button>
        <BackTabber current={1} back />
      </View>
    )
  }
}
