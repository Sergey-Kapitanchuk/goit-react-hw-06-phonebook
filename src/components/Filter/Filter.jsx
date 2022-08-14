import React from "react";
import CSS from "./Filter.module.css";
import { filterContact } from "redux/phoneSlice";
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
    const dispatch = useDispatch();
    const value = useSelector(e => e.contacts.filter);

    const onChange = e => {

        dispatch(filterContact(e.currentTarget.value))
    }

    return (<label htmlFor="" className={CSS.filter}>
        Find contacts by name
        <input type="text" value={value} onChange={onChange} />
    </label>)
};

export default Filter;
