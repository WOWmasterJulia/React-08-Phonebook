import { nanoid } from "nanoid";
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactForm.module.css'
import { addContact } from "redux/operations";
import { selectContacts } from "redux/selectors";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const nameInputId = nanoid();
const numberInputId = nanoid();

const schema = yup.object().shape({
  name: yup
    .string().min(3).max(30)
    // .trim()
    // .matches(
    //   /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
    //   'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer'
    // )
    .required(),
  number: yup
    .string().min(6).max(15)
    // .trim()
    // .matches(
    //   /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
    //   'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    // )
    .required(),
  // number: yup.string().phone().required(),
});

const initValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const listContacts = useSelector(selectContacts);

  const handleSubmit = (values,{ resetForm }) => {
    if (listContacts.some(item => item.name === values.name)) {
      alert('This contact has already been added.');
      return;
    }
    dispatch(addContact(values));
    resetForm();
  }
  
  return (
    <Formik
      initialValues={initValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={css.contactForm} autoComplete="off">
        <label htmlFor={nameInputId} className={css.labelForm}>
          Name
        </label>
        <Field
          id={nameInputId}
          className={css.labelInput}
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Enter name"
        />
        <ErrorMessage name="name" />
        <label htmlFor={numberInputId} className={css.labelForm}>
          Number
        </label>
        <Field
          id={numberInputId}
          className={css.labelInput}
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          placeholder="Enter phone number"
        />
        <ErrorMessage name="number" />
        <button className={css.btnForm} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};



  // return (
  //   <form className={css.contactForm} onSubmit={handleSubmit}>
  //     <label htmlFor={nameInputId} className={css.labelForm}>Name</label>
  //     <input
  //       id={nameInputId}
  //       className={css.labelInput}
  //       type="text"
  //       name="name"
  //       value={name}
  //       placeholder="Enter name"
  //       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  //       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  //       required
  //       onChange={handleChange}
  //     />
  //     <label htmlFor={numberInputId} className={css.labelForm}>Number</label>
  //     <input
  //       id={numberInputId}
  //       className={css.labelInput}
  //       type="tel"
  //       name="number"
  //       value={number}
  //       placeholder="Enter phone number"
  //       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  //       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  //       required
  //       onChange={handleChange}
  //     />
  //     <button className={css.btnForm} type="submit">Add contact</button>
  //   </form>
  // );
