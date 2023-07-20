import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    contacts: contactsReducer,
  },
});
