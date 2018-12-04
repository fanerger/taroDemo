import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import Address from '../../components/Address'

export default class AddAddress extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      form: {
        provinceName: '',
        cityName: '',
        district: ''
      },
      isOpened: false
    }
  }
  showAddModle () {
    this.setState({isOpened: true})
  }
  onForm (form) {
    this.setState({
      form,
      isOpened: false
    })
  }
  render () {
    const {form} = this.state
    return (
      <View>
        <Text>{`${form.provinceName},${form.cityName},${form.district}`}</Text>
        <Address onForm={this.onForm} isOpened={this.state.isOpened}/>
        <Button onClick={this.showAddModle}>地址选择</Button>
      </View>
    )
  }
}