import React from 'react';
import { action } from '@storybook/addon-actions';
import Recipes from "./Recipes";
import TailwindCss from "../../tailwind.css"

export default {
    title: 'templates | Recipes',
    component: Recipes,
};

const clickHandler = () => {
    alert("Click!")
};

const text = "Hello There";


export const Text = (props) => <Recipes handler={clickHandler} text={text}/>;
