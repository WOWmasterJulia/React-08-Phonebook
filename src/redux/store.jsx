import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { filtersReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';
import { authReducer } from './auth/Auth_slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devContacts: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);



