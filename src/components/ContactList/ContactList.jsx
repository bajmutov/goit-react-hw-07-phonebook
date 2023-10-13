import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {filteredContacts &&
        filteredContacts.map(({ id, name, phone }) => (
          <li key={id} className="contactItem">
            {name}: {phone}
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
