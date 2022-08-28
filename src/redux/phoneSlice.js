import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contacts: {
        filter: '',
        items: [],
    }
};

const phoneSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        createContact(state, action) {
            const contact = action.payload.contact

            state.contacts.items = [...state.contacts.items, contact];
        },

        filterContact(state, action) {
            state.contacts.filter = action.payload;
            console.log("state:", state.filter)
        },

        deleteContact(state, action) {
            state.contacts.items = state.contacts.items.filter(item => item.id !== action.payload);
        },
    },
});

export const { createContact, filterContact, deleteContact, getVisibleContacts } = phoneSlice.actions;

export default phoneSlice.reducer;