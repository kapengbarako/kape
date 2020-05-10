import React from 'react';
import { action } from '@storybook/addon-actions';
import SingleRecipe from "./SingleRecipe";
import TailwindCss from "../../tailwind.css"

export default {
    title: 'templates | SingleRecipe',
    component: SingleRecipe,
};

const clickHandler = () => {
    alert("Click!")
};

const text = "Hello There";


export const Text = (props) => <SingleRecipe handler={clickHandler} text={text}/>;
