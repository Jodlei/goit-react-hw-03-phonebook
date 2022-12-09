import styled from 'styled-components';

export const ContactList = styled.ul`
  width: 500px;
  min-height: 250px;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: baseline;
  :not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const NameValue = styled.p`
  margin-bottom: 15px;
`;

export const PhoneValue = styled.span`
  margin-left: 20px;
`;

export const DeleteButton = styled.button`
  width: 200px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  margin-left: auto;
  cursor: pointer;
  vertical-align: middle;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  text-transform: uppercase;
  min-width: 64px;
  padding: 6px 16px;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: rgba(0, 0, 0, 0.87);
  background-color: rgb(144, 202, 249);
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  :hover {
    background-color: rgb(66, 165, 245);
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
      rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
  }
`;
