import { useState } from 'react';

export const useModalWithTooltipState = () => {
  const [isTooltipModalVisible, setIsTooltipModalVisible] =
    useState<boolean>(false);

  const openTooltipModal = () => setIsTooltipModalVisible(true);
  const closeTooltipModal = () => setIsTooltipModalVisible(false);

  return { isTooltipModalVisible, openTooltipModal, closeTooltipModal };
};
