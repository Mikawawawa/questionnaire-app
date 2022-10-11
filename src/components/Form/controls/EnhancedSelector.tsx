import React, { FC, ReactNode } from 'react'
import { AtCheckbox, AtRadio } from 'taro-ui'
import { ControlBasicProps } from './types'

interface RadioProps extends ControlBasicProps {
  options: Array<{
    label: ReactNode
    value?: any
    desc?: ReactNode
    disabled?: boolean
  }>
}

export const EnhancedSingleSelector: FC<RadioProps> = (props) => {
  return (
    <AtRadio
      options={props.options}
      value={props.value}
      onClick={(value) => {
        console.log(value)
        props.onChange?.(value)
      }}
    />
  )
}

export const EnhancedMultipleSelector: FC<RadioProps> = (props) => {
  return (
    <AtCheckbox
      options={props.options}
      selectedList={props.value}
      onChange={(value) => {
        props.onChange?.(value)
      }}
    />
  )
}
