import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/Auth_operations';
import { useAuth } from '../../hooks/useAuth';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <div className={css.wrapperusername}>
        <p className={css.username}>{user.name}</p>
        <p className={css.username}>{user.email}</p>
      </div>
      <button className={css.btnLogout} type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};