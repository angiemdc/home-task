import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

export const CustomModal = ({ children, openModal, handleCancel, footer }) => {
  return (
    <Modal
      destroyOnClose
      visible={openModal}
      onCancel={handleCancel}
      centered
      footer={footer}
      width={976}
    >
      {children}
    </Modal>
  );
};

CustomModal.defaultProps = {
  footer: null
};

CustomModal.propTypes = {
  children: PropTypes.element.isRequired,
  openModal: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
  footer: PropTypes.string
};
