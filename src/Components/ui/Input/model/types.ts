export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  placeholder: string;
  isInputValid: (isValid: boolean) => void;
  updateFormData: (name: string, value: string) => void;
  isFormOpen: boolean;
}
