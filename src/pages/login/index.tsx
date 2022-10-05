import React from 'react';

import { View, Button } from '@tarojs/components'
import { useModal } from 'taro-hooks'

export default () => {
  const [show] = useModal({
    title: 'init title',
    content: 'init content'
  })
  return (
    <View>
      <Button onClick={() => {
        console.log('ok')
        show()
      }}>abc</Button>
    </View>
  );
};