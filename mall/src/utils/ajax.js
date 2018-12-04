import Taro from '@tarojs/taro';
import { baseUrl } from '../config';

const request_data = {
  platform: 'h5',
  gzhCode: 2,
};

export default (options = { data: {} }) => {
  Taro.request({
    url: baseUrl + options.url,
    data: {
      ...request_data,
      ...options.data
    },
    header: {
      'Content-Type': 'application/json',
    },
    method: options.method || 'GET',
  }).then((res) => {
    const { statusCode, data } = res;
    if (statusCode == 200 ) {
      if (!data.success) {
        if (options.fail) {
          options.fail(data)
        } else {
          Taro.showToast({
            title: data.message || '请求失败',
            icon: 'none',
            mask: true,
          })
        }
      } else {
        if (options.success) options.success(data)
      }
    } else {
      throw new Error(`网络请求错误，状态码${statusCode}`);
    }
  })
}
