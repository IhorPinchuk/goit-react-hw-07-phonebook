import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contactsApi';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    return await fetchContacts();
  }
);

export const postContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { dispatch }) => {
    await addContact(newContact);
    return await dispatch(getContactsThunk());
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { dispatch }) => {
    await deleteContact(id);
    return await dispatch(getContactsThunk());
  }
);
