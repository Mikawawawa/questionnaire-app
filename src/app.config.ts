export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/login/index',
    'pages/answer/index',
    'pages/history/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  // tabBar: {
  //   list: [
  //     // {
  //     //   pagePath: 'pages/index/index',
  //     //   text: 'Home'
  //     // },
  //     // {
  //     //   pagePath: 'pages/login/index',
  //     //   text: 'Login'
  //     // }
  //   ]
  // }
})
