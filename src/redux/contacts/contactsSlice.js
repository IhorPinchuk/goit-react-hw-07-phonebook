import { createSlice } from '@reduxjs/toolkit';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { initialState } from './initialState';
import {
  getContactsThunk,
  // postContactsThunk,
} from 'components/services/contactsThunk';

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.contacts = payload;
  state.error = payload;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

// const postHandleFulfilled = ({ contacts }, { payload }) => {
//   return {
//         contacts: [payload, ...contacts],
//       };
// };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      // .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.fulfilled, handleFulfilled)
      // .addCase(postContactsThunk.fulfilled, postHandleFulfilled)
      // .addCase(getContactsThunk.rejected, handleRejected)
      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
