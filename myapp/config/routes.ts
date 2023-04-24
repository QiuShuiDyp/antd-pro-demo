export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/test',
    name: 'test',
    icon: 'smile',
    component: './test',
  },
  // {
  //   path: '/editor-page',
  //   name: 'amisEditor',
  //   icon: 'smile',
  //   component: './editorPage',
  // },
  {
    path: '/',
    redirect: '/home',
  },
  {
    component: './404',
  },
];
