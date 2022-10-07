import React, { FC, ReactNode } from 'react'
import { Input } from '@tarojs/components'
import { InputProps } from '@tarojs/components'
import { useState } from 'react'

interface IEnhancedInputProps extends InputProps {
  label?: ReactNode
}

export const EnhancedInput: FC<InputProps & {
  [k: string]: any
}> = (props) => {
  const [focus, setFocus] = useState(false)
  const { style, className, ...rest } = props
  return <Input
    onFocus={() => setFocus(true)}
    onBlur={() => setFocus(false)}
    type="text"
    style={{
      display: 'block',
      height: '100%',
      // @ts-ignore
      ...(props.style || {})
    }}
    className={`
        form-control
        block
        text-base
        font-normal
        text-gray-500
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mt-1
        ${className || ''}
        ${focus ? 'text-gray-700 bg-white outline-none shadow-md shadow-cyan-700' : ''}
      `}
  />
}

export const EnhancedInputField: FC<IEnhancedInputProps> = (props) => {
  const { label, children, ...rest } = props
  return <div className="flex justify-center my-2 mx-2">
    <div className="mb-3 xl:w-96">
      {label && <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        {label}
      </label>}
      {/* <Input
        type="text"
        className="
        form-control
        block
        px-2
        py-1.5
        text-base
        font-normal
        text-gray-500
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mt-1
        forFocus
      "
        style={{
          display: 'block'
        }}
        {...rest}
      /> */}
      <EnhancedInput {...rest} className="px-2 py-1.5" />
    </div>
    {children && <div className='mt-2 text-sm'>
      {children}
    </div>}
  </div>
}