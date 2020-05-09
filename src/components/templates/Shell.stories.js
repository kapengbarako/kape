import React from 'react';
import { action } from '@storybook/addon-actions';
import Shell from "./Shell";
import TailwindCss from "../../tailwind.css"

export default {
    title: 'templates | Shell',
    component: Shell,
};

const clickHandler = () => {
    alert("Click!")
};

const text = "Hello There";


export const Open = (props) => <Shell handler={clickHandler} text={text} hideMenu={false}/>;
