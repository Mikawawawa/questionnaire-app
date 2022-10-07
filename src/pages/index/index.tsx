import { Component, useEffect } from 'react'
import { View, Image } from '@tarojs/components'
import './index.css'
import Logo from '../../img/logo.svg'
import {
  QuestionnaireSubtitle,
  QuestionnaireTitle,
} from '@/components/Questionnaire/title'
import { ActionButton, PrimaryButton } from '@/components/Questionnaire/actions'
import Taro from '@tarojs/taro'
import { EnhancedInputField } from '@/components/Questionnaire/controls'
import { CodeInput } from '@/components/Flow/CodeInputer'
import { EnhancedLink } from '@/components/Link'
import { HistoryCard } from '@/components/Flow/HistoryCard'
import { mockData, ResultItem } from '@/components/Questionnaire/resultItem'
import { AuthButton } from '@/components/withAuth'
import { useQueryUser } from '@/utils/hooks/useQueryUser'

const Index = () => {
  useQueryUser()

  return (
    <div
      className='page'
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',

        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <QuestionnaireTitle>霍兰德兴趣测评</QuestionnaireTitle>
      <QuestionnaireSubtitle>
        通过这次测评，你会了解到自己的兴趣所在，并获得杭电相关专业和选填科目的推荐
      </QuestionnaireSubtitle>

      <div
        className="space-y-8"
        style={{
          flex: 1,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CodeInput size={4} onConfirm={(value) => console.log(value)} />

        <QuestionnaireSubtitle>输入四位口令进入测评</QuestionnaireSubtitle>
      </div>

      <div
        className='space-y-4'
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <AuthButton>
          <PrimaryButton
            onClick={() => {
              Taro.navigateTo({
                url: '/pages/answer/index',
              })
            }}
          >
            开始测评
          </PrimaryButton>
        </AuthButton>

        <AuthButton>
          <EnhancedLink url={'/pages/history/index'}>查看历史记录</EnhancedLink>
        </AuthButton>
      </div>
    </div>
  )
}

export default Index
