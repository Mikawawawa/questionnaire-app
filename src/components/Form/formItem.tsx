/* eslint-disable no-undef */
import React, { Component, FC } from 'react'
import { View, Text, Switch, Form, Button } from '@tarojs/components'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { AtIcon } from 'taro-ui'
import { onValidateField } from '@/utils/formValidator'
import { useFormField } from './context'

export const FormItemEnhanced: FC<any> = (props) => {
  const { value, onChange } = useFormField(props.name)
  return (
    <div className='my-4'>
      {props.label && <div className="at-article__h3">{props.label}</div>}
      {React.Children.map(props.children, (child) => {
        return (
          <div>
            {React.cloneElement(child, {
              //把父组件的props.name赋值给每个子组件
              name: props.name,
              value,
              onChange: (val) => {
                if (val !== child?.props.value) {
                  onChange(val)
                }
              },
            })}
          </div>
        )
      })}
    </div>
  )
}
