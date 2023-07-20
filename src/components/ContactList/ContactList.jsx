import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { selectFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contacts_list}>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
};