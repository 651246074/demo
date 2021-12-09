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
    rightContentRender: () => <RightContent />,
    footerRender: () => <Footer />,
    menuHeaderRender: undefined,
    ...initialState?.settings,
  };
};