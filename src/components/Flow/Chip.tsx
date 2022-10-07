import React from 'react'
import { FC } from 'react'

export const Chip: FC<any> = (props) => {
  return (
    <span
      style={{
        display: 'inline-block',
        background: "#F17477"
      }}
      className="mx-1 px-3 py-2 rounded-full text-white font-semibold text-xs flex align-center w-max transition duration-300 ease"
    >
      {props.children}
    </span>
  )
}
