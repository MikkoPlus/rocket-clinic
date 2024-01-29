import { useState } from 'react';

export const useModalState = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return { isModalVisible, openModal, closeModal };
};
