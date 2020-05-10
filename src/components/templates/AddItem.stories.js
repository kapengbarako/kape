import React from 'react';
import { action } from '@storybook/addon-actions';
import AddItem from "./AddItem";
import TailwindCss from "../../tailwind.css"

export default {
    title: 'templates | AddItem',
    component: AddItem,
};

const clickHandler = () => {
    alert("Click!")
};

const text = "Hello There";


export const Text = (props) => <AddItem handler={clickHandler} text={text}/>;
