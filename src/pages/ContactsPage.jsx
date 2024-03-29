import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Search } from '../components/Search/Search';
import { ContactList } from '../components/ContactList/ContactList';
import { Loader } from 'components/Loader/Loader';
import { fetchAllContacts } from 'redux/phone.reducer';
import { selectIsLoading, selectError } from 'redux/phone.selectors';
import css from '../components/App.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const errorMessage = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className={css.title}>Phone book</h1>
      <ContactForm />
      <h2 className={css.contactsTitle}>Contacts</h2>
      <p className={css.search}>Find contacts by name</p>
      <Search />
      {isLoading && <Loader />}
      {errorMessage && (
        <div>Something went wrong. Error message: {errorMessage}</div>
      )}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
