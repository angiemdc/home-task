import React from 'react';
import { Modal } from 'antd';

import 'antd/dist/antd.css';

export const ModalMovie = ({
  visible,
  handleOk,
  confirmLoading,
  handleCancel,
  children
}) => {
  return (
    <Modal
      title='Title'
      visible={visible}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <div>{children}</div>
    </Modal>
  );
};
