import React from 'react';
import Number from '../component/number';
import { action } from '@storybook/addon-actions';
import '../App.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Numero',
  component: Number
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Suma1 = () => <Number value='1' onClick={action('clicked')}/>;
export const Suma2 = () => <Number value='2' onClick={action('clicked')}/>;
export const Suma3 = () => <Number value='3' onClick={action('clicked')}/>;
export const Suma4 = () => <Number value='4' onClick={action('clicked')}/>;
export const Suma5 = () => <Number value='5' onClick={action('clicked')}/>;
