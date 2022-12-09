import PropTypes from 'prop-types';

import { FilterTitle, FilterForm, Label, Input } from './Filter.styled';

export const Filter = ({ title, doesFiltration }) => {
  return (
    <>
      <FilterTitle>{title} </FilterTitle>

      <FilterForm>
        <Label htmlFor="name">
          Name
          <Input
            onChange={doesFiltration}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
      </FilterForm>
    </>
  );
};
Filter.propTypes = {
  doesFiltration: PropTypes.func.isRequired,
};
