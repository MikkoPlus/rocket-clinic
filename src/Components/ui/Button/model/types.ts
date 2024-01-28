export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: string;
  text: string;
  additionalClass?: string;
}

export type ButtonVariantType = {
  [key: string]: string;
};
