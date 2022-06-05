import React from 'react';
import Number from '../component/number';
import { action } from '@storybook/addon-actions';
import '../App.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Numero',
  component: Number,
  argTypes: { handleClick: {action: "Clicked"}}
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Number1 = () => <Number value='1' onClick={action('clicked')}/>;

export const NumberButton = Number1.bind({})

NumberButton.args = {
  value: "1",
}
