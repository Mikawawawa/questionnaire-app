/* eslint-disable no-undef */
import { Component, createRef, FC, useEffect, useState } from 'react'
import { View, Text, Switch, Form, Button } from '@tarojs/components'
import { FormContext } from './context'
import { AtButton, AtForm } from 'taro-ui'

export const EnhancedForm: FC<any> = (props) => {
  const [form, updateForm] = useState({})
  
  useEffect(() => {
    console.log(form)
    props.onChange?.(form)
  }, [form])
  
  return (
    <FormContext.Provider
      value={{
        form,
        handleChange: (name, value) => {
          updateForm({
            ...form,
            [name]: value,
          })
        },
      }}
    >
      <div
        style={{
          flexShrink: 0,
        }}
      >
        <AtForm
          className="space-y-4"
          onSubmit={() => {
            console.log('form onSubmit', form)
          }}
        >
          {props.children}
        </AtForm>
      </div>
    </FormContext.Provider>
  )
}
