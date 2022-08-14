import React from "react";
import CSS from "./ContactList.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from "redux/phoneSlice";

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items)

    const onDelete = id => {
        dispatch(deleteContact(id))
    };

    return (
        <ul className={CSS.contact}>
            {contacts.map(contact =>
                <li key={contact.id} className={CSS.contactList}><p>{contact.name}: {contact.number}</p>
                    <button type="button" onClick={() => onDelete(contact.id)} className={CSS.contactButton}>Delete</button>
                </li>
            )}
        </ul>
    )
};
