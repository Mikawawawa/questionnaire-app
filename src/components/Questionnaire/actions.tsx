import React, { FC } from 'react'
import { Button } from '@tarojs/components'
import { ButtonProps } from '@tarojs/components'


export const ActionButton: FC<ButtonProps> = (props) => {
  const { children, ...rest } = props
  return <div className="mx-2 text-center px-4 py-1.5 text-white text-base rounded-md relative" style={{
    display: 'inline-block',
    backgroundColor: '#2C5378'
  }}>
    {children}

    <Button
      {...rest}
      style={{
        position: 'absolute', backgroundColor: 'transparent', border: 'none',
        paddingLeft: 0, paddingRight: 0, top: 0, left: 0, right: 0, bottom: 0
      }}
      plain={true}
    />
  </div>
}

export const PrimaryButton: FC<ButtonProps> = (props) => {
  const { children, ...rest } = props
  return <div className="mx-2 text-center px-4 py-1.5 text-base rounded-md relative" style={{
    display: 'inline-block',
    background: 'rgba(196, 212, 222, 1)',
    color: 'rgb(57,112,144)'
  }}>
    {children}

    <Button
      {...rest}
      style={{
        position: 'absolute', backgroundColor: 'transparent', border: 'none',
        paddingLeft: 0, paddingRight: 0, top: 0, left: 0, right: 0, bottom: 0
      }}
      plain={true}
    />
  </div>
}