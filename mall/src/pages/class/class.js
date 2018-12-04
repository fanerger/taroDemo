import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import '../../styles/class.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '分2类'
  }

  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
      tabList: [
        { title: '标签页1' },
        { title: '标签页2' },
        { title: '标签页3' },
        { title: '标签页4' },
        { title: '标签页5' },
        { title: '标签页6' },
      ]
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // 点击左侧菜单
  handleClick (value) {
    this.setState({
      current: value
    })
  }

  render () {
    return (
      <AtTabs
        current={this.state.current}
        scroll
        height='100vh'
        tabDirection='vertical'
        tabList={this.state.tabList}
        onClick={this.handleClick.bind(this)}>
        {
          this.state.tabList.map((item, index) => (
            <AtTabsPane tabDirection='vertical' current={this.state.current} index={index} className='xx-tabspane'>
              <View style='font-size:18px;text-align:center;height:200px;'>{item.title}</View>
            </AtTabsPane>
          ))
        }
      </AtTabs>
    )
  }
}

