import React from 'react';
import Suma from '../component/suma';
import { action } from '@storybook/addon-actions';
import '../App.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Suma',
  component: Suma
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Suma1 = () => <Suma onClick={action('clicked')}/>;
