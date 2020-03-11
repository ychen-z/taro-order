import Taro, {Component} from '@tarojs/taro'
import {View,Button,Text} from '@tarojs/components'
import {AtCard,AtIcon,AtButton} from 'taro-ui'
import BackTabber from '../../components/back-tabber/index'
import NavBar from '../../components/nav-bar/index'
import { getFoodList,delFood } from "../../service/api/common";
import './index.scss'

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  componentDidMount() {
    this.getFoods()
  }


  config = {
    navigationBarTitleText: '菜单管理'
  }


  getFoods = () =>{
    getFoodList().then(res => {
      this.setState({
        list: res || []
      });
    });
  }

  addFood=()=>{
    Taro.navigateTo({
      url:'/pages/add-food/index'
    })
  }

  // 删除菜单
  delFood =(id)=>{
    Taro.showModal({
      title: '删除菜单',
      content: '确定删除套餐吗？',
    }).then(res=>{
      res.confirm && delFood(id).then(res => {
        this.getFoods()
        Taro.showToast({
          title:'删除成功',
          icon:'success'
        })
      });
    })
  }

  entryfunc =()=>{
    Taro.navigateTo({
      url:'/pages/index/index'
    })
  }

  render() {
    return (
      <View className='m-food'>
        <NavBar title='菜单管理' icon='home' entryfunc={this.entryfunc} />
        <View className='content'>
            {
            this.state.list.map(item =>
              <View> 
                <AtCard
                  extra={[<AtIcon value='trash' size='24' color='#F00' onClick={()=>this.delFood(item.id)}></AtIcon>]}
                  title={item.foodName}
                >
              简介：{item.foodStyle}
              </AtCard> 
            </View>)
            }

<AtButton  onClick={this.addFood} type='secondary'>+ 新增套餐</AtButton>
        </View>
        

          
        <BackTabber current={1} back />
      </View>
    )
  }
}
