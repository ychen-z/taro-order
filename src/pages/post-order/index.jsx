import Taro, {Component} from '@tarojs/taro'
import {View,Text} from '@tarojs/components'
import {AtForm, AtInput, AtButton} from 'taro-ui'
import './index.scss'

export default class Index extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            roomNum: '',
            tel:""
        }
    }
    componentWillMount() {}

    componentDidMount() {}

    componentWillUnmount() {}

    componentDidShow() {}

    componentDidHide() {}

    config = {
        navigationBarTitleText: '下单'
    }

    handleChange(type,value) {
        this.setState({
            [type]:value
        })
    }

    onSubmit() {
        console.log(this.state)
        // 1、发起订单
        // 2、成功回调，跳转到订单页面
        Taro.redirectTo({
            url: `/pages/my/index`
        })
    }
    onReset() {
        
    }

    render() {
        return (
            <View className='m-post-order'>
                <View className='title'><Text >您选择的是A套餐</Text></View>
                <AtForm
                  onSubmit={this
                    .onSubmit
                    .bind(this)}
                  onReset={this
                    .onReset
                    .bind(this)}
                >
                    <AtInput
                      name='roomNum'
                      title='房号'
                      type='text'
                      placeholder='如：A103'
                      value={this.state.roomNum}
                      onChange={(value)=>this
                        .handleChange('roomNum',value)
                        } 
                    />

                    <AtInput
                      name='tel'
                      title='手机号'
                      type='text'
                      placeholder='请输入您的手机号码'
                      value={this.state.tel}
                      onChange={(value)=>this
                        .handleChange('tel',value)} 
                    />
                    <AtButton formType='submit' type='primary'>提交</AtButton>
                    <AtButton formType='reset'>重置</AtButton>
                </AtForm>
            </View>
        )
    }
}
