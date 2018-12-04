import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, Button, SwiperItem, Image } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'

import '../../styles/index.less'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页565'
  }
  constructor () {
    super(...arguments)
    this.state = {
      value1: '',
      current: 1,
      duration: 500,
      interval: 5000,
      isCircular: true,
      isAutoplay: true,
      hasIndicatorDots: true,
      imgUrls: [
        'https://img10.360buyimg.com/babel/s700x360_jfs/t25855/203/725883724/96703/5a598a0f/5b7a22e1Nfd6ba344.jpg!q90!cc_350x180',
        'https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180',
        'https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180'
      ]
    }
  }
  clickSwiper () {
    Taro.navigateTo({
      url: '/pages/detail/detail'
    })
  }
  toList () {
    Taro.navigateTo({
      url: '/pages/index/list'
    })
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
  render () {
    const { current, isAutoplay, duration, isCircular, interval, hasIndicatorDots, imgUrls } = this.state
    return (
      <View className='page'>
        <AtSearchBar
          value={this.state.value1}
          onChange={this.onChange.bind(this, 'value1')}
          onActionClick={this.onActionClick.bind(this)}
        />
        {/* S Body */}
        <View className='example-item'>
                <Swiper
                  slideMult='10'
                  indicatorColor='#999'
                  indicatorActiveColor='#333'
                  current={current}
                  duration={duration}
                  interval={interval}
                  circular={isCircular}
                  autoplay={isAutoplay}
                  indicatorDots={hasIndicatorDots}
                  preMargin='20'
                >
                  {
                    imgUrls.map((item, idx) => (
                      <SwiperItem key={idx}>
                        <Image mode='widthFix' src={item} onClick={this.clickSwiper.bind(this)} className='slide-image' width='355' height='150' />
                      </SwiperItem>
                    ))
                  }
                </Swiper>
              </View>
        {/* E Body */}
        <Button onClick={this.toList}>to列表页</Button>
      </View>
    )
  }
}
