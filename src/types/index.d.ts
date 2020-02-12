export interface IThemeProps {
  [key: string]: string;
}

export interface IContactFormValues {
  name: string;
  email: string;
  message: string;
  [key: string]: string;
}

export interface IContactFormErrors extends IContactFormValues { }
