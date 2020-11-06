import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactForm from "../../components/contactForm/ContactForm";
import ContactList from "../../components/contactList/ContactList";
import Filter from "../../components/filter/Filter";
import ResetButton from "../../components/resetButton/ResetButton";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import styles from "./ContactsView.module.css";

const ContactsView = () => {
  const contacts = useSelector((state) => contactsSelectors.getContacts(state));

  const dispatch = useDispatch();

  const collectionId = useSelector((state) =>
    contactsSelectors.getCollectionId(state)
  );

  useEffect(() => {
    dispatch(contactsOperations.setUserCollectionId());
  }, [dispatch]);

  useEffect(() => {
    collectionId && dispatch(contactsOperations.fetchContacts());
  }, [dispatch, collectionId]);

  return (
    <div className={styles.wrapper}>
      <ContactForm />
      <h2>Contacts</h2>

      {contacts && contacts.length > 1 && (
        <div className={styles.filters}>
          <Filter />
          <ResetButton />
        </div>
      )}

      {contacts.length > 0 ? <ContactList /> : <p>No contacts here yet</p>}
    </div>
  );
};

export default ContactsView;
