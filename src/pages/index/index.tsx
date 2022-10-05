import { Component } from 'react'
import { View, Image } from '@tarojs/components'
import './index.css'
import Logo from '../../img/logo.svg'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className="p-6 max-w-sm mx-2 bg-white rounded-xl shadow-md flex items-center space-x-4">
        <View className="flex-shrink-0">
          <Image className="h-12 w-12" src={Logo} alt="ChitChat Logo" />
        </View>
        <View>
          <View className="text-xl font-medium text-black">ChitChat</View>
          <View className="text-gray-500">You have a new message!</View>
        </View>
      </View>
    )
  }
}