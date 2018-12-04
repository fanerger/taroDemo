import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'

import cartStore from './store/cartStore'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  cartStore
}

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/index/list',
      'pages/class/class',
      'pages/cart/cart',
      'pages/center/center',
      'pages/center/addAddress',
      'pages/detail/detail'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#626567",
      selectedColor: "#ED201F",
      backgroundColor: "#FBFBFB",
      borderStyle: "white",
      list: [{
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./images/tab_home.png",
        selectedIconPath: "./images/tab_home_active.png"
      },{
        pagePath: "pages/class/class",
        text: "分类",
        iconPath: "./images/tab_class.png",
        selectedIconPath: "./images/tab_class_active.png"
      },{
        pagePath: "pages/cart/cart",
        text: "购物车",
        iconPath: "./images/tab_cart.png",
        selectedIconPath: "./images/tab_cart_active.png"
      },{
        pagePath: "pages/center/center",
        text: "我的",
        iconPath: "./images/tab_center.png",
        selectedIconPath: "./images/tab_center_active.png"
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
