import * as React from 'react';

import { errorsMap } from '../../settings';
import { IContactFormErrors, IContactFormValues } from '../../types';
import './Contact.scss';
import ContactForm from './ContactForm';

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
};

const Contact: React.FC = () => {
  const defaultFormData: IContactFormValues = {
    name: '',
    email: '',
    message: '',
  };

  const [formValues, setFormValues] = React.useState(defaultFormData);
  const [formErrors, setFormErrors] = React.useState(defaultFormData);

  const handleChange = (
    event:
      React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    event.preventDefault();

    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSingleFieldValidation = (
    event:
      React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    let formErrorsData: IContactFormErrors = {
      ...formErrors,
      [name]: errorsMap[name],
    };

    if (value.trim()) {
      formErrorsData = {
        ...formErrors,
        [name]: '',
      };
    }

    setFormErrors(formErrorsData);
  };

  const handleAllFieldsValidation = () => {
    const formErrorsData: IContactFormErrors = {
      ...formErrors,
    };
    let hasEmptyField: boolean = false;

    Object
      .entries(formValues)
      .forEach(([key, value]) => {
        if (!value.trim()) {
          formErrorsData[key] = errorsMap[key];

          hasEmptyField = true;
        }
      });

    return {
      hasEmptyField,
      formErrorsData,
    };
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { hasEmptyField, formErrorsData } = handleAllFieldsValidation();
    if (hasEmptyField) {
      setFormErrors(formErrorsData);

      return;
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formValues }),
    })
      .then(() => {
        alert('Success!');
        setFormValues(defaultFormData);
      })
      .catch((error) => alert(error));
  };

  return (
    <ContactForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleSingleFieldValidation={handleSingleFieldValidation}
      formValues={formValues}
      formErrors={formErrors}
    />
  );
};

export default Contact;
