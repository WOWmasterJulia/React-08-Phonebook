import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { ContactFind } from '../components/ContactFind/ContactFind';
import { fetchAllContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';
import css from './Phonebook.module.css'

export default function Phonebook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <div className={css.wrap}>
      <h2>Phonebook</h2>
      <ContactForm />
      <h3>Contacts</h3>
      <ContactFind />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
};
// const styles = {
//   container: {
//     minHeight: 'calc(100vh - 50px)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
//   };