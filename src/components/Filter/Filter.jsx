import React from "react";
import CSS from "./Filter.module.css";
import { filterContact } from "redux/phoneSlice";
import { useDispatch } from 'react-redux';

const Filter = () => {
    const dispatch = useDispatch();


    const onChange = e => {
        dispatch(filterContact(e.currentTarget.value))
    }

    return (<label htmlFor="" className={CSS.filter}>
        Find contacts by name
        <input type="text" onChange={onChange} />
    </label>)
};

export default Filter;
