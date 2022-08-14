import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { nanoid } from 'nanoid/non-secure'

const initialState = {
    contacts: {
        items: [],
        filter: ''
    }
};

const phoneSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        createContact(state, action) {
            const id = nanoid();
            const contact = {
                id,
                name: action.payload.name,
                number: action.payload.number,
            };
            if (
                state.contacts.items.some(
                    el => el.name.toLowerCase() === contact.name.toLowerCase(),
                )
            ) {
                toast.error(`${contact.name} is already in contacts!`);
                return;
            }
            state.contacts.items = [...state.contacts.items, contact];
        },
        filterContact(state, action) {
            console.log(state.filter)
            state.filter = action.payload;
        },
        deleteContact(state, action) {
            state.contacts.items = state.contacts.items.filter(item => item.id !== action.payload);
        },
    },
});

export const { createContact, filterContact, deleteContact } = phoneSlice.actions;

export default phoneSlice.reducer;