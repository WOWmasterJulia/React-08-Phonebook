import { Layout } from './Layout';
import { useAuth } from '../hooks/useAuth';
import { refreshUser } from '../redux/auth/Auth_operations';
import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

import css from './App.module.css'
const Register = lazy(() => import('../pages/Register'));
const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Phonebook = lazy(() => import('../pages/Phonebook'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="contacts"
            element={<PrivateRoute redirectTo="/" component={<Phonebook />} />}
          />
          {/* <Route path="profile" element={<PrivateRoute redirectTo="/" component={<ProfileView />} />}/>
          <Route path="profile/edit" element={<PrivateRoute redirectTo="/" component={<EditProfileView />} />}/> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};


// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { ContactFind } from './ContactFind/ContactFind';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchAllContacts } from 'redux/operations';
// import { selectIsLoading, selectError } from 'redux/selectors';
// import css from './App.module.css'

// export const App = () => {
//   const dispatch = useDispatch();
//    // Получаем части состояния
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);
//   // Вызываем операцию
//   useEffect(() => {
//     dispatch(fetchAllContacts());
//   }, [dispatch]);

// return (
//       <div>
//         <h1 className={css.h1}>Phonebook</h1>
//         <ContactForm />
//         <h2 className={css.h2}>Contacts</h2>
//         <ContactFind />
//         {isLoading && !error && <b>Request in progress...</b>}
//         <ContactList /> 
//       </div>
//     );
// }