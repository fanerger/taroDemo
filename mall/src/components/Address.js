import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView, Text} from '@tarojs/components'
import { AtFloatLayout } from 'taro-ui'
import Ajax from '../utils/ajax'
import '../styles/address.less'

export default class Address extends Component {
  constructor () {
    super(...arguments)
    this.state={
      allArea: [],
      citys: [],
      districts: [],
      addressType: 1,
      addressForm: {
        provinceName: '',
        cityName: '',
        district: ''
      }
    }
  }
  componentWillMount () {
    this.getAllArea()
  }
  getAllArea () {
    Taro.getStorage({ key: 'allArea' })
    .then(res => {
      this.setState({
        allArea: res.data
      })
    })
    .catch(() => {
      Ajax({
        url: '/busi/area/allAreaInfo',
        success: data => {
          this.setState({
            allArea: data.attr.allArea
          })
          Taro.setStorage({ key: 'allArea', data: data.attr.allArea })
        }
      })
    })
  }
  // 选择省份
  clickPro (item) {
    let addressForm = Object.assign({}, this.state.addressForm, {provinceName: item.provinceName})
    this.setState({
      addressType: 2,
      citys: item.citys,
      addressForm
    })
  }
  // 选择城市
  clickCity (item) {
    let addressForm = Object.assign({}, this.state.addressForm, {cityName: item.cityName})
    this.setState({
      addressType: 3,
      districts: item.districts,
      addressForm
    })
  }
  // 选择区县
  clickDis (item) {
    let addressForm = Object.assign({}, this.state.addressForm, {district: item})
    this.setState({
      addressForm
    }, () => {
      // 这里有个大坑 任何组件的事件传递都要以 on 开头
      this.props.onForm(this.state.addressForm)
    })
  }
  // 点击地址三个tab
  clickAddressTab (type) {
    let addressForm = this.state.addressForm
    if (type === 1) {
      addressForm = Object.assign({}, this.state.addressForm, {district: '', cityName: ''})
    } else if (type === 2) {
      addressForm = Object.assign({}, this.state.addressForm, {district: ''})
    }
    this.setState({
      addressType: type,
      addressForm
    })
  }
  handleClose () {}
  render () {
    const { allArea, citys, districts, addressForm } = this.state
    const proList = allArea.map((item, index)=>{
      return (<View onClick={this.clickPro.bind(this, item)} className='address-li'><Text key={index}>{item.provinceName}</Text></View>)
    })
    const cityList = citys.map((item, index)=>{
      return (<View onClick={this.clickCity.bind(this, item)} className='address-li'><Text key={index}>{item.cityName}</Text></View>)
    })
    const disList = districts.map((item, index)=>{
      return (<View onClick={this.clickDis.bind(this, item)} className='address-li'><Text key={index}>{item}</Text></View>)
    })
    return (
        <AtFloatLayout
          isOpened={this.props.isOpened}
          title='请选择地区'
          onClose={ this.handleClose } >
          <View>
            <View className='address-tabs-wrap'>
              <View className='address-tab' onClick={this.clickAddressTab.bind(this, 1)}><Text>{addressForm.provinceName || '请选择'}</Text></View>
              <View className='address-tab' onClick={this.clickAddressTab.bind(this, 2)}><Text>{addressForm.cityName || ''}</Text></View>
              <View className='address-tab' onClick={this.clickAddressTab.bind(this, 3)}><Text>{addressForm.district || ''}</Text></View>
            </View>
            <View className='address-container'>
              <ScrollView className='scroll-wrap' scrollY>
                {this.state.addressType === 1 && proList}
                {this.state.addressType === 2 && cityList}
                {this.state.addressType === 3 && disList}
              </ScrollView>
            </View>
          </View>
        </AtFloatLayout>
    )
  }
}