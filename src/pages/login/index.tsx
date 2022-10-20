import { Component, useEffect } from 'react'
import { View, Image } from '@tarojs/components'
import Logo from '../../img/logo.svg'
import {
  QuestionnaireSubtitle,
  QuestionnaireTitle,
} from '@/components/Questionnaire/title'
import { ActionButton, PrimaryButton } from '@/components/Questionnaire/actions'
import Taro from '@tarojs/taro'
import {
  EnhancedInputField,
} from '@/components/Questionnaire/controls'
import { CodeInput } from '@/components/Flow/CodeInputer'
import { EnhancedLink } from '@/components/Link'
import { HistoryCard } from '@/components/Flow/HistoryCard'
import { mockData, ResultItem } from '@/components/Questionnaire/resultItem'
import { AuthButton } from '@/components/withAuth'
import { useQueryUser } from '@/utils/hooks/useQueryUser'

const Index = () => {
  useQueryUser()

  return (
    <>
      <QuestionnaireTitle>霍兰德兴趣测评</QuestionnaireTitle>
      <QuestionnaireSubtitle>
        通过这次测评，你会了解到自己的兴趣所在，并获得杭电相关专业和选填科目的推荐
      </QuestionnaireSubtitle>

      <AuthButton>
        <PrimaryButton
          onClick={() => {
            Taro.navigateTo({
              url: '/pages/answer/index',
            })
          }}
        >
          ok
        </PrimaryButton>
      </AuthButton>

      <ActionButton
        open-type="getUserInfo"
        onGetUserInfo={async (e) => {
          let token = Taro.getStorageSync('token')
          if (token) {
            const res = await Taro.request({
              url: `http://192.168.2.228:3000/api/wechat/auth`,
            })
            console.log(res)
            if (res.statusCode !== 200) {
              Taro.removeStorageSync('token')
            }
            return
          }
          const data = e.detail
          console.log('data', data)
          Taro.showToast({
            title: 'ok',
          })
          Taro.login({
            success: async function(res) {
              if (res.code) {
                //发起网络请求
                console.log(res.code)
                const loginResult = await Taro.request({
                  url: 'http://192.168.2.228:3000/api/wechat/login',
                  data: {
                    code: res.code,
                    encryptedData: data.encryptedData,
                    iv: data.iv,
                  },
                })
                console.log('loginResult', loginResult)
                Taro.setStorageSync('token', loginResult.data.token)
              } else {
                console.log('登录失败！' + res.errMsg)
              }
            },
          })
        }}
      >
        {Taro.getStorageSync('token') ? 'auth' : 'Go Login'}
      </ActionButton>

      <CodeInput size={6} onConfirm={(value) => console.log(value)} />

      <EnhancedInputField label="aaa">有些问题</EnhancedInputField>

      <EnhancedLink url={'/pages/login/index'}>去登录页</EnhancedLink>

      <HistoryCard />

      <ResultItem {...mockData} />
      <View className="p-6 max-w-sm mx-2 bg-white rounded-xl shadow-md flex items-center space-x-4">
        <View className="flex-shrink-0">
          <Image className="h-12 w-12" src={Logo} alt="ChitChat Logo" />
        </View>
        <View>
          <View className="text-xl font-medium text-black">ChitChat</View>
          <View className="text-gray-500">You have a new message!</View>
        </View>
      </View>
    </>
  )
}

export default Index
