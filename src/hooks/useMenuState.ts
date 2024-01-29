import { useState, useEffect } from 'react';

export const useMenuState = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const switchActiveState = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (isActive) {
      document.body.classList.add('lock');
    } else {
      document.body.classList.remove('lock');
    }
  }, [isActive]);
  return { isActive, switchActiveState };
};
