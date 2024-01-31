import { useState } from 'react';

export const useModalWithFormState = () => {
  const [isModalWithFormVisible, setIsModalWithFormVisible] =
    useState<boolean>(false);

  const openFormModal = () => setIsModalWithFormVisible(true);
  const closeFormModal = () => setIsModalWithFormVisible(false);

  return {
    isModalWithFormVisible,
    openFormModal,
    closeFormModal
  };
};
