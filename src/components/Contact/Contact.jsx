import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "../Contact/Contact.module.css";

export default function Contact({ contact, onDelete }) {
  const handleClick = () => {
    onDelete(contact.id);
  };

  return (
    <div className={css.contactListItem}>
      <p>
        <FaUser />
        {contact.name}
      </p>
      <p>
        <BsFillTelephoneFill />
        {contact.number}
      </p>
      <button onClick={handleClick} type="button">
        Delete
      </button>
    </div>
  );
}
