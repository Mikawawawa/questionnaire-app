import { NavigatorProps } from '@tarojs/components'
import { Navigator } from '@tarojs/components'
import React from 'react'

export const EnhancedLink = (props: NavigatorProps) => {
  return (
    <Navigator {...props} style={{
      display: 'inline'
    }}>
      <div className="font-xs text-gray-600 dark:text-gray-500 hover:underline">{props.children}</div>
    </Navigator>
  )
}
