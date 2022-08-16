import React from "react";
import CSS from "./Filter.module.css";
import { filterContact } from "redux/phoneSlice";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

const Filter = () => {
    const dispatch = useDispatch();
    const value = useSelector(e => e.contacts.filter)


    const onChange = e => {
        console.log("this:", value)
        dispatch(filterContact(e.target.value))
    }

    return (<label htmlFor="" className={CSS.filter}>
        Find contacts by name
        <input type="text" onChange={onChange} />
    </label>)
};

export default Filter;
