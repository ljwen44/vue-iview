import Layout from '@/views/layout.vue'
export const routerMap = [
  {
    path: '/form',
    name: 'form',
    component: () => import('@/views/form.vue'), // 按需引入加载
    meta: {
      title: '表单'
    }
  },
  {
    path: '/upload',
    name: 'upload',
    component: () => import('@/views/upload.vue'),
    meta: {
      title: '上传文件'
    }
  },
  {
    path: '/component',
    name: 'component',
    component: Layout,
    meta: {
      title: 'layout'
    },
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: 'table',
        name: 'table',
        component: () => import('@/views/table.vue'),
        meta: {
          title: '表格'
        }
      },
      {
        path: 'folder-tree',
        name: 'folder-tree',
        component: () => import('@/views/folder-tree/folder-tree.vue'),
        meta: {
          title: '文件夹'
        }
      },
      {
        path: '/params/:id',
        name: 'params',
        component: () => import('@/views/argu.vue'),
        meta: {
          title: '参数'
        }
      }
    ]
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@/views/demo.vue'),
    // beforeEnter: (to, from, next) => {
    //   if (from.name === 'argu') alert('这是从argu来的')
    //   else alert('这不是从argu来的')
    //   next()
    // },
    meta: {
      title: 'demo'
    }
  },
  {
    path: '/parent',
    redirect: '/parent/child',
    name: 'parent',
    component: () => import('@/views/parent.vue'),
    meta: {
      title: 'parent'
    },
    children: [
      {
        path: 'child',
        name: 'child',
        component: () => import('@/views/child.vue'),
        meta: {
          title: '子组件child'
        }
      }
    ]
  },
  {
    path: '/name_view',
    name: 'name_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    },
    meta: {
      title: 'name_view'
    }
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('@/views/store.vue'),
    meta: {
      title: 'store'
    }
  },
  {
    path: '/count-to',
    component: () => import('@/views/count-to.vue'),
    name: 'count-to',
    meta: {
      title: 'count-to'
    }
  },
  {
    path: '/split-pane',
    component: () => import('@/views/split-pane.vue'),
    name: 'split-pane',
    meta: {
      title: 'split-pane'
    }
  },
  {
    path: '/menu_page',
    component: () => import('@/views/menu_page.vue'),
    name: 'menu_page',
    meta: {
      title: 'menu_page'
    }
  },
  {
    path: '/optimize',
    name: 'optimize',
    component: () => import('@/views/optimize.vue'),
    meta: {
      title: '选择框'
    }
  }
]

export const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/icon_page',
    name: 'icon_page',
    component: () => import('@/views/icon_page.vue'),
    meta: {
      title: '图标'
    }
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue'),
    meta: {
      title: '错误页'
    }
  }
]
