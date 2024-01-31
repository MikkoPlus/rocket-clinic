export interface ICheckUps {
  openModal: () => void;
}

export interface ICheckUp extends ICheckUps {
  title: string;
  gender: string;
  checkups: string[];
  oldPrice: number;
  currentPrice: number;
}
