import React from 'react'

interface IResultItemData {
  title: string
  content: string[]
  assets?: Array<{
    type: 'audio' | 'image'
    url: string
  }>
}

export const mockData: IResultItemData = {
  title: '软件工程专业',
  content: [
    '测试文案测试文案测试文案测试文案测试文案测试文案测试文案',
    '测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案',
    '测试文案测试文案测试文案测试文案',
  ],
}

export const ResultItem = (props: Partial<IResultItemData>) => {
  return (
    <div className='mx-4'>
      <div className='text-2xl font-bold text-blue-900'>{props.title}</div>
      <div>
        {props?.content?.map((data, index) => (
          <div className='my-4 text-base text-gray-500' style={{
            lineHeight: 2
          }} key={index}>{data}</div>
        ))}
      </div>
    </div>
  )
}
