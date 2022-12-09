import PropTypes from 'prop-types';
import { Formik } from 'formik';

import {
  Label,
  Input,
  PhoneBookForm,
  SubmitButton,
} from './PhoneBookEditor.styled';

export const PhoneBookEditor = ({ addContact }) => {
  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={addContact}>
      <PhoneBookForm>
        <Label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Label htmlFor="number">
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <SubmitButton type="submit">Add contact</SubmitButton>
      </PhoneBookForm>
    </Formik>
  );
};
PhoneBookEditor.propTypes = {
  addContact: PropTypes.func.isRequired,
};
