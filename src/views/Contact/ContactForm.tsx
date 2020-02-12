import * as React from 'react';

import { IContactFormErrors, IContactFormValues } from '../../types';
import './Contact.scss';

interface IContactFormProps {
  handleChange: (
    event:
      React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  handleSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
  handleSingleFieldValidation: (
    event: React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  formValues: IContactFormValues;
  formErrors: IContactFormErrors;
}

const ContactForm: React.FC<IContactFormProps> = ({
  handleChange, handleSubmit, formValues,
  handleSingleFieldValidation, formErrors,
}) => {
  const { name, email, message } = formValues;
  const {
    name: nameError, email: emailError, message: messageError,
  } = formErrors;

  return (
    <form
      className='contact'
      onSubmit={handleSubmit}
      netlify-honeypot='bot-field'
      data-netlify='true'
    >
      <h1>Get In Touch</h1>
      <div className='contact-item'>
        <label>
          Name
          <span className='required-notation'>*</span>
        </label>
        <input
          type='text'
          name='name'
          onChange={handleChange}
          value={name}
          onBlur={handleSingleFieldValidation}
        />
        <span className='error-note'>{nameError}</span>
      </div>
      <div className='contact-item'>
        <label>
          Email
          <span className='required-notation'>*</span>
        </label>
        <input
          type='email'
          name='email'
          onChange={handleChange}
          value={email}
          onBlur={handleSingleFieldValidation}
        />
        <span className='error-note'>{emailError}</span>
      </div>
      <div className='contact-item'>
        <label>
          Message
          <span className='required-notation'>*</span>
        </label>
        <textarea
          name='message'
          rows={4}
          onChange={handleChange}
          value={message}
          onBlur={handleSingleFieldValidation}
        />
        <span className='error-note'>{messageError}</span>
      </div>
      <div className='contact-cta'>
        <button type='submit' className='btn btn-primary'>
          Submit
          <i className='material-icons'>send</i>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
