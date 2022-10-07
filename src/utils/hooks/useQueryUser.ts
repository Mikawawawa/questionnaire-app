import { useEffect } from 'react'
import Taro from '@tarojs/taro'
import { useDispatch, useSelector } from 'react-redux'
import { SET_LOGIN, SET_NOT_LOGIN } from '@/reducer/user'


export const useQueryUser = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    Taro.checkSession({
      success: async function () {
        //session_key 未过期，并且在本生命周期一直有效
        const token = Taro.getStorageSync('token')
        if (!!token) {
          const res = await Taro.request({
            url: `http://localhost:3000/api/wechat/auth`,
          })
          console.log(res)
          if (res.statusCode !== 200) {
            Taro.removeStorageSync('token')
            dispatch({
              type: SET_NOT_LOGIN,
            })
          } else {
            dispatch({
              type: SET_LOGIN,
            })
          }
        } else {
          dispatch({
            type: SET_NOT_LOGIN,
          })
        }
      },
      fail: function () {
        // session_key 已经失效，需要重新执行登录流程
        dispatch({
          type: SET_NOT_LOGIN,
        })
      },
    })
  }, [])
}