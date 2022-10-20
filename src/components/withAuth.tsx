import React, { useEffect, FC } from "react";
import Taro from "@tarojs/taro";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@tarojs/components";
import { SET_NOT_LOGIN, SET_LOGIN } from "@/reducer/user";

export const AuthButton: FC<any> = props => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block"
      }}
    >
      {React.cloneElement(props.children, { onclick: props.onClick })}

      {!user.hasLogin && (
        <Button
          open-type='getUserInfo'
          onGetUserInfo={async e => {
            console.log('here')
            Taro.showToast({ title: "正在登录中" });
            let token = Taro.getStorageSync("token");

            if (token) {
              const res = await Taro.request({
                url: `http://192.168.2.228:3000/api/wechat/auth`
              });

              if (res.statusCode !== 200) {
                Taro.removeStorageSync("token");
                dispatch({ type: SET_NOT_LOGIN });
              }

              dispatch({ type: SET_LOGIN });
              return;
            }
            const data = e.detail;

            Taro.login({
              success: async function(res) {
                if (res.code) {
                  //发起网络请求
                  const loginResult = await Taro.request({
                    url: "http://192.168.2.228:3000/api/wechat/login",
                    data: {
                      code: res.code,
                      encryptedData: data.encryptedData,
                      iv: data.iv
                    }
                  });
                  Taro.setStorageSync("token", loginResult.data.token);
                  dispatch({ type: SET_LOGIN });
                  Taro.showToast({
                    title: "登录成功",
                    icon: "success"
                  });
                  props.onClick?.()
                } else {
                  console.log("登录失败！" + res.errMsg);
                  dispatch({ type: SET_NOT_LOGIN });
                }
              }
            });

            console.log(props.onClick);
          }}
          style={{
            position: "absolute",
            backgroundColor: "transparent",
            border: "none",
            paddingLeft: 0,
            paddingRight: 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1
          }}
          plain
        />
      )}
    </div>
  );
};
