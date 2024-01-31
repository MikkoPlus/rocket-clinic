import { useState } from 'react';

export const useMenuState = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const switchActiveState = () => {
    setIsActive(!isActive);
  };

  return { isActive, switchActiveState };
};
