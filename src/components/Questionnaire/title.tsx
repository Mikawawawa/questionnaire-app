import React, { FC } from 'react'

export const QuestionnaireTitle: FC<any> = (props) => {
  return <div className={'mb-3 mx-2 text-2xl font-semibold'} style={{
    color: '#2c5378'
  }}>
    {props.children}
  </div>
}

export const QuestionnaireSubtitle: FC<any> = (props) => {
  return <div className={'mb-3 mx-2 text-sm'} style={{
    color: '#757575',
    lineHeight: 2.5
  }}>
    {props.children}
  </div >
}