import React from "react";
import CSS from "./ContactList.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from "redux/phoneSlice";

export const ContactList = () => {
    const dispatch = useDispatch();
    const { items, filter } = useSelector(state => state.contacts);

    const onDelete = id => {
        dispatch(deleteContact(id))
    };

    const getVisibleContacts = () => {
        const normalizedFil = filter.toLocaleLowerCase()
        console.log("contact:", filter)
        return items.filter(contact =>
            contact.name.toLocaleLowerCase().includes(normalizedFil))
    };

    const filterContact = getVisibleContacts();

    return (
        <ul className={CSS.contact}>
            {filterContact.map(contact =>
                <li key={contact.id} className={CSS.contactList}><p>{contact.name}: {contact.number}</p>
                    <button type="button" onClick={() => onDelete(contact.id)} className={CSS.contactButton}>Delete</button>
                </li>
            )}
        </ul>
    )
};
