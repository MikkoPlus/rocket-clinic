export interface useInputProps {
  isFormOpen: boolean;
  inputName: string;
  isInputValid: (isValid: boolean) => void;
  updateFormData: (name: string, value: string) => void;
}

export interface IInput
  extends React.InputHTMLAttributes<HTMLInputElement>,
    useInputProps {
  type: string;
  placeholder: string;
}
