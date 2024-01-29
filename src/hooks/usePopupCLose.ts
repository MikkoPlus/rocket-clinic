import { useEffect } from 'react';

type usePopupCloseProps = {
  isOpen: boolean;
  wrapperClass: string;
  closeClass: string;
  closePopup: () => void;
};

export const usePopupClose = ({
  isOpen,
  closePopup,
  wrapperClass,
  closeClass
}: usePopupCloseProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleOverlay = (evt: MouseEvent) => {
      const el = evt.target as Element;
      if (!el) return;
      if (
        el.classList.contains(wrapperClass) ||
        el.classList.contains(closeClass)
      ) {
        closePopup();
      }
    };

    const handleEscape = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        closePopup();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleOverlay);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleOverlay);
    };
  }, [isOpen, closePopup]);
};
