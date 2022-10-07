import { Component, PropsWithChildren } from 'react'
import './app.css'
import 'windi.css'
import '@tarojs/taro/html.css'
import Taro from '@tarojs/taro'
import { Provider } from 'react-redux'
import configStore from './store'

const store = configStore()

class App extends Component<PropsWithChildren> {
  state: {}
  componentDidMount() {
    const interceptor = function(chain) {
      const requestParams = chain.requestParams
      requestParams.header = requestParams.header || {}
      requestParams.header.authorization = Taro.getStorageSync('token')

      return chain.proceed(requestParams)
      // .then(res => {
      //   return res
      // })
    }
    Taro.addInterceptor(interceptor)
  }

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <Provider store={store}>{this.props.children}</Provider>
  }
}

export default App
