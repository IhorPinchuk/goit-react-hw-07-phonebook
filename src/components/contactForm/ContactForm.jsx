import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { postContactsThunk } from 'components/services/contactsThunk';
import { contactsSelector } from 'redux/contacts/selectors';

export const ContactForm = () => {
  const { contacts } = useSelector(contactsSelector);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const newContact = {
    name,
    phone,
  };

  const handleChangeName = e => {
    const { value } = e.currentTarget;
    setName(value);
  };

  const handleChangeNumber = e => {
    const { value } = e.currentTarget;
    setPhone(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contactNameToLowerCase = contacts.map(contact =>
      contact.name.toLowerCase()
    );
    if (contactNameToLowerCase.includes(name.toLowerCase())) {
      Notify.failure(`${name} is already in contacts.`);
      return;
    }
    dispatch(postContactsThunk(newContact));
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className={css.form__name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChangeName}
        />
      </label>
      <label>
        Number
        <input
          className={css.form__number}
          type="tel"
          name="number"
          pattern="^[0-9]+$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={handleChangeNumber}
        />
      </label>
      <button className={css.form__btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
