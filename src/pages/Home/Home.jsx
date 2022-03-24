import React from 'react';
import { Modal } from 'antd';
import { Actions } from '../../context/ModalContext';
import { useModal } from '../../hooks/useModal';
import {
  Footer,
  Header,
  Layout,
  AddEditMovie,
  TabsMovies
} from '../../components';

/**
 * Renders the main Home of the APP
 * @returns
 */

export const Home = () => {
  const { state, updateModalType } = useModal();
  const { openModal } = state;
  const handleCancel = () => {
    updateModalType(Actions.CLOSE_MODAL);
  };

  return (
    <div>
      <Header />
      <Layout>
        <TabsMovies />
      </Layout>
      <Footer />
      <Modal
        destroyOnClose
        visible={openModal}
        onCancel={handleCancel}
        centered
        footer={null}
        width={976}
      >
        <AddEditMovie />
      </Modal>
    </div>
  );
};
