import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function ContactList() {
  const searchValue = useSelector((state) => state.filters.name);
  const contactsState = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  const visibleContacts = contactsState.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleDelete = (items) => {
    dispatch(deleteContact(items));
  };

  return (
    <ul className={css.contactList}>
      {visibleContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} onDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
}

// const visibleContacts = contacts.filter((contact) =>
//   contact.name.toLowerCase().includes(filter.toLowerCase())
// );
