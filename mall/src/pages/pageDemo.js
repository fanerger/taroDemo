import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class Index extends Component {
  config = {
    navigationBarTitleText: 'page'
  }
  constructor () {
    super(...arguments)
  }
  
  render () {
    return (
      <View className='page'>
        <Text>page</Text>
      </View>
    )
  }
}
