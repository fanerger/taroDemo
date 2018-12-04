import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import '../../styles/detail.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '分2类'
  }

  constructor () {
    super(...arguments)
    this.state = {
      value1: '',
      list: [
        {name: '衣帽服饰', active: true},
        {name: '手机数码'},
        {name: '衣帽服公'},
        {name: '手机数码'},
        {name: '衣帽服饰'},
        {name: '手机数码'}
      ],
      lastNavIndex: 0
    }
  }
  onChange (stateName, value) {
    this.setState({
      [stateName]: value
    })
  }

  onActionClick () {
    Taro.showToast({
      title: this.state.value1,
      icon: 'success',
      duration: 2000
    })
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  toastTest = () => {
    Taro.setStorage({
      key: 'test',
      data: {name: 'fanwen'}
    })
    Taro.showToast({
      icon: 'none',
      title: 'storage存储'
    })
  }
  // 点击左侧菜单
  clickNav (item, index) {
    let navs = this.state.list
    if (typeof this.state.lastNavIndex == 'number') {
      delete navs[this.state.lastNavIndex].active
    }
    navs[index]['active'] = true
    this.setState({
      list: navs,
      lastNavIndex: index
    })
  }

  render () {
    let navsData = this.state.list
    const navs = navsData.map((item, index)=>{
      return <View key={index} className={item.active ? 'active-nav' : 'null'} onClick={this.clickNav.bind(this, item, index)}>{item.name}</View>
    })
    return (
      <View className='class-page'>
      <AtSearchBar
          value={this.state.value1}
          onChange={this.onChange.bind(this, 'value1')}
          onActionClick={this.onActionClick.bind(this)}
        />
        {/* <Text onClick={this.toastTest}>点我存缓存</Text> */}
        <View className='panel__content no-padding'>
          <View className='component-item'>
            
          </View>
        </View>
        <View className='class-content'>
          <ScrollView className='left-navs'>
            {navs}
          </ScrollView> 
        </View>
      </View>
    )
  }
}

