import { useState } from "react";
import CSS from "./Form.module.css"
import { useDispatch } from 'react-redux';
import { createContact } from "redux/phoneSlice";


export function Form({ onSubmit }) {
  const dispatch = useDispatch();
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
    dispatch(createContact({ name, number }))

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
