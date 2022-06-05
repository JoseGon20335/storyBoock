import React from 'react';
import { action } from '@storybook/addon-actions';
import '../App.css';
import Multi from '../component/multiplicacion';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Multiplicacion',
  component: Multi
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Multi1 = () => <Multi onClick={action('clicked')}/>;
