export interface useInputProps {
  isFormOpen: boolean;
  isInputValid: (isValid: boolean) => void;
  updateFormData: (name: string, value: string) => void;
  name: string;
}

export interface IInput
  extends React.InputHTMLAttributes<HTMLInputElement>,
    useInputProps {
  name: string;
  type: string;
  placeholder: string;
}
