import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class Index extends Component {
  config = {
    navigationBarTitleText: 'page'
  }
  constructor () {
    super(...arguments)
  }
  onScrolltoupper () {
    console.log(2)
  }
  onScrollToLower () {
    console.log(333)
  }
  render () {
    return (
      <View className='page'>
        <ScrollView
          className='scrollview'
          scrollY
          scrollWithAnimation
          scrollTop='0'
          style='height: 150px;'
          lowerThreshold='20'
          upperThreshold='20'
          onScrolltoupper={this.onScrolltoupper}
          onScrollToLower={this.onScrollToLower}>
          <View style='height:150px;background-color:rgb(26,173,25);'>A</View>
          <View style='height:150px;background-color:rgb(39,130,215);'>B</View>
          <View style='height:150px;background-color:rgb(241,241,241);color: #333;'>C</View>
        </ScrollView>
      </View>
    )
  }
}
