import Taro from '@tarojs/taro'
import { observable, action } from 'mobx'

class CartStore {
  @observable counter = 0;
  @observable theName = '购物车';
  @action increment () {
    this.counter++
    Taro.setTabBarBadge({
      index: 2,
      text: String(this.counter),
    })
  }

  @action decrement () {
    if (this.counter > 0) {
      this.counter--
      Taro.setTabBarBadge({
        index: 2,
        text: String(this.counter),
      })
    } else {
      Taro.removeTabBarBadge({
        index: 2,
      })
    }
  }

  @action incrementAsync () {
    setTimeout(() => {
      this.counter++
    }, 1000);
  }
}

export default new CartStore()