import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/Auth_operations';
import { toast } from 'react-hot-toast'
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      }))
      .unwrap()
      .then(() => toast.success('Operation successfully!'))
      .catch(() => toast.error('Something went wrong... Try again.'));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        User name
        <input className={css.register_input} type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <input className={css.register_input} type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input className={css.register_input} type="password" name="password" />
      </label>
      <button className={css.register_btn} type="submit">
        Register
      </button>
    </form>
  );
};