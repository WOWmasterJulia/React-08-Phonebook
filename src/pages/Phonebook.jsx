import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { ContactFind } from '../components/ContactFind/ContactFind';
import { fetchAllContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';

export default function Phonebook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactFind />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
};