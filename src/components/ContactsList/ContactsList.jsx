import {
  ContactList,
  ContactItem,
  NameValue,
  PhoneValue,
  DeleteButton,
} from './ContactsList.styled';

export const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <>
      <ContactList>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              <NameValue>{name}</NameValue>
              <PhoneValue>{number}</PhoneValue>
              <DeleteButton type="button" onClick={() => deleteContact(id)}>
                Delete contact
              </DeleteButton>
            </ContactItem>
          );
        })}
      </ContactList>
    </>
  );
};
