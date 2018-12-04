import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

class LoginBtn extends Component {
  constructor () {
    super(...arguments)
  }
  wechatLogin () {
    Taro.login({
      success (res) {
        console.log(res)
      }
    })
  }
  render () {
    return (
      <View>
        <Button plain type='primary' onClick={this.wechatLogin}>微信登录组件</Button>
      </View>
    )
  }
}
export default LoginBtn