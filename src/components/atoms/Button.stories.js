import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from "./Button";

export default {
    title: 'atoms | Button',
    component: Button,
};

const clickHandler = () => {
    alert("Click!")
};

const text = "Hello There";


export const Text = (props) => <Button handler={clickHandler} text={text}/>;
