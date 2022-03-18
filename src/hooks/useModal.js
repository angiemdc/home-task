import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

/**
 * Hook to open modal  with Add, Edit and Deleted
 * @returns Modal object
 */
export const useModal = () => useContext(ModalContext);
