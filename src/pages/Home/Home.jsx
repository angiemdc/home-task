import React, { Suspense, lazy } from 'react';
import { Modal } from 'antd';
import { Actions } from '../../context/ModalContext';
import { useModal } from '../../hooks/useModal';
import {
  Footer,
  Header,
  Search,
  ErrorBoundary,
  Layout,
  AddEditMovie
} from '../../components';

const TabsMovies = lazy(() =>
  import('../../components').then((module) => ({
    default: module.TabsMovies
  }))
);

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
      <Header>
        <ErrorBoundary>
          <Search details={[]} />
        </ErrorBoundary>
      </Header>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <TabsMovies />
        </Suspense>
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
