import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'


@inject('cartStore')
@observer
class Cart extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillRect')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  increment = () => {
    const { cartStore } = this.props
    cartStore.increment()
  }

  decrement = () => {
    const { cartStore } = this.props
    cartStore.decrement()
  }

  render () {
    const { cartStore: { counter, theName } } = this.props
    return (
      <View className='index'>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Text>{theName}</Text>
        <Text>{counter}</Text>
      </View>
    )
  }
}

export default Cart
