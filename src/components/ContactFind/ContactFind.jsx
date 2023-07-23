import css from './ContactFind.module.css'
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from 'react-redux';
import { selectValueFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filterSlice';

export const ContactFind = () => {
    const dispatch = useDispatch();
    const find = useSelector(selectValueFilter);
    const inputId = nanoid();
  
    const changeFilter = e => {
      const value = e.currentTarget.value.toLowerCase();
      dispatch(setFilter(value));
  };

    return (
      <div className={css.wrap_find}>
        <label className={css.find_label} htmlFor={inputId}>
          Find contacts by name
        </label>
        <input
          id={inputId}
          className={css.find_input}
          type="text"
          name="find"
          value={find}
          placeholder="Find name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={changeFilter}
        />
      </div>
    );
};