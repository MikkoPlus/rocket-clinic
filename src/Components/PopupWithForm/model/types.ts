import { IPopup } from '@component/ui/Popup/model/types';

export interface ISubmitState {
  switchLoadingState: (state: boolean) => void;
  switchSuccessState: (state: boolean) => void;
  showTooltipModal: () => void;
  closeModal: () => void;
}

export interface IPopupWithForm extends IPopup, ISubmitState {
  isLoading: boolean;
}
