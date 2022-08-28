import { useState } from "react";
import CSS from "./Form.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { createContact } from "redux/phoneSlice";
import { nanoid } from 'nanoid/non-secure'
import { toast } from "react-hot-toast";



export function Form({ onSubmit }) {
  const dispatch = useDispatch();
  const items = useSelector(el => el.contacts.items);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputChange = e => {
    const { value, name } = e.currentTarget;
    name === 'name'
      ? setName(value)
      : setNumber(value);
  };

  const contactSubmit = e => {
    e.preventDefault();
    const id = nanoid();
    const contact = {
      id,
      name,
      number
    };
    if (
      items.some(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      toast.error(`${name} is already in contacts!`);
      return;
    }
    dispatch(createContact({ contact }))

    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={contactSubmit} className={CSS.form}>
        <label className={CSS.formInput}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={nameInputChange}
            required
          />
        </label>

        <label htmlFor="contactId" className={CSS.formInput}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={nameInputChange}
            required
          />
        </label>

        <button type="submit" className={CSS.buttonForm}>Add contact</button>


      </form>
    </>
  )
};
