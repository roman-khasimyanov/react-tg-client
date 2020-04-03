import React, { ReactElement, PropsWithChildren, useState } from 'react';
import { CiCircleOutlined } from '@ant-design/icons';
import { Button, Layout } from 'antd';
import './index.less';

const { Sider, Content } = Layout;

type MainLayoutProps = {
  sidebarCollapsed: boolean;
};

const MainLayout = (
  { sidebarCollapsed, children }: PropsWithChildren<MainLayoutProps>,
): ReactElement => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  return (
    <Layout className="main-layout">
      <Sider
        theme={theme}
        collapsed={sidebarCollapsed}
        collapsedWidth={0}
      >
        <Button
          icon={<CiCircleOutlined />}
          onClick={(): void => setTheme('dark')}
        />
        huy
      </Sider>
      <Content>
        {children}
      </Content>
    </Layout>
  );
};

export default MainLayout;
