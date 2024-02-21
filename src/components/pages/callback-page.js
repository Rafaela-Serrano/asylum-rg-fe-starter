import React from 'react';
import { HeaderContent } from '../Layout/Header';
import { Layout } from 'antd';
import { colors } from '../../styles/data_vis_colors';
const { primary_accent_color } = colors;

export const CallbackPage = () => {
  const { Header } = Layout;
  return (
    <Layout>
      <Header
        style={{
          height: '10vh',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: primary_accent_color,
        }}
      >
        <HeaderContent />
      </Header>
    </Layout>
  );
};
