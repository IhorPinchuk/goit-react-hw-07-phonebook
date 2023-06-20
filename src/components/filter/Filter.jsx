import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
// import { contactsSelector } from 'redux/contacts/selectors';
import { filterContact } from 'redux/filter/filterSlice';
import { filterSelector } from 'redux/filter/selectors';

export default function Filter() {
  const dispatch = useDispatch();

  const { filter } = useSelector(filterSelector);
  // const {contacts} = useSelector(contactsSelector);
  // console.log('filter :>> ', filter);
  // console.log('contacts :>> ', contacts);

  // const contactsFilter = () => {
  //   contacts.filter(item =>
  //   item.name.toLowerCase().includes(filter.toLowerCase())
  // );
  // }

  const handleChange = e => {
    dispatch(filterContact(e.target.value));
     };

  

  return (
    <label>
      Find contacts by name
      <input
        className={css.filter__input}
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
      ></input>
    </label>
  );
}
