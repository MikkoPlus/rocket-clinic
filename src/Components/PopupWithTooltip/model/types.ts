import { IPopup } from '@component/ui/Popup/model/types';

export interface IPopupWithTooltip extends IPopup {
  isSuccess: boolean;
  isLoading: boolean;
}
