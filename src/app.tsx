import React from 'react';
import {
  BasicLayoutProps,
  Settings as LayoutSettings,
} from '@ant-design/pro-layout';
import RightContent from '@/pages/rightContent';
import Footer from '@/pages/footer';

export const layout = ({
  initialState,
}: {
  initialState: { settings?: LayoutSettings; };
}): BasicLayoutProps => {
  return {
    
    // footerRender: () => <Footer />,
    menuHeaderRender: undefined,
    menuDataRender:() =>[       //此功能可以实现动态路由，用来渲染访问路由
        {
          path: '/',
          name: '首页',
        },
        { path: '/users', name: '用户信息' },
        { path: '/foo', name: 'foo' },
        { path: '/dragDemo', name: '测试拖拽' }
    ],
    ...initialState?.settings,
  };
};