import React from 'react';
import { Result } from 'antd';

const NoData = () => {
  return (
    <Result status='404' title='404' subTitle='Không có thông tin sinh viên.' />
  );
};

export default NoData;
