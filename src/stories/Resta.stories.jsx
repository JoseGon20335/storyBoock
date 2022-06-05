import React from 'react';
import { action } from '@storybook/addon-actions';
import '../App.css';
import Resta from '../component/resta';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Resta',
  component: Resta
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Resta1 = () => <Resta onClick={action('clicked')}/>;
