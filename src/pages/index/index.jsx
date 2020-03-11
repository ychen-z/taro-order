import Taro, {useState, useEffect} from '@tarojs/taro'
import {View,Text} from '@tarojs/components'
import {AtCard,AtButton} from 'taro-ui'
import NavBar from '../../components/nav-bar/index'
import Tabber from '../../components/tabber/index'
import Empty from "../../components/empty/index";
import {getFoodList} from '../../service/api/common'
import A0 from '../../assets/img/c1.jpg';
import A1 from '../../assets/img/c2.jpg';
import A2 from '../../assets/img/c3.jpg';
import A3 from '../../assets/img/c4.jpg';
import './index.scss'

// 我要订餐页面
function Index() {
  const [list,setList] = useState([]);
  // 订餐
  const evOrder = (id,name, index) => {
    Taro.navigateTo({
      url: `/pages/post-order/index?id=` + id +'&name='+name +"&index=" +index
    })
  }
  useEffect(() => {
    getFoodList().then(data => setList(data))
  }, []);

  return (
    <View className='m-index'>
      <NavBar title='我要订餐' icon='user' />
      <View className='content'>
      {list.length?<View className='at-row at-row--wrap'>
          {list.map((item,index) =><View className='at-col-6 order-detail'> <AtCard
            note='库存：999+份'
            title={item.foodName}
            thumb={[A0,A1,A2,A3][index%4]}
          >
            <View className='order-style'>
              <Text>零售价：10元</Text>
              <Text>简介：{item.foodStyle}</Text>
              </View>
            <View><AtButton type='primary' className='make-order' size='small' onClick={
            ()=>evOrder(item.id,item.foodName,index)
          }
            >预定</AtButton></View>
          </AtCard> </View>)}
        </View>:<Empty text='~ 暂无套餐供应~ ' />}
      </View>
      <Tabber current={0} />
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '我要订餐'
}

export default Index
