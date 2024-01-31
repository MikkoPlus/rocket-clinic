export const onlyDigits = new RegExp('[^0-9]', 'gi');

export const phoneNumberRegExp = new RegExp(
  '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$'
);

export const emailRegExp = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);

export const isEmpty = (string: string) => {
  return string.trim().length === 0;
};

export const validationMessages = {
  emptyFieldMsg: 'Поле не может быть пустым',
  invalidPhoneNumberMsg: 'Введите корректный номер телефона',
  invalidEmailMsg: 'Введите корректную почту'
};

export const emailID =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_EMAIL_ID
    : 'service_2d8wyhk';

export const templateID =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_TEMPLATE_ID
    : 'template_krrkbvg';

export const publicKey =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_PUBLIC_KEY
    : 'ceFQyPGkomwgcZjFy';
