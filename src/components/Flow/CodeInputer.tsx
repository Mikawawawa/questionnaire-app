import React from 'react'
import { FC, CSSProperties } from 'react'
import { EnhancedInput } from '@/components/Questionnaire/controls'
import { useState } from 'react'
import { useEffect } from 'react'
import { Input } from '@tarojs/components'
import { View } from '@tarojs/components'
import './CodeInputer.css'

interface IProps {
  size?: number
  onConfirm: (code: string) => void
}

const tailwindStyle = `block
text-base
font-normal
text-gray-500
bg-white bg-clip-padding
border border-solid border-gray-300
rounded
transition
ease-in-out
mt-1`

export const CodeInput: FC<IProps> = (props) => {
  const [captcha, setCaptcha] = useState('')
  const [focus, setFocus] = useState(false)

  const onChangeCaptcha = (e) => {
    let inputValue = e.detail.value.slice(0, props.size)
    setCaptcha(inputValue)
  }

  useEffect(() => {
    if (captcha.length >= Number(props.size)) {
      props.onConfirm?.(captcha)
    }
  }, [captcha, props.size])

  return (
    <View
      className="sendCaptcha-input-container"
      onClick={() => {
        setFocus(true)
      }}
    >
      <Input
        className="sendCaptcha-input"
        type="number"
        maxlength={props.size}
        focus={focus}
        onInput={onChangeCaptcha}
        onBlur={() => {
          setFocus(false)
        }}
      />
      <div className="sendCaptcha-input-container space-x-3">
        {Array(props.size)
          .fill('')
          .map((value, index) => {
            return (
              <View
                className={
                  (index === captcha.length ||
                    (captcha.length === props.size &&
                      index === props.size - 1)) &&
                  focus
                    ? `sendCaptcha-input-box sendCaptcha-input-box-at ${tailwindStyle}`
                    : `sendCaptcha-input-box form-control ${tailwindStyle}`
                }
                key={index}
              >
                {captcha[index]}
              </View>
            )
          })}
      </div>
    </View>
  )
}

{
  /* <EnhancedInput type='number' maxlength={1} value={item} style={{
  textAlign: 'center'
}} on={(value) => { console.log(value) }} /> */
}
