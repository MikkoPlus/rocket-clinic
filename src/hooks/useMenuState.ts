import React from 'react';

export const useMenuState = () => {
  const [isActive, setIsActive] = React.useState<boolean>(false);

  const switchActiveState = () => {
    setIsActive(!isActive);
  };

  React.useEffect(() => {
    if (isActive) {
      document.body.classList.add('lock');
    } else {
      document.body.classList.remove('lock');
    }
  }, [isActive]);
  return { isActive, switchActiveState };
};
